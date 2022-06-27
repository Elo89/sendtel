import {useTheme} from '@emotion/react';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {StatusBar} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import Button from '../../components/Button/Button';
import InputButton from '../../components/InputButton/InputButton';

import useDeviceTheme from '../../hooks/useDeviceTheme';
import {ScreenRoute} from '../../Routing/Screens';
import {CustomView, SafeAreaView} from '../../Theme/styled';
import {Header1, Header2} from '../../Theme/typography';
import useHomeScreen from './useHomeScreen';

const HomeScreen = () => {
  const theme = useTheme();
  const {barStyle} = useDeviceTheme();
  const navigation = useNavigation();
  const netInfo = useNetInfo();
  const {backgroundColor, deviceTheme} = useDeviceTheme();
  const {
    user,
    repo,
    response,
    isLoading,
    telegramResponse,
    telegramIsLoading,
    handleCheck,
    handleSend,
    userValue,
    repoValue,
    error,
    success,
  } = useHomeScreen();

  const pressUserButton = useCallback(() => {
    navigation.navigate(ScreenRoute.ADD_USER);
  }, [navigation]);

  const pressRepoButton = useCallback(() => {
    navigation.navigate(ScreenRoute.ADD_REPO);
  }, [navigation]);

  useEffect(() => {
    if (telegramResponse === 'success') {
      navigation.navigate(ScreenRoute.TELEGRAM_FEEDBACK);
    }
  }, [navigation, telegramResponse]);

  const calculateBackgroundColor = useMemo(() => {
    if (!netInfo.isConnected && deviceTheme) {
      return theme.colors?.[deviceTheme]?.error;
    }
    if (response && deviceTheme) {
      return theme.colors?.[deviceTheme]?.[response];
    }
    return backgroundColor;
  }, [
    backgroundColor,
    deviceTheme,
    netInfo.isConnected,
    response,
    theme.colors,
  ]);

  return (
    <SafeAreaView backgroundColor={calculateBackgroundColor} flex={1}>
      <StatusBar barStyle={barStyle} />
      <CustomView px={3} pt={3} flex={1} justifyContent="space-between">
        <CustomView>
          <Header2 mb={4}>Set the repository address</Header2>
          <Header1 fontWeight={'normal'}>github.com</Header1>
          <CustomView flexDirection={'row'}>
            <Header1 fontWeight={'normal'}>/</Header1>
            <InputButton
              onPress={pressUserButton}
              value={userValue}
              error={error}
              placeholder={'user'}
            />
          </CustomView>
          <CustomView flexDirection={'row'}>
            <Header1 fontWeight={'normal'}>/</Header1>
            <InputButton
              onPress={pressRepoButton}
              value={repoValue}
              error={error}
              placeholder={'repo'}
            />
          </CustomView>
          {error && (
            <Header2 fontWeight="normal" mt={3}>
              Check your <Header2 fontWeight="bold">username</Header2> or your
              repository <Header2 fontWeight="bold">name</Header2>
            </Header2>
          )}
          {!netInfo.isConnected && (
            <Header2 fontWeight="normal" mt={3}>
              Check your{' '}
              <Header2 fontWeight="bold">internet connection</Header2>
            </Header2>
          )}
        </CustomView>
        <CustomView px={3} flexDirection="row" justifyContent={'flex-end'}>
          {success ? (
            <Button onPress={handleSend} isLoading={telegramIsLoading}>
              Send
            </Button>
          ) : (
            <Button
              onPress={user && repo ? handleCheck : () => null}
              isLoading={isLoading}>
              Check
            </Button>
          )}
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default HomeScreen;
