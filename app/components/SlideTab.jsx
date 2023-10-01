import { Easing, withTiming } from "react-native-reanimated";

const SlideTab = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: withTiming(
              current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              })
            ),
          },
        ],
      },
    };
  },
};

export default SlideTab;
