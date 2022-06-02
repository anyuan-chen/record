import "./search_bar.css";
const SearchBar = ({ value, setValue }) => {
  return (
    <input
      className="search_bar__bar"
      placeholder="Enter a song title..."
      value={value}
      onChange={(event) => setValue(event.target.value)}
    ></input>
  );
};
export default SearchBar;
