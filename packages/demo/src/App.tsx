import React from 'react';
import { useDouble, isNumber } from '@leeyh-labs/lhooks'; // 从本地库实时获取

export default function App() {
  const state = useDouble(90);
  return (
    <div>
      <h1>React + TS Demo</h1>
      <p>state: {state}</p>
      <p>是否是数字: {isNumber(state) ? '是' : '否'}</p>
    </div>
  );
}
