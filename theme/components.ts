// theme/components.ts
import { ViewStyle, TextStyle } from "react-native"
import { colors } from "./colors"
import { layout } from "./layout"

type Components = {
  card: ViewStyle
  buttonPrimary: ViewStyle
  buttonPrimaryText: TextStyle
}

export const components: Components = {
  card: {
    backgroundColor: colors.card,
    padding: layout.cardPadding,
    borderRadius: layout.cardRadius,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: layout.spacing.md,
  },

  buttonPrimary: {
    backgroundColor: colors.accent,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",   // ✔️ maintenant typé correctement
  },

  buttonPrimaryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
}
