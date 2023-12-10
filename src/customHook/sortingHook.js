
import React, { useEffect, useState } from "react";
function useSortedData(data, sortOrder) {

  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    let sorted = data;

    if(sortOrder === 'asc') {
      sorted = data.sort((a, b) => {
        if(typeof a === 'number') {
            return a - b;  
          } else {
            return a.localeCompare(b);
          }
      });
    } else if(sortOrder === 'desc') {  
      sorted = data.sort((a, b) => {
        if(typeof a === 'number') {
            return b - a;  
          } else {
            return b.localeCompare(a);
          }
      });
    }

    setSortedData(sorted);

  }, [data, sortOrder]);

  return sortedData;
}

export default useSortedData;
