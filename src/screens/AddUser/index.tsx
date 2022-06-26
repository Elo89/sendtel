import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useState} from 'react';
import {StatusBar} from 'react-native';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import TextInput from '../../components/TextInput/TextInput';
import {GitRepoCheckContext} from '../../context/contexts';

import useDeviceTheme from '../../hooks/useDeviceTheme';
import {ScreenRoute} from '../../Routing/Screens';
import {CustomView, SafeAreaView} from '../../Theme/styled';

const AddUser = () => {
  const {barStyle} = useDeviceTheme();
  const {setUser, resetResponse} = useContext(GitRepoCheckContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigation();

  const handleChange = useCallback(
    (value: string) => {
      setInputValue(value);
    },
    [setInputValue],
  );

  const handleDone = useCallback(() => {
    setUser(inputValue);
    navigate.navigate(ScreenRoute.HOME);
    resetResponse();
  }, [inputValue, navigate, setUser, resetResponse]);

  return (
    <SafeAreaView edges={['top', 'bottom']} flex={1}>
      <StatusBar barStyle={barStyle} />
      <Header title="USER" />
      <CustomView px={3} pt={3} flex={1} justifyContent={'space-between'}>
        <TextInput
          value={inputValue}
          placeholder={'Type your github username'}
          onChange={handleChange}
        />
        <CustomView px={3} flexDirection="row" justifyContent={'flex-end'}>
          <Button onPress={handleDone}>Done</Button>
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default AddUser;
