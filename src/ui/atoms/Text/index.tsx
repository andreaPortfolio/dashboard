import styled, { CSSProperties } from "styled-components";
import { defaultStyledProps, DefaultStyledProps } from "../../helper";
import { Theme } from '../../theme';

interface Props extends DefaultStyledProps {
  fontFamily?: CSSProperties["fontFamily"];
  fontSize?: CSSProperties["fontSize"];
  fontStyle?: CSSProperties["fontStyle"];
  fontWeight?: CSSProperties["fontWeight"];
  lineHeight?: CSSProperties["lineHeight"];
  letterSpacing?: CSSProperties["letterSpacing"];
  textAlign?: CSSProperties["textAlign"];
  color?: keyof Theme['colors'];
}

const Text = styled.div<Props>`
  font-family: ${({ fontFamily = "Mulish" }) => (fontFamily ? fontFamily : "")};
  font-size: ${({ fontSize = "16px" }) => (fontSize ? fontSize : "")};
  font-style: ${({ fontStyle = "normal" }) => (fontStyle ? fontStyle : "")};
  font-weight: ${({ fontWeight = 400 }) => (fontWeight ? fontWeight : "")};
  line-height: ${({ lineHeight = "normal" }) => (lineHeight ? lineHeight : "")};
  letter-spacing: ${({ letterSpacing = "normal" }) =>
    letterSpacing ? letterSpacing : ""};
  text-align: ${({ textAlign = "center" }) => (textAlign ? textAlign : "")};
  color: ${({ theme, color }) => (theme && color? theme.colors[color] : "")};
  ${defaultStyledProps}
`;


export default Text;
