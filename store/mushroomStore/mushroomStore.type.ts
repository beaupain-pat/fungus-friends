import { ColorAndSpot, Mushroom, Spots, ActiveFilterType } from "@/types/types";

export interface MushroomStoreState {
  mushroomData: Mushroom[];
  activeFilters: ActiveFilterType;
  loading: boolean;
}

export interface MushroomStoreActions {
  fetchMushroomData(): Promise<void>;
  getMushroomData(): Mushroom[];
  setActiveFilters(key: keyof ActiveFilterType, value: string): void;
  getActiveFilters(): ActiveFilterType;
  getLoading(): boolean;
  resetActiveFilters(): void;
}
