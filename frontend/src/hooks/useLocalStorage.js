import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [values, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    if (values) {
      window.localStorage.setItem(key, JSON.stringify(values));
    }
  }, [values, key]);

  const deleteValue = (value) => {
    setValue(values.filter((storedValue) => value !== storedValue));
  };

  return { values, setValue, deleteValue };
};

export default useLocalStorage;
