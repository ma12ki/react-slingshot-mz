import { moduleName as blogModuleName , reducers as blogReducers } from '../blog';
import { moduleName as nestedModuleName , reducers as nestedReducers } from '../nested';

export default {
  [blogModuleName]: blogReducers,
  [nestedModuleName]: nestedReducers,
};
