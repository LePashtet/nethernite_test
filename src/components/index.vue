<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" sm="8">
        <v-text-field
          label="Package Name"
          append-icon="mdi-magnify"
          v-model="searchQuery.name"
          @keypress.enter="searchClick"
          @click:append="searchClick"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-data-table
          :headers="tableInterface.headers"
          :items="SEARCH_RESULT"
          :items-per-page="10"
          :page.sync="tableInterface.pagination.current"
          @click:row="showPackage"
        ></v-data-table>
      </v-col>
    </v-row>

    <modal :dialog="dialog.showDialog" :data="dialog.data" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import modal from "./modal";
export default {
  name: "index",
  components: {
    modal,
  },
  data: () => ({
    searchQuery: {
      name: "",
    },
    tableInterface: {
      headers: [
        {
          text: "Package Name",
          align: "start",
          value: "package.name",
        },
        {
          text: "Package Name",
          align: "start",
          sortable: true,
          value: "package.name",
        },
        { text: "Version", value: "package.version" },
        { text: "Author", value: "package.author.name" },
        { text: "Homepage", value: "package.links.npm" },
      ],
      pagination: {
        current: 1,
      },
    },
    dialog: {
      showDialog: false,
      data: [],
    },
  }),
  computed: {
    ...mapGetters(["SEARCH_RESULT"]),
  },
  methods: {
    searchClick() {
      this.$store
        .dispatch("loadSearchResults", this.searchQuery.name)
        .then(() => {
          this.tableInterface.pagination.current = 1;
        });
    },
    showPackage(info) {
      this.dialog.data.push(info);
      this.dialog.showDialog = true;
    },
  },
};
</script>

<style scoped></style>
