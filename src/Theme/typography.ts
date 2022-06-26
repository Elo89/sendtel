import styled from '@emotion/native';
import {FC} from 'react';
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

interface TypographyComponent
  extends SpaceProps,
    FontFamilyProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    TextAlignProps {
  children?: React.ReactNode;
}

export const CustomText: FC<TypographyComponent> = styled.Text`
  color: ${({theme}) => theme.colors.light.primary};
  font-family: OpenSans;
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${textAlign}
`;

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
