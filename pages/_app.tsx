import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";
import { StoreProvider } from "easy-peasy";
import "reset-css";
import { store } from "../lib/store";

const theme = extendTheme({
  color: {
    gray: {
      100: "#EEEEEE",
      200: "#F5F5F5",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <StoreProvider store={store}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </StoreProvider>
  </ChakraProvider>
);

export default MyApp;
