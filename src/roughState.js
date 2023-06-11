import { useState } from 'react';

export const useAppState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  return {
    count,
    setCount,
    name,
    setName,
    isDisabled,
    setIsDisabled,
  };
};
