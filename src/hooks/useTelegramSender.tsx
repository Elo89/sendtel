import {useCallback, useState} from 'react';

type TelegramSenderTypeDto = 'error' | 'success' | undefined;

export interface TelegramSenderType {
  response: TelegramSenderTypeDto;
  sendExercise: (repoUrl: string) => void;
  isLoading: boolean;
  resetResponse: () => void;
}
export interface Props {
  repoUrl: string;
}

const useTelegramSender = (): TelegramSenderType => {
  const [response, setResponse] = useState<TelegramSenderTypeDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendExercise = useCallback(async (repoUrl: string) => {
    setIsLoading(true);
    const data = await fetch(
      // 'https://pushmore.io/webhook/d3Gm4aEPCuhAUjfbECLLdW41',
      'https://pushmore.io/webhook/jsTQ2gMfgBwApzTkxQ24nAmL',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          repoUrl,
          sender: 'Elia Morini',
        }),
      },
    );

    if (data?.status === 200) {
      setResponse('success');
    } else {
      setResponse('error');
    }
    setIsLoading(false);
  }, []);

  const resetResponse = useCallback(async () => {
    setResponse(undefined);
  }, []);

  return {
    response,
    sendExercise,
    isLoading,
    resetResponse,
  };
};

export default useTelegramSender;
