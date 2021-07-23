<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>jsDelivr API</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile color="primary">
        <v-card-title color="primary">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :href="icon.href"
            :key="icon.name"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Paul Legkii</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/index";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    icons: [
      {
        name: "mdi-linkedin",
        href: "https://www.linkedin.com/in/poul-legkiy-948b55168/",
      },
      { name: "mdi-github", href: "#" },
    ],
  }),
};
</script>
