import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { ViewWith } from "@/components/ViewWith";
import { INITIAL_MAP_VIEW } from "@/constant";
import { useFindMushroomsFacade } from "./facades/useFindMushroomsFacade";
import MapView from "react-native-map-clustering";
import { Callout, Marker } from "react-native-maps";
import styled, { useTheme } from "styled-components/native";

export default function HomeScreen() {
  const { mushroomData, isLoading } = useFindMushroomsFacade();

  const theme = useTheme();

  const renderMarkers = () => {
    return mushroomData.map((marker) => (
      <Marker
        key={`mushroom_name_${marker.name}`}
        coordinate={{ latitude: marker.latlng[0], longitude: marker.latlng[1] }}
        anchor={{ x: 1, y: 1 }}
        pointerEvents="auto"
      >
        <Callout tooltip={true}>
          <ViewWith background={theme.backgroundColor} padding={10}>
            <ToolTipText>Name: {marker.name}</ToolTipText>
            <ToolTipText>Spots: {marker.spots}</ToolTipText>
            <ToolTipText>Color: {marker.color}</ToolTipText>
          </ViewWith>
        </Callout>
      </Marker>
    ));
  };

  return (
    <ViewWith flx>
      {isLoading ? (
        <ViewWith
          flx
          align="center"
          justify="center"
          background={theme.backgroundColor}
        >
          <ViewWith background={theme.backgroundColor} gap={8}>
            <ActivityIndicator size={"large"} color={theme.mainColor} />
          </ViewWith>
        </ViewWith>
      ) : (
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={INITIAL_MAP_VIEW}
          rotateEnabled={false}
          clusterColor={theme.backgroundColor}
          clusterTextColor={theme.mainColor}
        >
          {renderMarkers()}
        </MapView>
      )}
    </ViewWith>
  );
}

const ToolTipText = styled.Text`
  color: ${(p) => p.theme.mainColor};
`;
