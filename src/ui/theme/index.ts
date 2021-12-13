import {createGlobalStyle} from "styled-components";
import { normalize } from 'styled-normalize';

export const palette = {
    blue:  '#3751FF',
    gray : '#4B506D',
    grayDark: '#363740',
    transparent: 'transparent',
    black: '#252733',
    white: '#FFFFFF',
    warning: '#B33A3A',
    grayLight: '#F0F1F7',
    grayMedium: '#9FA2B4',
  
  }
  
 export const theme = {
    colors: {
      primary: palette.blue,
      secondary: palette.gray,
      tertiary: palette.grayDark,
      label: palette.grayMedium,
      border: palette.grayLight,
      white: palette.white,
      black: palette.black,
      transparent: palette.transparent,
      warning: palette.warning,
  
    }
  };


  export type Theme = typeof theme;


  export const GlobalStyle = createGlobalStyle`${normalize}`;