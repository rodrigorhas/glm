import fs from 'fs-extra';
import os from 'os';
import path from 'path';

interface ApplicationConfiguration {
  token: string;
  host: string;
}

const configFilePath = path.resolve(os.homedir(), path.join('.glm', 'config.json'));
const configFolderPath = path.resolve(os.homedir(), '.glm');

const Config = {
  folderPath: configFolderPath,
  filePath: configFilePath,
}

export const configFileExists = () => {
  return fs.pathExists(Config.filePath)
}

export const loadConfig = (): ApplicationConfiguration => {
  try {
    return require(Config.filePath);
  } catch (e) {
    throw new Error('Cannot find configuration file. Use "glm configure --help"')
  }
}

export const writeConfigFile = async (data: Partial<ApplicationConfiguration>) => {
  await fs.ensureDir(Config.folderPath);

  return fs.writeFile(
    Config.filePath,
    JSON.stringify(data, null, 2),
    { encoding: 'utf8' }
  )
}

export default Config;
