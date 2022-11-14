import { Dispatch, SetStateAction, useState } from 'react';

const useAlert = (
  options?: AlertOptions
): {
  alert: AlertOptions;
  setAlert: Dispatch<SetStateAction<AlertOptions>>;
  toggleAlert: () => void;
} => {
  const defaultOptions: AlertOptions = {
    active: false,
    message: '',
    type: 'none',
    autoClose: true,
  };
  const [alert, setAlert] = useState<AlertOptions>({ ...defaultOptions, ...options });

  const toggleAlert = (): void => {
    setAlert({ ...alert, active: !alert.active });
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
