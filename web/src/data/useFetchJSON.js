import { useEffect, useState } from "react";
import axios from "axios";

const useFetchJSON = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url, { withCredentials: true });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, error, loading };
};
export default useFetchJSON;
