import styled from '@emotion/native';
import React, {FC} from 'react';
import {ColorSchemeName} from 'react-native';
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
import useDeviceTheme from '../hooks/useDeviceTheme';

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

export const SafeAreaViewStyled: FC<
  TypographyComponent & {
    deviceTheme: ColorSchemeName;
  }
> = styled.SafeAreaView`
  background-color: ${({theme, deviceTheme}) =>
    theme.colors?.[deviceTheme]?.background};
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
export const SafeAreaView: FC<TypographyComponent> = ({...rest}) => {
  const {deviceTheme} = useDeviceTheme();
  return <SafeAreaViewStyled deviceTheme={deviceTheme} {...rest} />;
};
