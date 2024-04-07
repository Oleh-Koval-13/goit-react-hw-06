import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  
  return (
    <div className={css.wrapperSearchBox}>
      <p className={css.textSearchBox}>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default SearchBox;