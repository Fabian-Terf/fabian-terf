import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native"
import { colors } from "../../../theme/colors"
import { typography } from "../../../theme/typography"
import { components } from "../../../theme/components"

export default function ContactScreen() {
  const phone = "+32473891268"
  const email = "fabian.terf@gmail.com"
  const address = "Rue des Douze Hommes 45, 4141 Banneux, Belgique"

  return (
    <View style={styles.container}>
      <Text style={typography.title}>Contact</Text>

      {/* Téléphone */}
      <View style={components.card}>
        <Text style={typography.subtitle}>Téléphone</Text>
        <Text style={typography.body}>{phone}</Text>

        <TouchableOpacity
          style={components.buttonPrimary}
          onPress={() => Linking.openURL(`tel:${phone}`)}
        >
          <Text style={components.buttonPrimaryText}>Appeler</Text>
        </TouchableOpacity>
      </View>

      {/* Email */}
      <View style={components.card}>
        <Text style={typography.subtitle}>Email</Text>
        <Text style={typography.body}>{email}</Text>

        <TouchableOpacity
          style={components.buttonPrimary}
          onPress={() => Linking.openURL(`mailto:${email}`)}
        >
          <Text style={components.buttonPrimaryText}>Envoyer un email</Text>
        </TouchableOpacity>
      </View>

      {/* Adresse */}
      <View style={components.card}>
        <Text style={typography.subtitle}>Adresse</Text>
        <Text style={typography.body}>{address}</Text>

        <TouchableOpacity
          style={components.buttonPrimary}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`
            )
          }
        >
          <Text style={components.buttonPrimaryText}>Ouvrir dans Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
})
