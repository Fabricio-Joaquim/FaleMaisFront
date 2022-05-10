import React from 'react';
import { MyTable } from '../Table/style';

export interface IdataForm {
	origin?: string;
	plan_minute?: number;
	destination?: string;
	plan_name?: string;
	price?: number;
	callMinute?: string;
	withoutPlan: number;
	withPlan: number;
}

interface Props{
    dataForm: IdataForm;
}

const convertCurrency = (value: number) => {
	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});
	return formatter.format(value);	
};

const Result = ({dataForm}:Props) => {
	return (
		<MyTable>
			<thead>
				<tr>
					<th>Origem</th>
					<th>Destino</th>
					<th>Tempo</th>
					<th>Plano</th>
					<th>Com FaleMais</th>
					<th>Sem FaleMais</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{dataForm?.origin}</td>
					<td>{dataForm?.destination}</td>
					<td>{dataForm?.callMinute}</td>
					<td>{dataForm?.plan_name}</td>
					<td>{convertCurrency(dataForm?.withPlan)}</td>
					<td>{convertCurrency(dataForm?.withoutPlan)}</td>
				</tr>
			</tbody>
		</MyTable>
	);
};

export default Result;