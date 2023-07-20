import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const events = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  eventName: faker.company.name(),
  status: sample(['active', 'banned']),
}));

export default events;
