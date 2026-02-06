export const sleep = (timeout = 1000): Promise<void> =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), timeout));
