import { useEffect, useRef } from "react"
import { Animated, View, Image, StyleSheet, ImageStyle, ViewStyle } from "react-native"
import { colors } from "../theme/colors"

type AvatarProps = {
  source: any
  size?: number
  style?: ViewStyle
}

export default function Avatar({ source, size = 140, style }: AvatarProps) {
  const opacity = useRef(new Animated.Value(0)).current
  const scale = useRef(new Animated.Value(0.8)).current

  const borderSize = size + 10

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  return (
    <Animated.View
      style={[
        styles.borderContainer,
        {
          width: borderSize,
          height: borderSize,
          borderRadius: borderSize / 2,
          borderColor: colors.secondary,
          opacity,
          transform: [{ scale }],
        },
        style,
      ]}
    >
      <Image
        source={source}
        style={[
          styles.avatar,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  borderContainer: {
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,

  avatar: {
    resizeMode: "cover",
  } as ImageStyle,
})
