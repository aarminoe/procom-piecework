import { useState } from 'react';

export const useAppState = () => {
    const [tech, setTech] = useState('')
    const [date, setDate] = useState('')
    const [timeIn, setTimeIn] = useState('')
    const [timeOut, setTimeOut] = useState('')
    const [job, setJob] = useState('')
    const [termWire, setTermWire] = useState('')
    const [blank, setBlank] = useState('')
    const [panelTo12, setPanelTo12] = useState('')
    const [panelTo25, setPanelTo25] = useState('')
    const [panelTo50, setPanelTo50] = useState('')
    const [doorContact, setDoorContact] = useState('')

  return {
    tech, setTech,
    date, setDate,
    timeIn, setTimeIn,
    timeOut, setTimeOut,
    job, setJob
  };
};
