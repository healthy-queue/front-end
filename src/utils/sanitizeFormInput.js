import { pickBy } from 'lodash';

export const sanitizeFormInput = input => {
  return pickBy(input, value => value !== "");
}
