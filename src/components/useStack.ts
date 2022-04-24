import { useState } from 'react';

export interface Stack<T> {
  pop: () => void;
  push: (v: T) => void;
  reset: () => void;
  length: () => number;
}

const useStack = <T>(init?: T[]): [T, Stack<T>] => {
  const initStack: T[] = init ?? [];
  const [stack, setStack] = useState<T[]>(initStack);

  const pop = (): void => {
    if (stack.length === 0) {
      return;
    }

    setStack((prevState) => [...prevState.slice(0, prevState.length - 1)]);
  };

  const push = (v: T): void => {
    setStack((prevState) => [...prevState, v]);
  };

  const reset = (): void => {
    setStack(initStack);
  };

  const length = (): number => stack.length;

  return [stack[stack.length - 1], { pop, push, reset, length }];
};

export default useStack;
