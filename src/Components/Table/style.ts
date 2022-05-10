import styled from 'styled-components';

export const MyTable = styled.table`
     margin-top: 15px;
    width: 50%;
    text-align: center;
    overflow:hidden;
    border-collapse:separate;
    border: solid #ccc 1px;
    -webkit-border-radius: 10px;
       -moz-border-radius: 10px;
            border-radius: 10px;
    align-self: center;

 td {
    color: ${props => props.theme.colors.backgoround};
    padding: 8px;
    border: 2px solid #ddd;
}

 th{
    color: #000;
    background-color: #fff;
    font-weight: normal;
    text-align: center;
    padding: 8px;
    font-size: ${props => props.theme.fontSizes.small};
}

@media (max-width: 375px) {
        width: 375px;
        height: 100%;
        //margin: 0 auto;
        flex-wrap: wrap;
        //font-size: .5rem;
        
        td, th {
            padding: 1.5px;
        }
    }
`;