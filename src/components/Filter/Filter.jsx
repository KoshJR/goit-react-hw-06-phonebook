import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/contacts/contactsSlice';
import css from './Filter.module.css';



export const Filter = () => {
 const filter = useSelector(store => store.contactsFactory.filer)
 const dispatch = useDispatch()

 const handleChange = event => {
  const action = setFilter(event.target.value)
  dispatch(action)
};

  return (
    <div className={css.filterList}>
      <label htmlFor="name">Find contact by name</label>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        onChange={event => handleChange(event)}
        value={filter}
        required
      />
    </div>
  );
};
