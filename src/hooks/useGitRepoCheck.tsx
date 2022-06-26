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
}

const useGitRepoCheck = (): GitRepoCheckType => {
  const [repo, setRepo] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [response, setResponse] = useState<GitRepoTypeDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getGitRepoCheck = useCallback(async () => {
    setIsLoading(true);
    const response = fetch('https://github.com/Elo89/react-date-range').then(
      res => {
        return res.json();
      },
    );
    try {
      console.log(response);

      setResponse(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    response,
    getGitRepoCheck,
    isLoading,
    repo,
    user,
    setRepo,
    setUser,
  };
};

export default useGitRepoCheck;
