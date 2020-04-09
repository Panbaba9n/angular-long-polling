import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';


const entityMetadata: EntityMetadataMap = {
  Message: {},
  Conversation: {},
};

const pluralNames = { Message: 'Message', Conversation: 'Conversation' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
