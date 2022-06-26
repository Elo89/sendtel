import styled from '@emotion/native';
import {FC} from 'react';
import {
  backgroundColor,
  BackgroundColorProps,
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  flex,
  flexBasis,
  FlexBasisProps,
  flexbox,
  FlexboxProps,
  flexDirection,
  FlexDirectionProps,
  flexGrow,
  FlexGrowProps,
  FlexProps,
  flexShrink,
  FlexShrinkProps,
  height,
  HeightProps,
  size,
  SizeProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system';

interface TypographyComponent
  extends SpaceProps,
    SizeProps,
    WidthProps,
    HeightProps,
    FlexProps,
    FlexDirectionProps,
    FlexBasisProps,
    FlexboxProps,
    FlexGrowProps,
    FlexShrinkProps,
    ColorProps,
    ColorStyleProps,
    BackgroundColorProps {
  children?: React.ReactNode;
}

export const CustomView: FC<TypographyComponent> = styled.View`
  ${space}
  ${size}
  ${width}
  ${height}
  ${flex}
  ${flexBasis}
  ${flexbox}
  ${flexDirection}
  ${flexGrow}
  ${flexShrink}
  ${color}
  ${colorStyle}
  ${backgroundColor}
`;

export const SafeAreaView: FC<TypographyComponent> = styled.SafeAreaView`
  ${space}
  ${size}
  ${width}
  ${height}
  ${flex}
  ${flexBasis}
  ${flexbox}
  ${flexDirection}
  ${flexGrow}
  ${flexShrink}
  ${color}
  ${colorStyle}
  ${backgroundColor}
`;
