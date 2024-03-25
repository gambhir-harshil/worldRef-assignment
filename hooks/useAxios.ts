import axios from "axios";
import { useEffect, useState } from "react";

// axios.defaults.baseURL = "https://rickandmortyapi.com/api";

interface UseAxiosResponse<T> {
  response: T | null;
  error: string | null;
  loading: boolean;
}

function useAxios<T>(request: string): UseAxiosResponse<T> {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/${request}`
        );
        setResponse(res.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
    fetchData();
  }, [request]);

  return { response, error, loading };
}

export default useAxios;
