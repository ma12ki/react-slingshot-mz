import { constants as blogConstants, reducers as blogReducers } from '../blog';
import { constants as nestedConstants, reducers as nestedReducers } from '../nested';

export default {
  [blogConstants.moduleName]: blogReducers,
  [nestedConstants.moduleName]: nestedReducers,
};
