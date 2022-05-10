import React from 'react';
import { Warpper, ErrorMessage } from '../style';
import { MySelect } from './style';

interface IMap{
	label: string,
	value:string,
	showError?:boolean
}

const Select = ({...rest}) =>{
	const { name, label, handleChange,data, showError } = rest;

	return(
		<Warpper>
			<label htmlFor={name}>{label}</label>
			<MySelect
				data-testid={name}
				onChange={handleChange}
				value={rest.value}
				name={name}>
				<option hidden value=''>{`Selecionar ${label}`}</option>
				{data?.map((item:IMap) => (
					<option key={Math.random()} value={item?.value}>
						{item?.label}
					</option>
				))}
			</MySelect>
			{showError&&<ErrorMessage>Campo inválido</ErrorMessage>}
		</Warpper>
	);
};

export default Select;