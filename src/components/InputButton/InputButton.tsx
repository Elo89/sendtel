import React, {FC} from 'react';
import styled from '@emotion/native';

const Button = styled.TouchableOpacity``;

const Text = styled.Text`
  color: ${props => props?.theme?.colors?.primary};
`;

interface Props {
  onPress: () => void;
  placeholder: string;
  value: string;
}

const InputButton: FC<Props> = ({onPress, placeholder, value}) => {
  return (
    <Button onPress={onPress}>
      <Text>{value || placeholder}</Text>
    </Button>
  );
};

export default InputButton;
