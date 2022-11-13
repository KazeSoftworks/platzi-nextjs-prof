import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = <T,>(endpoint: string): T | null => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await axios.get<T>(endpoint);
      setData(response.data);
    }
    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [endpoint]);

  return data;
};

export default useFetch;
