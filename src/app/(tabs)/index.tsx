import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import QRCode from "react-native-qrcode-svg"
import HeaderCV from "../../../components/HeaderCV"
import { colors } from "../../../theme/colors"
import { typography } from "../../../theme/typography"

export default function HomeScreen() {
  const url = "https://fabian-terf.github.io/"

  const shareCV = async () => {
    await Share.share({
      message: `Voici mon CV en ligne : ${url}`,
      url,
      title: "CV de Fabian Terf",
    })
  }

  return (
    <View style={styles.container}>
      <HeaderCV />

      {/* Badges visibles */}
      <View style={styles.badgeRow}>
        <View style={styles.badge}><Text style={styles.badgeText}>🇧🇪 Belge</Text></View>
        <View style={styles.badge}><Text style={styles.badgeText}>🎸 Guitariste</Text></View>
        <View style={styles.badge}><Text style={styles.badgeText}>🥋 2e Dan</Text></View>
      </View>

      {/* QR code stylé */}
      <View style={styles.qrContainer}>
        <Text style={[typography.subtitle, styles.qrTitle]}>Version Web</Text>

        <QRCode
          value={url}
          size={180}
          color={colors.primary}
          backgroundColor="#FFFFFF"
        />

        <Text style={[typography.small, styles.qrUrl]}>{url}</Text>
      </View>

      {/* Bouton partager */}
      <TouchableOpacity style={styles.shareButton} onPress={shareCV}>
        <Text style={styles.shareText}>Partager mon CV</Text>
      </TouchableOpacity>
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

  /* Badges lisibles */
  badgeRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  badge: {
    backgroundColor: "#E6F1FF",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginRight: 8,
  },
  badgeText: {
    color: colors.primary,
    fontWeight: "600",
  },

  /* QR code premium */
  qrContainer: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 24,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    width: "100%",
    borderWidth: 1,
    borderColor: colors.border,
  },
  qrTitle: {
    color: colors.primary,
    marginBottom: 10,
  },
  qrUrl: {
    color: colors.primary,
    marginTop: 10,
  },

  /* Bouton partager */
  shareButton: {
    marginTop: 25,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  shareText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
