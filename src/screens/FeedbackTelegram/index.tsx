import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {StatusBar} from 'react-native';
import Button from '../../components/Button/Button';
import {
  GitRepoCheckContext,
  TelegramSenderContext,
} from '../../context/contexts';

import useDeviceTheme from '../../hooks/useDeviceTheme';
import {ScreenRoute} from '../../Routing/Screens';
import {CustomView, SafeAreaView} from '../../Theme/styled';
import {Header1} from '../../Theme/typography';

const FeedbackTelegram = () => {
  const {barStyle} = useDeviceTheme();
  const {resetResponse, setRepo, setUser} = useContext(GitRepoCheckContext);
  const {resetResponse: resetTelegramSender} = useContext(
    TelegramSenderContext,
  );

  const navigate = useNavigation();

  const handleCool = useCallback(() => {
    resetResponse();
    resetTelegramSender();
    setRepo('');
    setUser('');
    navigate.navigate(ScreenRoute.HOME);
  }, [resetResponse, resetTelegramSender, setRepo, setUser, navigate]);

  return (
    <SafeAreaView flex={1}>
      <StatusBar barStyle={barStyle} />
      <CustomView px={3} pt={5} flex={1} justifyContent={'space-between'}>
        <Header1 textAlign="center">All done! Repository sent.</Header1>
        <CustomView px={3} flexDirection="row" justifyContent={'flex-end'}>
          <Button onPress={handleCool}>Cool</Button>
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default FeedbackTelegram;
