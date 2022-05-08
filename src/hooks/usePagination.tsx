import { useMemo } from "react";



interface pagination{
    totalCount:number,
  pageSize:number,
  siblingCount:number,
  currentPage:number,
  
}

const range = (start:number, end:number)=>{
    let length = end - start + 1;

    return Array.from({length}, (_, idx)=>idx + start)
}

export const DOTS  = '...'


export const usePagination = ({totalCount, pageSize, siblingCount =1, currentPage}: pagination
) => {
   
    // const{totalCount, pageSize, siblingCount, currentPage} = Pagination
    const paginationRange = useMemo(()=>{
        const totalPageCount = Math.ceil(totalCount/pageSize)
        //The number of pages from the data gotten from the backend

        const totalPageNumbers = siblingCount + 5;
           
    /*  Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */

      if(totalPageNumbers >= totalPageCount){
          return [ range(1, totalPageCount)]
      }

      const leftSiblingsIndex = Math.max(currentPage - siblingCount, 1)
      const rightSiblingsIndex = Math.min(currentPage + siblingCount, totalPageCount)

      const shouldShowLeftDots = leftSiblingsIndex > 2;
      const shouldShowRightDots = rightSiblingsIndex < totalPageCount - 2

      const firstPageIndex  = 1;
      const lastPageIndex = totalPageCount


      
    /*	Case 2: No left dots to show, but rights dots to be shown
    */

    if(!shouldShowLeftDots && shouldShowRightDots){
        let leftItemCount = 3 + 2*siblingCount
        let leftRange = range(1, leftItemCount)

        return [...leftRange, DOTS, totalPageCount]
    }

       
    /*	Case 3: No right dots to show, but left dots to be shown
    */

    if(shouldShowLeftDots && !shouldShowRightDots){
        let rightItemCount = 3 + 2 *siblingCount
        let rightRange = range(totalPageCount - rightItemCount +1, totalPageCount)

        return [firstPageIndex, DOTS, ...rightRange]
    }

    
    /*	Case 4: Both left and right dots to be shown
    */

    if(shouldShowLeftDots && shouldShowRightDots){
        let middleRange = range(leftSiblingsIndex, rightSiblingsIndex)

        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }


        
        
    },[totalCount, pageSize, siblingCount, currentPage])

    return paginationRange
};


 
