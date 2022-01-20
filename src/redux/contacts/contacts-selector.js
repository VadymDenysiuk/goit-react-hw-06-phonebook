export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getVisibleContacts = state => {
  const filter = getFilter(state);
  const items = getItems(state);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  return visibleContacts;
};
