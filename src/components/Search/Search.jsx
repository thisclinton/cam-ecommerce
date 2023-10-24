import { IoSearchOutline } from "react-icons/io5";
import "./Search.css";

function Search() {
  return (
    <>
      <form action="" className="container form__container">
        <IoSearchOutline className="form__btn" />
        <input type="text" className="form__search" />
      </form>
    </>
  );
}

export default Search;
