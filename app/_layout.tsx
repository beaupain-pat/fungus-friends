import { ViewWith } from "@/components/ViewWith";
import { useMushroomStore } from "@/store/mushroomStore/mushroomStore";
import { defaultTheme } from "@/theme/defaultTheme";
import { ActiveFilterType } from "@/types/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Pressable } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const activeFilters = useMushroomStore((s) => s.getActiveFilters());

  function countNonNullProperties(item: ActiveFilterType): number {
    let count = 0;

    if (item.color) count += 1;
    if (item.spots) count += 1;

    return count;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerStyle: {
              backgroundColor: defaultTheme.backgroundColor,
            },
            title: "",
            headerRight: () => (
              <Link href="/filterScreen" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <ViewWith direction="row" align="center">
                      <FontAwesome
                        name="filter"
                        size={25}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        color={defaultTheme.mainColor}
                      />
                      <Number>{countNonNullProperties(activeFilters)}</Number>
                    </ViewWith>
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name="filterScreen"
          options={{
            headerStyle: {
              backgroundColor: defaultTheme.backgroundColor,
            },
            headerTintColor: defaultTheme.mainColor,
            title: "Select filters",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const Number = styled.Text`
  color: ${(p) => p.theme.mainColor};
  font-weight: bold;
`;
