import React from 'react';
import {MyButton} from './style';
interface Props{
    children:string;
    type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({children,...rest}:Props) => {
	const {type} = rest;
	return (
		<MyButton type={type||'button'}>{children}</MyButton>
	);
};

export default Button;