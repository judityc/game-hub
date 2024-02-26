import { useQuery } from "@tanstack/react-query";
import ScreenShot from "../entities/ScreenShot";
import APIClient from "../services/api-client";

const useScreenShots = (gameId: number) => {
  const apiCilent = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiCilent.getAll,
  });
};

export default useScreenShots;
