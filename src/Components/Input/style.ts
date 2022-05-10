import styled from 'styled-components';

export const MyInput = styled.input`
 border: none;
 height: 40px;
 width: 110px;
 padding-left: 10px;
 border-radius: 1rem;
 background: ${props => props.theme.colors.backgroundInput};
 transition: 0.3s;

:focus {
 outline-color: #e8e8e8;
 background: #e8e8e8;
 box-shadow: inset 20px 20px 60px #c5c5c5,
		inset -20px -20px 60px #ffffff;
 transition: 0.3s;
}

::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
    -webkit-appearance: none;
	-moz-appearance:textfield;
    margin: 0;
}

`;

