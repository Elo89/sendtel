import React, {FC} from 'react';
import styled from '@emotion/native';
import {space, SpaceProps, FontSizeProps, fontSize} from 'styled-system';

const Input = styled.TextInput<SpaceProps & FontSizeProps>`
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.colors.light.primary};
  ${space}
  ${fontSize}
`;

interface Props {
  onChange: (value: string) => void;
  placeholder?: string;
  value?: string;
}

const TextInput: FC<Props> = ({onChange, placeholder, value}) => {
  return (
    <Input
      p={2}
      fontSize={16}
      onChangeText={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextInput;
