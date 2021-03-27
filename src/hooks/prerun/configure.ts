import { Hook } from '@oclif/config';
import { initClient } from '../../api/client';
import CreateLabels from '../../commands/group/create-labels';

export const hook: Hook<'prerun'> = async function (options) {
  const NeedConfiguration = [
    CreateLabels.name,
  ]

  if (NeedConfiguration.includes(options.Command.name)) {
    try {
      initClient()
    } catch (e) {
      this.error(e.message)
    }
  }
}
