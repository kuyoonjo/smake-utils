import { resolve as r } from 'path';

export function resolve(...args: string[]) {
  return r(...args).replaceAll('\\', '/');
}
