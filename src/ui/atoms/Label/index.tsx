import styled, { CSSProperties } from "styled-components";

interface Props {
  width?: CSSProperties["width"];
}

const Label = styled.label<Props>`
font-family: Mulish;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 15px;
letter-spacing: 0.30000001192092896px;
text-align: left;
text-transform: uppercase;
color: ${({theme}) => theme.colors.label};
`;

export default Label;