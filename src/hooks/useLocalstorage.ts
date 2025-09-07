"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const getInitialValue = (): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getInitialValue);

  useEffect(() => {
    if (typeof window !== "undefined" && storedValue !== undefined) {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
