import { useMushroomStore } from "@/store/mushroomStore/mushroomStore";
import { ActiveFilterType, Color, FilterData, Spots } from "@/types/types";
import { filterMushroomData } from "@/utils/filterMushrooms";

export const useActiveFilterFacade = () => {
  const activeFilters = useMushroomStore((s) => s.getActiveFilters());
  const setActiveFilters = useMushroomStore((s) => s.setActiveFilters);
  const mushroomData = useMushroomStore((s) => s.getMushroomData());
  const resetActiveFilters = useMushroomStore((s) => s.resetActiveFilters);

  function getSpotColorFilters(): FilterData[] {
    return [
      {
        title: "color",
        data: [
          ...new Set(
            filterMushroomData(mushroomData, activeFilters).map(
              (mushroom) => mushroom.color
            )
          ),
        ],
      },
      {
        title: "spots",
        data: [
          ...new Set(
            filterMushroomData(mushroomData, activeFilters).map(
              (mushroom) => mushroom.spots
            )
          ),
        ],
      },
    ];
  }

  const handleFilterSelect = (key: string, value: string) => {

    

    setActiveFilters(key as keyof ActiveFilterType, value);
  };

  return {
    filters: getSpotColorFilters(),
    handleFilterSelect,
    resetActiveFilters,
  };
};
