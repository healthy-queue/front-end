import { pickBy } from 'lodash';

export async function sanityFormInput(input) {
  return pickBy(input, value => value !== "");
}