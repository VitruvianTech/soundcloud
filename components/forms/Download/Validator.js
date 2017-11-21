import memoize from 'lru-memoize';
import {createValidator, required} from '@vitruvian-tech/app-studio-core/lib/Validator';

export default memoize(10)(createValidator({
  token: [required],
  userId: [required]
}));
