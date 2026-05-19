import { ScrollView, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../theme/colors"
import { typography } from "../../../theme/typography"

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      <Text style={typography.title}>À propos</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Profil</Text>
        <Text style={styles.text}>
          Analyste programmeur .NET C# avec une solide expérience en développement,
          intégration et optimisation de systèmes. Passionné par la création de solutions
          élégantes, performantes et fiables.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Compétences principales</Text>

        <Text style={styles.bullet}>• Développement .NET C#</Text>
        <Text style={styles.bullet}>• Analyse & architecture logicielle</Text>
        <Text style={styles.bullet}>• Intégration de systèmes</Text>
        <Text style={styles.bullet}>• Développement mobile (React Native)</Text>
        <Text style={styles.bullet}>• Gestion de projet & pédagogie</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Parcours</Text>
        <Text style={styles.text}>
          Bachelier en informatique de gestion, détenteur d’un certificat d’aptitudes
          pédagogiques, guitariste et professeur, ceinture noire 2e Dan de Karaté
          Shotokan-Shinshokaï.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Valeurs</Text>
        <Text style={styles.text}>
          Rigueur, pédagogie, créativité, discipline et passion — que ce soit dans le
          développement, la musique ou les arts martiaux.
        </Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 20,
    paddingBottom: 60,
  },

  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.secondary,
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: colors.textLight,
    lineHeight: 22,
  },

  bullet: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 6,
  },
})
