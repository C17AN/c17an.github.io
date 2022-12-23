import { WAKATIME_ENDPOINT } from "@site/src/contants/urls";
import axios from "axios";

export const fetchWakaTime = async () => {
  try {
    const data = await axios.get(WAKATIME_ENDPOINT);
    return data;
  } catch (error) {
    return error;
  }
};
