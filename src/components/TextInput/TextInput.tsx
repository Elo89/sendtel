import React, {FC} from 'react';
import styled from '@emotion/native';
import {space, SpaceProps, FontSizeProps, fontSize} from 'styled-system';
import useDeviceTheme from '../../hooks/useDeviceTheme';
import {ColorSchemeName} from 'react-native';

const Input = styled.TextInput<
  SpaceProps & FontSizeProps & {deviceTheme: ColorSchemeName}
>`
  border-bottom-width: 2px;
  border-bottom-color: ${({theme, deviceTheme}) =>
    deviceTheme && theme.colors?.[deviceTheme]?.primary};
  color: ${({theme, deviceTheme}) =>
    deviceTheme && theme.colors?.[deviceTheme]?.primary};
  ${space}
  ${fontSize}
`;

interface Props {
  onChange: (value: string) => void;
  placeholder?: string;
  value?: string;
}

const TextInput: FC<Props> = ({onChange, placeholder, value}) => {
  const {deviceTheme} = useDeviceTheme();
  return (
    <Input
      p={2}
      fontSize={16}
      onChangeText={onChange}
      placeholder={placeholder}
      value={value}
      deviceTheme={deviceTheme}
    />
  );
};

export default TextInput;
