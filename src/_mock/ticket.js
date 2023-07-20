import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const tickets = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  clientName: faker.name.fullName(),
  eventName: faker.commerce.productName(),
  isActive: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
}));

export default tickets;
