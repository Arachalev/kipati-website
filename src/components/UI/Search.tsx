import classes from "./Search.module.css"
import { BsSearch } from "react-icons/bs"


const Search =()=>{

    return(

<div className={classes.remindersSearch}>
          <BsSearch className={classes.search} />
          <input type="text" placeholder="Search Here..." />
        </div>

    )
}

export default Search