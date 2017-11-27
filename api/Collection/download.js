import async from '@machete-platform/core-bundle/lib/Promise';

export default async((req, params, resolve) => {
  resolve(req.body);
});
