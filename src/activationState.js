import { useState } from 'react';

export const useActivationState = () => {
  const [tech, setTech] = useState('')
  const [date, setDate] = useState('')
  const [timeIn, setTimeIn] = useState('')
  const [timeOut, setTimeOut] = useState('')
  const [job, setJob] = useState('')
  const [n100502, setN100502] = useState('');
  const [n102501, setN102501] = useState('');
  const [n102520, setN102520] = useState('');
  const [n102523, setN102523] = useState('');
  const [n102526, setN102526] = useState('');
  const [n102528, setN102528] = useState('');
  const [n102532, setN102532] = useState('');
  const [n102534, setN102534] = useState('');
  const [n102542, setN102542] = useState('');
  const [n102543, setN102543] = useState('');
  const [n102590, setN102590] = useState('');
  const [n102592, setN102592] = useState('');
  const [n102593, setN102593] = useState('');
  const [n102595, setN102595] = useState('');
  const [n103101, setN103101] = useState('');
  const [n104461, setN104461] = useState('');
  const [n104462, setN104462] = useState('');
  const [n104463, setN104463] = useState('');
  const [n104464, setN104464] = useState('');
  const [n104465, setN104465] = useState('');
  const [n107101, setN107101] = useState('');
  const [n108806, setN108806] = useState('');
  const [n108806Two, setN108806Two] = useState('');
  const [n108807, setN108807] = useState('');
  const [n108807Two, setN108807Two] = useState('');
  const [n108201, setN108201] = useState('');
  const [n109905, setN109905] = useState('');
  const [n109917, setN109917] = useState('');
  const [n109918, setN109918] = useState('');
  const [n110011, setN110011] = useState('');
  const [n110021, setN110021] = useState('');
  const [n111115, setN111115] = useState('');
  const [n111123, setN111123] = useState('');
  const [n111101, setN111101] = useState('');
  const [n111102, setN111102] = useState('');
  const [n111105, setN111105] = useState('');
  const [n111106, setN111106] = useState('');
  const [tvWallmount, setTvWallmount] = useState('');
  const [soundbarWallmount, setSoundbarWallmount] = useState('');
  const [totalN100502, setTotalN100502] = useState(100);
  const [totalN102501, setTotalN102501] = useState(75);
  const [totalN102520, setTotalN102520] = useState(25);
  const [totalN102523, setTotalN102523] = useState(10);
  const [totalN102526, setTotalN102526] = useState(15);
  const [totalN102528, setTotalN102528] = useState(15);
  const [totalN102532, setTotalN102532] = useState(15);
  const [totalN102534, setTotalN102534] = useState(15);
  const [totalN102542, setTotalN102542] = useState(10);
  const [totalN102543, setTotalN102543] = useState(15);
  const [totalN102590, setTotalN102590] = useState(0);
  const [totalN102592, setTotalN102592] = useState(20);
  const [totalN102593, setTotalN102593] = useState(50);
  const [totalN102595, setTotalN102595] = useState(50);
  const [totalN103101, setTotalN103101] = useState(30);
  const [totalN104461, setTotalN104461] = useState(30);
  const [totalN104462, setTotalN104462] = useState(30);
  const [totalN104463, setTotalN104463] = useState(30);
  const [totalN104464, setTotalN104464] = useState(80);
  const [totalN104465, setTotalN104465] = useState(80);
  const [totalN107101, setTotalN107101] = useState(50);
  const [totalN108806, setTotalN108806] = useState(100);
  const [totalN108806Two, setTotalN108806Two] = useState(100);
  const [totalN108807, setTotalN108807] = useState(100);
  const [totalN108807Two, setTotalN108807Two] = useState(100);
  const [totalN108201, setTotalN108201] = useState(75);
  const [totalN109905, setTotalN109905] = useState(30);
  const [totalN109917, setTotalN109917] = useState(30);
  const [totalN109918, setTotalN109918] = useState(30);
  const [totalN110011, setTotalN110011] = useState(30);
  const [totalN110021, setTotalN110021] = useState(30);
  const [totalN111115, setTotalN111115] = useState(30);
  const [totalN111123, setTotalN111123] = useState(80);
  const [totalN111101, setTotalN111101] = useState(30);
  const [totalN111102, setTotalN111102] = useState(30);
  const [totalN111105, setTotalN111105] = useState(80);
  const [totalN111106, setTotalN111106] = useState(80);
  const [totalTvWallmount, setTotalTvWallmount] = useState(55);
  const [totalSoundbarWallmount, setTotalSoundbarWallmount] = useState(25);


  return {
    tech, setTech,
    date, setDate,
    timeIn, setTimeIn,
    timeOut, setTimeOut,
    job, setJob,
    n100502, setN100502,
    n102501,setN102501,
    n102520, setN102520,
    n102523, setN102523,
    n102526, setN102526,
    n102528, setN102528,
    n102532, setN102532,
    n102534, setN102534,
    n102542, setN102542,
    n102543, setN102543,
    n102590, setN102590,
    n102592, setN102592,
    n102593, setN102593,
    n102595, setN102595,
    n103101, setN103101,
    n104461, setN104461,
    n104462, setN104462,
    n104463, setN104463,
    n104464, setN104464,
    n104465, setN104465,
    n107101, setN107101,
    n108806, setN108806,
    n108806Two, setN108806Two,
    n108807, setN108807,
    n108807Two, setN108807Two,
    n108201, setN108201,
    n109905, setN109905,
    n109917, setN109917,
    n109918, setN109918,
    n110011, setN110011,
    n110021, setN110021,
    n111115, setN111115,
    n111123, setN111123,
    n111101, setN111101,
    n111102, setN111102,
    n111105, setN111105,
    n111106, setN111106,
    tvWallmount, setTvWallmount,
    soundbarWallmount, setSoundbarWallmount,
    totalN100502,
    setTotalN100502,
    totalN102501,
    setTotalN102501,
    totalN102520,
    setTotalN102520,
    totalN102523,
    setTotalN102523,
    totalN102526,
    setTotalN102526,
    totalN102528,
    setTotalN102528,
    totalN102532,
    setTotalN102532,
    totalN102534,
    setTotalN102534,
    totalN102542,
    setTotalN102542,
    totalN102543,
    setTotalN102543,
    totalN102590,
    setTotalN102590,
    totalN102592,
    setTotalN102592,
    totalN102593,
    setTotalN102593,
    totalN102595,
    setTotalN102595,
    totalN103101,
    setTotalN103101,
    totalN104461,
    setTotalN104461,
    totalN104462,
    setTotalN104462,
    totalN104463,
    setTotalN104463,
    totalN104464,
    setTotalN104464,
    totalN104465,
    setTotalN104465,
    totalN107101,
    setTotalN107101,
    totalN108806,
    setTotalN108806,
    totalN108806Two,
    setTotalN108806Two,
    totalN108807,
    setTotalN108807,
    totalN108807Two,
    setTotalN108807Two,
    totalN108201,
    setTotalN108201,
    totalN109905,
    setTotalN109905,
    totalN109917,
    setTotalN109917,
    totalN109918,
    setTotalN109918,
    totalN110011,
    setTotalN110011,
    totalN110021,
    setTotalN110021,
    totalN111115,
    setTotalN111115,
    totalN111123,
    setTotalN111123,
    totalN111101,
    setTotalN111101,
    totalN111102,
    setTotalN111102,
    totalN111105,
    setTotalN111105,
    totalN111106,
    setTotalN111106,
    totalTvWallmount,
    setTotalTvWallmount,
    totalSoundbarWallmount,
    setTotalSoundbarWallmount
  };
};
