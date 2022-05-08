import { FC } from "react";
// import classnames from 'classnames';
import { usePagination, DOTS } from "../../hooks/usePagination";
// import "./pagination.scss";
import classes from "./Pagination.module.css"

interface paginationProps {
  onPageChange?: any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: any;
}

const Pagination: FC<paginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
 
 
    const paginationContainerClass = `${classes.paginationContainer} ${props.className} `
    const previousClass = ` ${classes.paginationItem} ${currentPage ===1? classes.disabled: " "}`
    const leftArrow = `${classes.arrow} ${classes.left}`
    const rightArrow = ` ${classes.arrow} ${currentPage === lastPage? classes.disabled : " "}` 
  return (
    <ul
    className={paginationContainerClass}
    //   className={classnames('pagination-container', { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li
      className={previousClass}
        // className={classnames('pagination-item', {
        //   disabled: currentPage === 1
        // })}
        onClick={onPrevious}
      >
        <div className={leftArrow} />
      </li>
      {paginationRange.map((pageNumber: any) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li>&#8230;</li>;
        }
     const changeClass = ` ${classes.paginationItem} ${pageNumber === currentPage? classes.selected:" "}`



        // Render our Page Pills
        return (
          <li
          className={changeClass}
            // className={classnames('pagination-item', {
            //   selected: pageNumber === currentPage
            // })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
      className={rightArrow}
        // className={classnames('pagination-item', {
        //   disabled: currentPage === lastPage
        // })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
