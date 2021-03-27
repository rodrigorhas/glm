import { Command, flags } from '@oclif/command'
import { default as Configuration, writeConfigFile } from '../../config'

export default class Config extends Command {
  static description = 'Create a configuration at $HOME/.glm/config.json'

  static examples = [
    `$ glm config --token <TOKEN> --host 'https://gitlab.example.com'`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    token: flags.string({ required: true, description: 'Gitlab Token' }),
    host: flags.string({ required: true, description: 'Gitlab Host' }),
  }

  async run() {
    const { args, flags } = this.parse(Config)

    const { token, host } = flags;

    await writeConfigFile({ host, token })

    this.log(`${Configuration.filePath} was created`)
  }
}
