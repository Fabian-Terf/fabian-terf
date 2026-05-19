// theme/typography.ts
import { TextStyle } from "react-native"

type Typography = {
  title: TextStyle
  subtitle: TextStyle
  sectionTitle: TextStyle
  body: TextStyle
  small: TextStyle
}

export const typography: Typography = {
  title: {
    fontSize: 28,
    fontWeight: "700",   // ✔️ typé correctement
    color: "#0A3D62",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",   // ✔️ typé correctement
    color: "#1B4F72",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0A3D62",
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: "#0A3D62",
  },
  small: {
    fontSize: 14,
    fontWeight: "400",
    color: "#1B4F72",
  },
}
