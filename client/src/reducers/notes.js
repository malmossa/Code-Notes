
export default (notes = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return notes;
    case 'CREATE':
      return notes;
    default:
      return notes;
  }
};
