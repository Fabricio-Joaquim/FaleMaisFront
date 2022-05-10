import styled from 'styled-components';

export const MySelect = styled.select`
    text-align: center;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 0 6px;
    font-size: 14px;
    color: #333;
    background: ${props => props.theme.colors.backgroundInput};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus {
        outline: none;
    }
    &::-ms-expand {
        display: none;
    }

    span{
        color: ${props => props.theme.colors.error};
    }

`;   
