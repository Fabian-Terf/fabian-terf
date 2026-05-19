import HeaderCV from "../../../components/HeaderCV"
import BadgeRow from "../../../components/BadgeRow"
import { View, StyleSheet } from "react-native"
import { colors } from "../../../theme/colors"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderCV />

      <BadgeRow
        items={[
          "🇧🇪 Belge",
          "🎸 Guitariste",
          "🥋 2e Dan",
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: "center",
  },
})
