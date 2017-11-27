import memoize from 'lru-memoize';
import {createValidator, required} from '@machete-platform/core-bundle/lib/Validator';

export default memoize(10)(createValidator({
  token: [required],
  userId: [required]
}));
