import styled from 'styled-components';

export const Warpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 100px;
    max-width: 200px;

`;

export const ErrorMessage = styled.span`
    color: ${props => props.theme.colors.error};
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
    text-align: center;
    width: 100%;
    `;
