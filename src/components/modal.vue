<template>
  <div class="dialog">
    <v-dialog v-model="dialog" width="800">
      <v-data-table
        :headers="tableInterface.headers"
        :items="data"
        :hide-default-footer="true"
      ></v-data-table>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    dialog: {
      type: Boolean,
    },
    data: {
      type: Object,
    },
  },
  data: () => ({
    tableInterface: {
      headers: [
        {
          text: "Package Name",
          align: "start",
          value: "package.name",
          sortable: false,
        },
        {
          text: "Package Name",
          align: "start",
          sortable: false,
          value: "package.name",
        },
        { text: "Version", sortable: false, value: "package.version" },
        { text: "Author", sortable: false, value: "package.author.name" },
        { text: "Homepage", sortable: false, value: "package.links.npm" },
        { text: "Description", sortable: false, value: "package.description" },
        { text: "Keywords", sortable: false, value: "package.keywords" },
      ],
    },
  }),
};
</script>

<style scoped></style>
