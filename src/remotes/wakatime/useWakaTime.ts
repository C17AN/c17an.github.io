import { WAKATIME_ENDPOINT } from "@site/src/contants/urls";
import { useQuery } from "react-query";
import { fetchWakaTime } from "./fetchWakaTime";

export const useWakaTime = () => {
  return useQuery(WAKATIME_ENDPOINT, fetchWakaTime);
};
