import axios from "axios";

type requestParams = {
  route: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  body?: unknown;
};

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
export const sendRequest = async ({
  route,
  method = "GET",
  body,
}: requestParams) => {
  const response = await axios({ method, url: route, data: body });
  return response.data;
};
