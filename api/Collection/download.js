import async from '@vitruvian-tech/app-studio-core/lib/Promise';

export default async((req, params, resolve) => {
  resolve(req.body);
});
