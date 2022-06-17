import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

const useFetchJPEG = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        let response = await axios
          .get(url, {
            responseType: "arraybuffer",
            withCredentials: true,
          })
          .then((response) =>
            Buffer.from(response.data, "binary").toString("base64")
          );
        response = "data:image/png;base64, " + response;
        console.log(response)
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, error, loading };
};
export default useFetchJPEG;
