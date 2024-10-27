import { StyleSheet, SectionList, Button } from "react-native";
import { useActiveFilterFacade } from "./facades/useActiveFilterFacade";
import { ActiveFilterType } from "@/types/types";
import { ViewWith } from "@/components/ViewWith";
import styled, { useTheme } from "styled-components/native";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { Spacer } from "@/components/Spacer";

export default function ModalScreen() {
  const { filters, handleFilterSelect, resetActiveFilters } =
    useActiveFilterFacade();
  const theme = useTheme();

  return (
    <ViewWith flx justify="center" padding background={theme.backgroundColor}>
      <SectionList
        sections={filters}
        keyExtractor={(item) => item}
        renderItem={({ item, section }) => {
          const getSection = filters.find(
            (item) => item.title === section.title
          );
          const isActive = getSection && getSection.data.length === 1;
          return (
            <SelectItem
              onPress={() =>
                handleFilterSelect(
                  section.title as keyof ActiveFilterType,
                  item
                )
              }
              isActive={isActive}
            >
              <Paragraph isActive={isActive}>
                {capitalizeFirstLetter(item)}
              </Paragraph>
            </SelectItem>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <ViewWith align="center">
            <Spacer height={10} />
            <Header>{capitalizeFirstLetter(title)}</Header>
            <Spacer height={10} />
          </ViewWith>
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
      <ViewWith padding={10}>
        <Button
          title="Reset filters"
          color={theme.mainColor}
          onPress={() => resetActiveFilters()}
        />
      </ViewWith>
    </ViewWith>
  );
}

const SelectItem = styled.TouchableOpacity<{ isActive?: boolean }>`
  background-color: ${(p) => (p.isActive ? p.theme.mainColor : p.theme.card)};
  padding: ${(p) => p.theme.containerMargin}px;
  margin-vertical: 8px;
`;

const Header = styled.Text`
  font-weight: bold;
  font-size: ${(p) => p.theme.fontSize.headingDefault}px;
  color: ${(p) => p.theme.fontColor.white};
`;

const Paragraph = styled.Text<{ isActive?: boolean }>`
  font-size: ${(p) => p.theme.fontSize.base}px;
  color: ${(p) =>
    p.isActive ? p.theme.backgroundColor : p.theme.fontColor.white};
`;
