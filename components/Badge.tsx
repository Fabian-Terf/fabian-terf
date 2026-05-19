import { Text, View, StyleSheet } from "react-native"
import { colors } from "../theme/colors"

type BadgeProps = {
  label: string
}

export default function Badge({ label }: BadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.card,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 4,
  },
  text: {
    color: colors.textDark,
    fontWeight: "600",
    fontSize: 14,
  },
})
