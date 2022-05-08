import React from 'react';
import { Warpper } from '../style';
const Select = ({...rest}) =>{
	const { name, label, handleChange } = rest;
	return(
		<Warpper>
			<label htmlFor={name}>{label}</label>
			<select
				data-testid={name}
				onChange={handleChange}
				placeholder='Selecionar DDD' name={name}>
				<option value='DDD'>DDD</option>
				<option value='DDD1'>DDD1</option>
				<option value='DDD2'>DDD2</option>
				<option value='DDD3'>DDD3</option>
			</select>
		</Warpper>
	);
};

export default Select;