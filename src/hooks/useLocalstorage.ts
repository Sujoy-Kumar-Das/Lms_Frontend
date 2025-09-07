"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const getInitialValue = (): T => {
    try {
      const getCurrentValue = localStorage.getItem(key);
      return getCurrentValue ? JSON.parse(getCurrentValue) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const [storedValue, setStoreValue] = useState<T>(getInitialValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoreValue] as const;
}
