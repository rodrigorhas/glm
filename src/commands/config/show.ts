import { Command, flags } from '@oclif/command'
import { loadConfig } from '../../config'

export default class Show extends Command {
  static description = 'Show configuration file'

  static examples = [
    `$ glm config show`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const { args, flags } = this.parse(Show)

    const config = loadConfig();
    this.log(JSON.stringify(config, null, 2))
    this.exit();
  }
}
