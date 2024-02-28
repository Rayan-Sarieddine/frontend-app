import { sendRequest } from "../../helpers/request";

type dataResponse = {
  number: number;
  time: number;
  recipient: string;
  value: number;
  pwr: number;
};

export const infoDataSource = {
  getData: async (): Promise<dataResponse> => {
    const response = await sendRequest({
      route: "/",
      method: "GET",
    });
    return response;
  },
};
