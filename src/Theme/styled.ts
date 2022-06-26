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
  space,
  SpaceProps,
} from 'styled-system';

interface TypographyComponent
  extends SpaceProps,
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
