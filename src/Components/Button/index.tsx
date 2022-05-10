import React from 'react';
import {MyButton} from './style';
interface Props{
    children:string;
    type?: 'button' | 'submit' | 'reset' | undefined
	disabled?:boolean;
}

const Button = ({children,...rest}:Props) => {
	const {type, disabled} = rest;
	return (
		<MyButton disabled={disabled} type={type||'button'}>{children}</MyButton>
	);
};

export default Button;