import styled from 'styled-components';

export const Warpper = styled.section`
    display: flex;
    flex-direction: column;
    /* From https://css.glass */
    background: rgba(198, 198, 198, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.1px);
    -webkit-backdrop-filter: blur(14.1px);
    border: 1px solid rgba(198, 198, 198, 0.08);
    padding: 20px;
    width: 900px;
    height: 450px;
    @media (max-width: 768px) {
        width: 700px;
    }
        @media (max-width: 375px) {
            width: 80%;
            height: 100%;
            margin: 0 auto;
        }
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.fonts.Arial};
    font-size: ${props => props.theme.fontSizes.large};
    text-align: center;
    font-weight: bold;
    line-height: 50px;
    `;