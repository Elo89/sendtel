import {useNavigation} from '@react-navigation/native';
import {useCallback, useContext, useState} from 'react';
import {GitRepoCheckContext} from '../context/contexts';
import {ScreenRoute} from '../Routing/Screens';

const useAddField = ({setField}: {setField: (value: string) => void}) => {
  const {resetResponse} = useContext(GitRepoCheckContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigation();

  const handleChange = useCallback(
    (value: string) => {
      setInputValue(value);
    },
    [setInputValue],
  );

  const handleDone = useCallback(() => {
    setField(inputValue);
    navigate.navigate(ScreenRoute.HOME);
    resetResponse();
  }, [inputValue, navigate, setField, resetResponse]);

  return {
    handleChange,
    handleDone,
    inputValue,
  };
};

export default useAddField;
