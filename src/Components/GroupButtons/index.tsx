import React, { ChangeEvent } from 'react';
import Select from '../Select';
import Input from '../Input';
import { IForm } from '../../pages/Home/type';
interface IProps{
    handleChange?:(e: ChangeEvent<HTMLInputElement>)=>void,
    form:IForm,
    data:unknown,
    plans:unknown,
    origin:unknown
}

const GroupButton = ({handleChange,form, data, plans, origin }:IProps) => {
	return (<>
		<Input
			handleChange={handleChange}
			name="callMinute" 
			label='Minutos' 
			placeholder='Tempo(minuto)'
			value={form.callMinute}
			pattern="^[0-9]"
			min={1}
			showError={form.submited && !form.callMinute}
		/>
		<Select 
			handleChange={handleChange}
			value={form.origin} 
			name="origin"
			data={origin}
			label="Origem"
			showError={form.submited && !form.origin}
		/>
		<Select 
			handleChange={handleChange} 
			value={form.destin}
			name="destin"
			label="Destino"
			data={data}
			showError={form.submited && !form.destin}
		/>
		<Select
			handleChange={handleChange}
			value={form.plan}
			name="plan"
			label="Plano"
			data={plans}
			showError={form.submited && !form.plan}
		/>
	</>
	);
};

export default GroupButton;