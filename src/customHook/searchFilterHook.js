import { useState, useEffect } from 'react';

function useSearchFilter(initialData, initialQuery) {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if(!query) {
      setData(initialData);
      return;
    }

    const filteredData = initialData.filter(item => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setData(filteredData);

  }, [query, initialData]);

  return { data, setQuery };
}

export default useSearchFilter;


