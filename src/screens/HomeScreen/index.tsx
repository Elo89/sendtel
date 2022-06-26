import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import InputButton from '../../components/InputButton/InputButton';
import {GitRepoCheckContext} from '../../context/contexts';
import useDeviceTheme from '../../hooks/useDeviceTheme';
import {ScreenRoute} from '../../Routing/Screens';

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
      <View>
        <InputButton
          onPress={pressUserButton}
          value={user}
          placeholder={'user'}
        />
        <InputButton
          onPress={pressRepoButton}
          value={repo}
          placeholder={'repo'}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
