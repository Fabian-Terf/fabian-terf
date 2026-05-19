import { LinearGradient } from "expo-linear-gradient"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import { colors } from "../theme/colors"
import { typography } from "../theme/typography"
import Avatar from "./Avatar"

export default function HeaderCV() {
  return (
    <ImageBackground
      source={require("../assets/images/header-bg.png")}
      style={styles.container}
      imageStyle={styles.image}
    >
      {/* Masque dégradé pour lisibilité */}
      <LinearGradient
        colors={["rgba(0,0,0,0.55)", "rgba(0,0,0,0.25)", "rgba(0,0,0,0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientMask}
      />

      <Avatar source={require("../assets/images/fabian-terf.jpg")} size={100} />

      <View style={styles.textContainer}>
        <Text style={[typography.title, styles.white]}>Fabian Terf</Text>
        <Text style={[typography.subtitle, styles.white]}>
          Analyste programmeur .NET C#
        </Text>
        <Text style={[typography.small, styles.white]}>
          Guitariste • Professeur • 2e Dan
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 40,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
  },

  image: {
    resizeMode: "cover",
  },

  gradientMask: {
    ...StyleSheet.absoluteFillObject,
  },

  textContainer: {
    marginTop: 12,
    alignItems: "center",
  },

  white: {
    color: colors.text,
  },
})
