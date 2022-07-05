import { useState, Fragment } from "react";
import classes from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

interface searchProps {
  inputData?: any;
  filteredData?: any;
}

const Search = (props: searchProps) => {
  const [q, setQ] = useState("");
  const [searchTerm] = useState(["sentTo"]);
  const { inputData, filteredData } = props;

  const search = (items: any) => {
    return items.filter((item: any) => {
      return searchTerm.some((newItem: any) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  const changeHandler = (e: any) => {
    if (e.target.value === "") {
      setQ(e.target.value);
      filteredData(inputData);
    } else {
      setQ(e.target.value);
      const finalData = search(inputData);
      filteredData(finalData);
    }
  };

  return (
    <div className={classes.remindersSearch}>
      <BsSearch className={classes.search} />
      <input
        type="text"
        placeholder="Search Here..."
        value={q}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
