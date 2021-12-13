import styled from "styled-components";
import {DefaultStyledProps, defaultStyledProps} from '../../helper';


interface Props extends DefaultStyledProps{

}

const Button = styled.button<Props>`
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: ${({theme}) => theme.colors.primary};
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    border-radius: 8px;
    color: ${({theme}) => theme.colors.white};
    height: 48px;
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    text-align: center;
    ${defaultStyledProps}
`;




export default Button;
