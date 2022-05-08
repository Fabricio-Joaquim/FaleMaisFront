import React, {ChangeEvent} from 'react';
import {MyInput} from './style';
import {Warpper} from '../style';
interface IProps{
		disabled?:boolean,
		placeholder?:string | undefined,
		label:string,
		name:string
		handleChange?:(e: ChangeEvent<HTMLInputElement>)=>void
}

const Input = ({disabled, label, placeholder, name,handleChange }:IProps) => {
	
	return (
		<Warpper>
			<label htmlFor={name}>{label}</label>
			<MyInput data-testid={name} name={name} type="number" onChange={handleChange} placeholder={placeholder} disabled={disabled} />
		</Warpper>
	);
};

export default Input;