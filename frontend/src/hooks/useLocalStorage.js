import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [values, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(values));
  }, [values, key]);

  return { values, setValue };
};

export default useLocalStorage;
