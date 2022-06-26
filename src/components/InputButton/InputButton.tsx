import React, {FC} from 'react';
import styled from '@emotion/native';
import {Header1} from '../../Theme/typography';

const Button = styled.TouchableOpacity``;

const Text = styled(Header1)<{disable: boolean}>`
  color: ${({disable}) => disable && 'gray'};
`;

interface Props {
  onPress: () => void;
  placeholder: string;
  value: string;
}

const InputButton: FC<Props> = ({onPress, placeholder, value}) => {
  return (
    <Button onPress={onPress}>
      <Text disable={!value} fontWeight="normal">
        {value || placeholder}
      </Text>
    </Button>
  );
};

export default InputButton;
