import { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet, View } from "react-native";

export const Loading = () => {
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnimation]);

  const rotation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/Flixo-Logo.png")}
        />
        <Animated.View
          style={[
            styles.border,
            {
              transform: [{ rotate: rotation }],
              position: "absolute",
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    borderWidth: 5,
    borderColor: "#eadfce",
    borderRadius: 100,
    width: 150,
    height: 150,
    backgroundColor: "transparent",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 1,
  },
});
