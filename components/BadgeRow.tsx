import { View, StyleSheet } from "react-native"
import Badge from "./Badge"

type BadgeRowProps = {
  items: string[]
}

export default function BadgeRow({ items }: BadgeRowProps) {
  return (
    <View style={styles.row}>
      {items.map((item, index) => (
        <Badge key={index} label={item} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 16,
  },
})
