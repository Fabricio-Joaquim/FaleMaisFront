import React, { ChangeEvent } from 'react';
import { MyInput } from './style';
import { Warpper, ErrorMessage} from '../style';
interface IProps{
		disabled?:boolean,
		placeholder?:string | undefined,
		pattern?: string
		label:string,
		name:string,
		handleChange?:(e: ChangeEvent<HTMLInputElement>)=>void,
		value?:string | number,
		showError?:boolean
		min?:number
}

const Input = ({disabled, label, placeholder, name,handleChange, pattern, value,showError,min }:IProps) => {
	
	return (
		<Warpper>
			<label htmlFor={name}>{label}</label>
			<MyInput 
				data-testid={name} 
				name={name} 
				min={min}
				value={value}
				type="number" 
				onChange={handleChange} 
				placeholder={placeholder} 
				disabled={disabled}
				pattern={pattern}
			/>
			{showError&&<ErrorMessage>campo invalido</ErrorMessage>}
		</Warpper>
	);
};

export default Input;