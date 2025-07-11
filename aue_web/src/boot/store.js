import storeDefinition from 'src/store';

export default async ({ app }) => {
  app.use(storeDefinition);
};