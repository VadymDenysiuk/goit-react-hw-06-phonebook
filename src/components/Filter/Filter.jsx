import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selector';
import { Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return <Input type="text" value={value} onChange={onChange} />;
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
