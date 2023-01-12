import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#1A1C40",
        secondary: "#5864A6",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#EEEEEE",
        base: "#f2f4f5",
        base_dark: "#dadfe0",
      },
      dark: {
        primary: "#F23568",
        secondary: "#8C2E62",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#13141F",
        base: "#161724",
        base_dark: "#11121C",
      },
    },
  },
});
