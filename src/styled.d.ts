import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            backgoround: string,
            secundary: string,
            backgroundInput: string,
            error: string           
        },
        fonts: {
            Roboto: string,
            Sans: string,
            Arial: string
        }
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }


    }
}