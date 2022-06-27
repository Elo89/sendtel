import {useCallback, useContext, useMemo} from 'react';
import {
  GitRepoCheckContext,
  TelegramSenderContext,
} from '../../context/contexts';

const useHomeScreen = () => {
  const {user, repo, response, getGitRepoCheck, isLoading} =
    useContext(GitRepoCheckContext);

  const {
    sendExercise,
    response: telegramResponse,
    isLoading: telegramIsLoading,
  } = useContext(TelegramSenderContext);

  const handleCheck = useCallback(async () => {
    await getGitRepoCheck();
  }, [getGitRepoCheck]);

  const handleSend = useCallback(async () => {
    if (user && repo) {
      sendExercise(`https://github.com/${user}/${repo}`);
    }
  }, [sendExercise, user, repo]);

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

  return {
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
  };
};

export default useHomeScreen;
