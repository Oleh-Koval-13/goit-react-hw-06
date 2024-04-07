import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  }

  return (
    <div className={css.wrapperSearchBar}>
      <p className={css.textSearchBar}>Find contacts by name</p>
      <input 
        type="text" 
        value={searchValue} 
        onChange={handleChange} 
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;