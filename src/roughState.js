import { useState } from 'react';

export const useAppState = () => {
    const [tech, setTech] = useState('')
    const [date, setDate] = useState('')
    const [timeIn, setTimeIn] = useState('')
    const [timeOut, setTimeOut] = useState('')
    const [job, setJob] = useState('')

  return {
    tech, setTech,
    date, setDate,
    timeIn, setTimeIn,
    timeOut, setTimeOut,
    job, setJob
  };
};
