import React from 'react';
import {GitRepoCheckType} from '../hooks/useGitRepoCheck';
import {TelegramSenderType} from '../hooks/useTelegramSender';

export const GitRepoCheckContext = React.createContext<GitRepoCheckType>({
  response: undefined,
  getGitRepoCheck: () => null,
  isLoading: false,
  repo: '',
  user: '',
  setRepo: () => null,
  setUser: () => null,
  resetResponse: () => null,
});

export const TelegramSenderContext = React.createContext<TelegramSenderType>({
  response: undefined,
  sendExercise: () => null,
  isLoading: false,
  resetResponse: () => null,
});
