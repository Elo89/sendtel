import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import InputButton from '../../components/InputButton/InputButton';
import {GitRepoCheckContext} from '../../context/contexts';
import useDeviceTheme from '../../hooks/useDeviceTheme';
import {ScreenRoute} from '../../Routing/Screens';
import {CustomView} from '../../Theme/styled';
import {Header1, Header2} from '../../Theme/typography';

const HomeScreen = () => {
  const {barStyle} = useDeviceTheme();
  const navigation = useNavigation();

  const {user, repo} = useContext(GitRepoCheckContext);

  const pressUserButton = useCallback(() => {
    navigation.navigate(ScreenRoute.ADD_USER);
  }, [navigation]);

  const pressRepoButton = useCallback(() => {
    navigation.navigate(ScreenRoute.ADD_REPO);
  }, [navigation]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={barStyle} />
      <CustomView p={3}>
        <Header2 mb={4}>Set the repository address</Header2>
        <Header1 fontWeight={'normal'}>github.com</Header1>
        <CustomView flexDirection={'row'}>
          <Header1 fontWeight={'normal'}>/</Header1>
          <InputButton
            onPress={pressUserButton}
            value={user}
            placeholder={'user'}
          />
        </CustomView>
        <CustomView flexDirection={'row'}>
          <Header1 fontWeight={'normal'}>/</Header1>
          <InputButton
            onPress={pressRepoButton}
            value={repo}
            placeholder={'repo'}
          />
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default HomeScreen;
