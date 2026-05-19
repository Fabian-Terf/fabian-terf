import { View, Text, StyleSheet, ScrollView } from "react-native"
import { colors } from "../../../theme/colors"
import { typography } from "../../../theme/typography"
import { components } from "../../../theme/components"

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={typography.title}>À propos</Text>

      {/* Résumé professionnel */}
      <View style={components.card}>
        <Text style={typography.sectionTitle}>Profil</Text>
        <Text style={typography.body}>
          Analyste programmeur .NET C# avec plus de 20 ans d’expérience dans le
          développement, l’intégration et le support d’applications critiques.
          Méticuleux, rigoureux et passionné par la qualité du travail bien fait.
        </Text>
      </View>

      {/* Identité */}
      <View style={components.card}>
        <Text style={typography.sectionTitle}>Identité</Text>
        <Text style={typography.body}>Fabian Terf</Text>
        <Text style={typography.body}>Né le 16 septembre 1976</Text>
        <Text style={typography.body}>Belge</Text>
        <Text style={typography.body}>Marié, quatre enfants</Text>
      </View>

      {/* Points forts */}
      <View style={components.card}>
        <Text style={typography.sectionTitle}>Points forts</Text>
        <Text style={typography.body}>• Sens du détail et du travail bien fait</Text>
        <Text style={typography.body}>• Grande autonomie et fiabilité</Text>
        <Text style={typography.body}>• Capacité d’analyse et résolution de problèmes</Text>
        <Text style={typography.body}>• Expérience en environnements critiques (hôpital)</Text>
        <Text style={typography.body}>• Pédagogue et orienté transmission</Text>
      </View>

      {/* Centres d’intérêt */}
      <View style={components.card}>
        <Text style={typography.sectionTitle}>Centres d’intérêt</Text>
        <Text style={typography.body}>• Guitariste et professeur de guitare</Text>
        <Text style={typography.body}>• Ceinture noire 2e Dan – Karaté Shotokan-Shinshokaï</Text>
        <Text style={typography.body}>• Balades, VTT, cinéma</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
})
