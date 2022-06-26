import React, {FC} from 'react';
import styled from '@emotion/native';
import {Header2} from '../../Theme/typography';

const TouchableOpacity = styled.TouchableOpacity``;

interface Props {
  onPress: () => void;
  children: string;
}

const Button: FC<Props> = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Header2 fontWeight="normal">{children}</Header2>
    </TouchableOpacity>
  );
};

export default Button;
