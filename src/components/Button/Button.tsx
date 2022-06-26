import React, {FC} from 'react';
import styled from '@emotion/native';
import {Header2} from '../../Theme/typography';
import {ActivityIndicator} from 'react-native';
import {useTheme} from '@emotion/react';

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  width: 80px;
`;

interface Props {
  onPress: () => void;
  isLoading?: boolean;
  children: string;
}

const Button: FC<Props> = ({onPress, isLoading, children}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={!isLoading ? onPress : () => null}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.light.primary} />
      ) : (
        <Header2 fontWeight="normal">{children}</Header2>
      )}
    </TouchableOpacity>
  );
};

export default Button;
