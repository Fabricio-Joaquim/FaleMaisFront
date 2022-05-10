import styled from 'styled-components';

export const FormStyled = styled.form`
    display  :flex ;
    flex-direction : column;
    align-items : center;
    padding : 0 20px;
`;

export const ContainerButton = styled.div`
    display:flex;
    margin: 20px 0;
    width: 100%;
    justify-content: space-evenly;
`;

export const SubContainerInputs = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    justify-content: space-evenly;

    @media (max-width: 375px) {
        display: grid;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

export const MessageDBError = styled.h2`
    color: ${props => props.theme.colors.error};
    font-size: ${props => props.theme.fontSizes.medium};
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
`;