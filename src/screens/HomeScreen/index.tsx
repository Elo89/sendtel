import {useTheme} from '@emotion/react';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import {StatusBar} from 'react-native';
import Button from '../../components/Button/Button';
import InputButton from '../../components/InputButton/InputButton';
import {
  GitRepoCheckContext,
  TelegramSenderContext,
} from '../../context/contexts';
import useDeviceTheme from '../../hooks/useDeviceTheme';
import {ScreenRoute} from '../../Routing/Screens';
import {CustomView, SafeAreaView} from '../../Theme/styled';
import {Header1, Header2} from '../../Theme/typography';

const HomeScreen = () => {
  const {barStyle} = useDeviceTheme();
  const navigation = useNavigation();
  const {backgroundColor, deviceTheme} = useDeviceTheme();
  const theme = useTheme();

  const {user, repo, response, getGitRepoCheck, isLoading} =
    useContext(GitRepoCheckContext);

  const {
    sendExercise,
    response: telegramResponse,
    isLoading: telegramIsLoading,
  } = useContext(TelegramSenderContext);

  const pressUserButton = useCallback(() => {
    navigation.navigate(ScreenRoute.ADD_USER);
  }, [navigation]);

  const pressRepoButton = useCallback(() => {
    navigation.navigate(ScreenRoute.ADD_REPO);
  }, [navigation]);

  const handleCheck = useCallback(async () => {
    await getGitRepoCheck();
  }, [getGitRepoCheck]);

  const handleSend = useCallback(async () => {
    if (user && repo) {
      sendExercise(`https://github.com/${user}/${repo}`);
    }
  }, [sendExercise, user, repo]);

  useEffect(() => {
    if (telegramResponse === 'success') {
      navigation.navigate(ScreenRoute.TELEGRAM_FEEDBACK);
    }
  }, [navigation, telegramResponse]);

  const userValue = useMemo(() => {
    if (response === 'error') {
      return 'badUser';
    }
    return user;
  }, [user, response]);

  const repoValue = useMemo(() => {
    if (response === 'error') {
      return 'orBadRepo';
    }
    return repo;
  }, [repo, response]);

  const error = useMemo(() => {
    if (response === 'error') {
      return true;
    }
    return false;
  }, [response]);

  const success = useMemo(() => {
    if (response === 'success') {
      return true;
    }
    return false;
  }, [response]);

  return (
    <SafeAreaView
      backgroundColor={
        response && deviceTheme
          ? theme.colors?.[deviceTheme]?.[response]
          : backgroundColor
      }
      flex={1}>
      <StatusBar barStyle={barStyle} />
      <CustomView p={3} flex={1} justifyContent="space-between">
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
        </CustomView>
        <CustomView px={3} flexDirection="row" justifyContent={'flex-end'}>
          {success ? (
            <Button onPress={handleSend} isLoading={telegramIsLoading}>
              Send
            </Button>
          ) : (
            <Button onPress={user && repo && handleCheck} isLoading={isLoading}>
              Check
            </Button>
          )}
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default HomeScreen;
