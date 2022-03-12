import { pickBy } from 'lodash';

export const sanityFormInput = input => {
  return pickBy(input, value => value !== "");
}