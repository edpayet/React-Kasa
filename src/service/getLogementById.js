import data from '../data/accomodation';

export default function getLogementById(id) {
  return data.find(({ id: accomodationId }) => accomodationId === id);
}
