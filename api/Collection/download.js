import async from '@vitruvian-tech/app-studio-core/helpers/Promise';

export default async((req, params, resolve) => {
  resolve(req.body);
});