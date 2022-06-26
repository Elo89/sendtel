import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import TextInput from '../../components/TextInput/TextInput';
import {GitRepoCheckContext} from '../../context/contexts';

import useDeviceTheme from '../../hooks/useDeviceTheme';
import {CustomView, SafeAreaView} from '../../Theme/styled';
import useAddField from '../../hooks/useAddField';

const AddUser = () => {
  const {barStyle} = useDeviceTheme();
  const {setUser} = useContext(GitRepoCheckContext);
  const {handleChange, handleDone, inputValue} = useAddField({
    setField: setUser,
  });

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
