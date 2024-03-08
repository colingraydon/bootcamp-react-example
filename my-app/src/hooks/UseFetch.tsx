import { useState, useEffect } from "react";

interface FetchData<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(url: string): FetchData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: T = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error: unknown) {
        if (typeof error === "object" && error !== null) {
          setError((error as { message: string }).message);
        }
        setError("Something went wrong!");
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
