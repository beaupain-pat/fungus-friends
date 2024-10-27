import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MushroomStoreActions, MushroomStoreState } from "./mushroomStore.type";
import getMushrooms from "@/api/api";

const initialState: MushroomStoreState = {
  mushroomData: [],
  activeFilters: {
    color: null,
    spots: null,
  },
  loading: true,
};

export const useMushroomStore = create<
  MushroomStoreState & MushroomStoreActions
>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        async fetchMushroomData() {
          try {
            const mushroomData = await getMushrooms();
            console.log("Mushrooms fetched");
            return set({ mushroomData });
          } catch (error) {
            console.error("Error fetching mushrooms:", error);
          } finally {
            set({ loading: false });
          }
        },

        getMushroomData() {
          return get().mushroomData;
        },

        setActiveFilters(key, value) {
          const { activeFilters } = get();
          const newActiveFilters = { ...activeFilters };
          newActiveFilters[key] =
            newActiveFilters[key] === value ? null : value;
          set({ activeFilters: newActiveFilters });
        },

        getActiveFilters() {
          return get().activeFilters;
        },

        resetActiveFilters() {
          set({
            activeFilters: initialState.activeFilters,
          });
        },

        getLoading() {
          return get().loading;
        },
      }),
      {
        name: "mushroom-store-storage",
        storage: createJSONStorage(() => AsyncStorage),
        partialize: (state) =>
          ({
            activeFilters: state.activeFilters,
          } as Partial<MushroomStoreState>),
      }
    )
  )
);
