import { Animated } from "react-native";
import { useState, useEffect } from "react";
import ScreenLayout from "./layouts/ScreenLayout";

export default function App() {
  /*Creamos un estado 'rotationAnim' con un valor inicial de 0 utilizando Animated.Value
    Este valor va a controlar la rotacion de las dos cajas */

  const [rotationAnim] = useState(new Animated.Value(0));

  /**
   * El hook useEffect se ejecuta una vez al montar el componente.
   * Aca configuramos la animacion  para que corra en bucle.
   * Animated.timing se utiliza para crear una animacion animacion temporal que cambia el valor de la variable rotationAnim.
   *
   */
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotationAnim]);

  const clockWise = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const counterClockWise = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"],
  });

  return (
    <ScreenLayout>
      <Animated.View
        style={{
          position: "absolute",
          transform: [{ rotate: clockWise }],
          width: 150,
          height: 150,
          backgroundColor: "lightblue",
        }}
      />
      <Animated.View
        style={{
          transform: [{ rotate: counterClockWise }],
          width: 120,
          height: 120,
          backgroundColor: "tomato",
        }}
      />
    </ScreenLayout>
  );
}
