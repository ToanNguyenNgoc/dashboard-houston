/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export function useFilterKeyword(keyword: string, list: any[]) {
  const [listBySearch, setListBySearch] = useState<any[]>([])
  useEffect(() => {
    function handleSearchTerm() {
      const result = list?.filter((item: { [x: string]: { toString: () => string; }; }) => {
        return Object.keys(item).some(key =>
          item[key]?.toString().toLowerCase().includes(keyword.toString().toLowerCase())
        )
      })
      setListBySearch(result);
    }
    handleSearchTerm()
  }, [keyword, list])
  return listBySearch
}