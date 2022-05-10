import React, { ChangeEvent, useState, useCallback, useEffect, useMemo } from 'react';
import { Button, Table } from '../../Components';
import { FormStyled,ContainerButton, SubContainerInputs, MessageDBError } from './style';
import api from '../../services/';
import { useQuery } from 'react-query';
import convertArray from '../../utils/convertArray';
import Result from '../../Components/Result/index';
import GroupButton from '../../Components/GroupButtons';
import { IForm } from './type';
import {IdataForm} from '../../Components/Result/';
import Loading from '../../Components/Loading';

const initialForm: IForm = {
	origin: '',
	destin: '',
	plan: '',
	callMinute: 0,
	submited: false,
};

function App() {
	const [form, setForm] = useState<IForm>(initialForm);
	const [data, setData] = useState<unknown[]>([]);
	const [showResult, setShowResult] = useState(false);
	const [dataResult, setDataResult] = useState<IdataForm>({withPlan:0,withoutPlan:0});

	const fetchData = useCallback(async () =>
		api.get(`/search?origin=${form.origin}&destination=${form.destin}&plan=${form.plan}&callMinute=${form.callMinute}`)
			.then(({data}) => setDataResult(data)), [showResult, form]);

	const onSubmit = (e:ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setForm(values => ({...values, submited: true}));
		if (!verify){
			setShowResult(true);
			fetchData();
		}
	};

	const verify = useMemo(() => {
		if (form.origin && form.destin && form.plan && form.callMinute) {
			return false;
		}
		return true;
	}, [form]);

	const handleChange = useCallback(
		(event:ChangeEvent<HTMLInputElement>) => {
			const name = event.target.name;
			const value = event.target.value;
			setForm(values => ({...values, [name]: value}));
		}, [form]
	);
		
	const handleReset = () => {
		setForm(initialForm);
		!verify && setShowResult(!showResult);
		setData([]);
	};

	const { data:origin, isError, isLoading } = useQuery('origin', () =>
		api.get('/getAllOrigin')
			.then(({data}) => convertArray(data, 'origin'))
	);
	
	const { data:plans } = useQuery('getAllPlan', () =>
		api.get('/getAllPlan')
			.then(({data}) => convertArray(data, 'plan_name', 'plan_name'))
	);

	useEffect(() => {
		if (form.origin){
			api.get(`/getDestinByOrigin?origin=${form.origin}`)
				.then(({data}) => setData(convertArray(data, 'destination')))
				.catch(() => setData([]));
		}
	}, [form.origin]);
		
	if(isError) {
		return <MessageDBError>Falha no Banco de Dados, tentando reconectar</MessageDBError>;
	}

	if(isLoading) {
		return <Loading />;
	}

	return (
		<>
			<FormStyled noValidate onReset={handleReset} onSubmit={onSubmit}>
				<SubContainerInputs>
					<GroupButton 
						data={data} 
						origin={origin} 
						plans={plans} 
						form={form} 
						handleChange={handleChange}
					/>
				</SubContainerInputs>
				<ContainerButton>
					<Button type='submit'>Calcular</Button>
					<Button type='reset'>Limpar</Button>
				</ContainerButton>
			</FormStyled>
			{showResult?
				<Result dataForm={dataResult}/>:
				<Table />
			}
		</>
	);
}

export default App;