import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

const useFetch = (requests) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  function determineResponseType(request) {
    if (request.responseType === "JPEG") {
      return "arraybuffer";
    } else if (request.responseType === "JSON") {
      return "json";
    }
  }
  async function processResponse(request, response) {
    if (request.responseType === "JPEG") {
      return (
        "data:image/png;base64, " +
        (await Buffer.from(response.data, "binary").toString("base64"))
      );
    } else if (request.responseType === "JSON") {
      return response.data;
    }
  }
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        // for (const request of requests) {
        //   let response = await axios.get(request.url, {
        //     responseType: determineResponseType(request),
        //     withCredentials: true,
        //     params: request.params,
        //   });
        //   response = await processResponse(request, response);
        //   setData([...data, response]);
        // }
        const responses = await Promise.all(
          requests.map((request) =>
            axios
              .get(request.url, {
                responseType: determineResponseType(request),
                withCredentials: true,
                params: request.params,
              })
              .then((response) => {
                console.log(response, request);
                return processResponse(request, response);
              })
          )
        );

        setData(responses);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, error, loading };
};
export default useFetch;
