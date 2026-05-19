import { View, Text, StyleSheet } from "react-native"
import Avatar from "./Avatar"
import { colors } from "../theme/colors"
import { typography } from "../theme/typography"

export default function HeaderCV() {
  return (
    <View style={styles.container}>
      <Avatar
        source={require("../assets/images/fabian-terf.jpg")}
        size={120}
      />

      <View style={styles.textContainer}>
        <Text style={typography.title}>Fabian Terf</Text>
        <Text style={typography.subtitle}>Analyste programmeur .NET C#</Text>
        <Text style={typography.small}>Guitariste • Professeur • 2e Dan</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 12,
    alignItems: "center",
  },
})
