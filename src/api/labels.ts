import CreateLabels from '../commands/group/create-labels';
import { api } from './client';

export interface Label {
  name: string;
  color: string;
  description: string;
}

export interface CreateLabel extends Label {
  groupId: number;
}

export interface CreateGroupLabelsInput {
  groupId: number;
  labels: CreateLabel[]
}

export const createGroupLabel = ({ name, color, description, groupId }: CreateLabel) => {
  return api.post(
    `/api/v4/groups/${groupId}/labels`,
    {
      name,
      color,
      description,
    },
  )
}

export function createGroupLabels(this: CreateLabels, { groupId, labels }: CreateGroupLabelsInput) {
  return Promise.all(
    labels.map((label) => {
      return createGroupLabel({ ...label, groupId })
        .then((res) => {
          this.log(`Label "${label.name}" has been created on groupId(${groupId})`)
          return res;
        })
        .catch(err => {
          this.warn(`Cannot create "${label.name}" label on groupId(${groupId}) - ${err.response.data.message}. Skipping...`)
        })
    }),
  );
}
