import { Command, flags } from '@oclif/command'
import prompts from 'prompts'
import { createGroupLabels, Label } from '../../api/labels';
import { fileParse } from '../../utils/utils';

export default class CreateLabels extends Command {
  static description = 'Create group labels from file'

  static examples = [
    `$ glm create-labels --groupId=52 --file=./test_files/labels.ts`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    groupId: flags.integer({ char: 'g', description: 'Gitlab Group ID. Ex: 40', required: true }),
    file: flags.string({
      char: 'f',
      description: 'filePath to import',
      parse: fileParse,
      required: true,
    }),
  }

  async run() {
    const { args, flags } = this.parse(CreateLabels)

    const filePath = flags.file;
    const labelsOptions: Label[] = require(filePath).default;

    this.log(`${labelsOptions.length} labels were found`);

    const choices = labelsOptions.map((label, index) => {
      return {
        title: `[${label.name}]: ${label.description} (${label.color})`,
        value: index,
        selected: true,
      }
    })

    const { value: labels } = await prompts({
      type: 'multiselect',
      name: 'value',
      message: 'Which label(s) would you like to create?',
      choices,
      min: 1,
      hint: '- Space to select. Return to submit',
      format: (answer: number[]) => {
        return answer.reduce((acc, labelIndex) => {
          if (labelsOptions[labelIndex]) {
            acc.push(labelsOptions[labelIndex])
          }

          return acc;
        }, [] as Label[])
      },
    })

    await createGroupLabels.apply(this, [{ groupId: flags.groupId, labels }])
  }
}
