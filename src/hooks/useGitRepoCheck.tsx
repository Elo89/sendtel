import {useCallback, useState} from 'react';

type GitRepoTypeDto = 'error' | 'success' | undefined;

export interface GitRepoCheckType {
  response: GitRepoTypeDto;
  getGitRepoCheck: () => void;
  isLoading: boolean;
  repo: string;
  user: string;
  setRepo: (repo: string) => void;
  setUser: (user: string) => void;
  resetResponse: () => void;
}

const useGitRepoCheck = (): GitRepoCheckType => {
  const [repo, setRepo] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [response, setResponse] = useState<GitRepoTypeDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getGitRepoCheck = useCallback(async () => {
    setIsLoading(true);
    const data = await fetch(`https://github.com/${user}/${repo}`);
    if (data.status === 200) {
      setResponse('success');
    } else {
      setResponse('error');
    }
    setIsLoading(false);
  }, [repo, user]);
  const resetResponse = useCallback(async () => {
    setResponse(undefined);
  }, []);

  return {
    response,
    getGitRepoCheck,
    isLoading,
    repo,
    user,
    setRepo,
    setUser,
    resetResponse,
  };
};

export default useGitRepoCheck;
