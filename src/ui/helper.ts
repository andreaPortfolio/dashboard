import { CSSProperties } from "styled-components";

export interface DefaultStyledProps {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  paddingRight?: CSSProperties["paddingRight"];
  paddingLeft?: CSSProperties["paddingLeft"];
  paddingTop?: CSSProperties["paddingTop"];
  paddingBottom?: CSSProperties["paddingBottom"];
  margin?: CSSProperties["margin"];
  marginRight?: CSSProperties["marginRight"];
  marginLeft?: CSSProperties["marginLeft"];
  marginTop?: CSSProperties["marginTop"];
  marginBottom?: CSSProperties["marginBottom"];
  position?: CSSProperties["position"];
  boxShadow?: CSSProperties["boxShadow"];
  borderRadius?: CSSProperties["borderRadius"];
  textOverflow?: CSSProperties["textOverflow"];
  overflow?: CSSProperties["overflow"];
  whiteSpace?: CSSProperties["whiteSpace"];
}

export const defaultStyledProps = ({
  flexDirection,
  justifyContent,
  width,
  alignItems,
  height,
  padding,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  margin,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  position,
  boxShadow,
  borderRadius,
  overflow,
  textOverflow,
  whiteSpace
}: DefaultStyledProps) => {
  return `
    flex-direction: ${flexDirection ? flexDirection : ""};
    justify-content: ${justifyContent ? justifyContent : ""};
    align-items: ${alignItems ? alignItems : ""};
    width: ${width ? width : ""};
    height: ${height ? height : ""};
    padding: ${padding ? padding : ""};
    padding-right: ${paddingRight ? paddingRight : ""};
    padding-left: ${paddingLeft ? paddingLeft : ""};
    padding-top: ${paddingTop ? paddingTop : ""};
    padding-bottom: ${paddingBottom ? paddingBottom : ""};
    margin: ${margin ? margin : ""};
    margin-right: ${marginRight ? marginRight : ""};
    margin-left: ${marginLeft ? marginLeft : ""};
    margin-top: ${marginTop ? marginTop : ""};
    margin-bottom: ${marginBottom ? marginBottom : ""};
    position: ${position ? position : ""};
    box-shadow: ${boxShadow ? boxShadow : ""};
    border-radius: ${borderRadius ? borderRadius : ""};
    overflow: ${overflow ? overflow : ""};
    text-overflow: ${(textOverflow ? textOverflow : "")};
    white-space: ${whiteSpace ? whiteSpace : ""};
    overflow: ${overflow ? overflow : ""};
  `;
};
