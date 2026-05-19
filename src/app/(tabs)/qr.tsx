import { View, Text, StyleSheet } from "react-native"
import QRCode from "react-native-qrcode-svg"
import { colors } from "../../../theme/colors"
import { typography } from "../../../theme/typography"

export default function QRScreen() {
  const url = "https://fabian-terf.github.io/"

  return (
    <View style={styles.container}>
      <Text style={typography.title}>Ok ok</Text>
      <Text style={typography.body}>
        Scannez ce QR code pour accéder à ma version web
      </Text>

      <View style={styles.qrContainer}>
        <QRCode
          value={url}
          size={220}
          color={colors.primary}
          backgroundColor="white"
        />
      </View>

      <Text style={typography.small}>{url}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  qrContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
})
