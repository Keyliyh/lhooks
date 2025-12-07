import { useState } from 'react';

export function useDouble(initial: number) {
  const [state] = useState(initial * 2);
  return state;
}
