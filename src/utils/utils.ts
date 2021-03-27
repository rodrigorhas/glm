import { pathExistsSync } from 'fs-extra'
import { resolve } from 'path'

export const fileParse = (input: string, context: any) => {
  const dir = resolve(process.cwd(), input);

  if (!pathExistsSync(dir)) {
    throw Error(`File ${dir} path does not exists`);
  }

  return dir;
}
