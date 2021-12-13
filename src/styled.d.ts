import 'styled-components';


  
declare module 'styled-components' {
    export interface DefaultTheme {
      colors: {
        primary: string
        secondary: string
        tertiary: string;
        label: string;
        border: string;
        white: string;
        black: string;
        transparent: string;
        warning: string;
       
     }
    }
  }