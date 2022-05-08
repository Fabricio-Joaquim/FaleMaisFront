import React, { ChangeEvent, useState } from 'react';
import {Button,Input, Table, Select} from '../../Components';
import { Container,ContainerButton } from './styled';

interface IForm {
	origin: string;
	destination: string;
	minute: number;
}
const initialForm: IForm = {
	origin: '',
	destination: '',
	minute: 0
};

function App() {
	const [input, setInput] = useState<IForm>(initialForm);
	const onSubmit = (e:ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(input);
	};
	
	const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		console.log(event.target.value);
		setInput(values => ({...values, [name]: value}));
	};
	

	return (
		<>
			<Container  onSubmit={onSubmit}>
				<div style={{display:'flex', flexDirection:'row'}}>
					<Input
						handleChange={handleChange}
						name="minute" 
						label='input' 
						placeholder='Digite seu numero' />
					<Select handleChange={handleChange} name="origin" label="Origem" />
					<Select handleChange={handleChange} name="destin" label="Destino" />
					<Select handleChange={handleChange} name="plan" label="Plano" />
				</div>
				<ContainerButton>
					<Button type='submit'>Button</Button>
					<Button type='reset'>Reset</Button>
				</ContainerButton>
			</Container>
			<Table />
		</>
	);
}

export default App;