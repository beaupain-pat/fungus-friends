import { useMushroomStore } from "@/store/mushroomStore/mushroomStore";
import { filterMushroomData } from "@/utils/filterMushrooms";
import { useEffect } from "react";

export const useFindMushroomsFacade = () => {
  const fetchData = useMushroomStore((s) => s.fetchMushroomData);
  const activeFilters = useMushroomStore((s) => s.getActiveFilters());
  const mushroomData = useMushroomStore((s) => s.mushroomData);
  const isLoading = useMushroomStore((s) => s.loading);

  useEffect(() => {
    if (mushroomData.length === 0) {
      fetchData();
    }
  }, [mushroomData]);

  return {
    mushroomData: filterMushroomData(mushroomData, activeFilters),
    isLoading,
  };
};
