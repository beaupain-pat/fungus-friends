import { ActiveFilterType, Mushroom } from "@/types/types";

export const filterMushroomData = (
  mushroomData: Mushroom[],
  activeFilters: ActiveFilterType
) => {
  return mushroomData.filter((mushroom) => {
    const spotMatch =
      activeFilters.spots === null || mushroom.spots === activeFilters.spots;
    const colorMatch =
      activeFilters.color === null || mushroom.color === activeFilters.color;
    return spotMatch && colorMatch;
  });
};
