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
        const responseCpy = [...requests]
        const responses = await Promise.all(
          responseCpy.map((request) =>
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
        setError(false)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [requests]);
  return { data, error, loading };
};
export default useFetch;
