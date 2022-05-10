import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body{
        display:flex;
        justify-content:center;
        align-items:center;
   		height:100vh;
        background: linear-gradient(320deg,#f27121,#e94057,#8a2387);
        width: 100vw;

        label{
        font-size:${props => props.theme.fontSizes.small};
        font-weight: bold;
        color: ${props => props.theme.colors.secundary};
        font-family: ${props => props.theme.fonts.Roboto};
        }
    }
`;