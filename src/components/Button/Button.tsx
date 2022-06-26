import React, {FC} from 'react';
import styled from '@emotion/native';
import {Header2} from '../../Theme/typography';
import {ActivityIndicator} from 'react-native';
import {useTheme} from '@emotion/react';
import useDeviceTheme from '../../hooks/useDeviceTheme';

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
  const {deviceTheme} = useDeviceTheme();
  return (
    <TouchableOpacity onPress={!isLoading ? onPress : () => null}>
      {isLoading ? (
        <ActivityIndicator
          color={deviceTheme ? theme.colors?.[deviceTheme]?.primary : ''}
        />
      ) : (
        <Header2 fontWeight="normal">{children}</Header2>
      )}
    </TouchableOpacity>
  );
};

export default Button;
