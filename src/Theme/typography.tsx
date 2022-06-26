import styled from '@emotion/native';
import React, {FC} from 'react';
import {
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';
import useDeviceTheme from '../hooks/useDeviceTheme';

interface TypographyComponent
  extends SpaceProps,
    FontFamilyProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    TextAlignProps {
  children?: React.ReactNode;
}

export const Text: FC<TypographyComponent> = styled.Text`
  color: ${({theme, deviceTheme}) => theme.colors?.[deviceTheme]?.primary};
  font-family: OpenSans;
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${textAlign}
`;

export const CustomText: FC<TypographyComponent> = ({children, ...rest}) => {
  const {deviceTheme} = useDeviceTheme();
  return (
    <Text deviceTheme={deviceTheme} {...rest}>
      {children}
    </Text>
  );
};

export const TitlePage: FC<TypographyComponent> = styled(CustomText)`
  font-size: 22px;
  line-height: 22px;
  font-family: OpenSans-bold;
  margin-top: 8px;
`;

export const Header1: FC<TypographyComponent> = styled(CustomText)`
  font-size: 40px;
  line-height: 44px;
  font-family: OpenSans-bold;
`;

export const Header2: FC<TypographyComponent> = styled(CustomText)`
  font-size: 22px;
  line-height: 22px;
  font-family: OpenSans-bold;
`;

export const Text1: FC<TypographyComponent> = styled(CustomText)`
  font-size: 16px;
  line-height: 18px;
`;
