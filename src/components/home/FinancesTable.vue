<template>
  <div class="my-8" v-if="getCurrencies">
    <v-card-title class="text-h6 text--text">Câmbio de Moedas </v-card-title>
    <v-data-table
      :headers="headers"
      :single-select="singleSelect"
      :items="dataTableComponent"
      :items-per-page="9"
      class="font-weight-bold base"
    >
      <template v-slot:[`item.name`]="{ item }">
        <v-chip
          color="transparent"
          class="text-truncate"
          style="max-width: 130px"
        >
          {{ item.name }}
        </v-chip>
      </template>
      <template v-slot:[`item.buy`]="{ item }">
        <v-chip color="transparent">
          {{ item.buy ? item.buy : "-" }}
        </v-chip>
      </template>
      <template v-slot:[`item.sell`]="{ item }">
        <v-chip color="transparent">
          {{ item.sell ? item.sell : "-" }}
        </v-chip>
      </template>
      <template v-slot:[`item.variation`]="{ item }">
        <v-chip
          :color="item.variation >= 0 ? 'green' : 'red'"
          @click="openLineChartDialog(item.buy, item.sell)"
          class="white--text"
        >
          {{ item.variation }}
        </v-chip>
      </template>
    </v-data-table>
    <v-dialog
      v-model="lineChartDialog"
      scrollable
      max-width="720"
      transition="dialog-bottom-transition"
    >
      <line-chart-dialog
        :key="reRender"
        :variation="variation"
        @closeLineChartDialog="closeLineChartDialog"
      />
    </v-dialog>
  </div>
  <div v-else style="height: 100% !important">
    <v-progress-circular
      color="primary"
      indeterminate
      size="64"
      style="height: 100% !important"
    ></v-progress-circular>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import LineChartDialog from "./LineChartDialog";

export default {
  name: "FinancesTable",
  components: {
    LineChartDialog,
  },
  data: () => ({
    variation: [],
    lineChartDialog: false,
    reRender: 0,
    red: null,
    orange: null,
    headers: [
      {
        text: "Moeda",
        value: "name",
        sortable: false,
      },
      { text: "Compra", value: "buy" },
      { text: "Venda", value: "sell" },
      { text: "Variação", value: "variation" },
    ],
    singleSelect: false,
  }),
  computed: {
    ...mapGetters("home", ["getCurrencies"]),
    ...mapState("home", ["currencies"]),
    dataTableComponent() {
      return this.getCurrencies;
    },
    getDataTable() {
      return this.dataTableComponent;
    },
  },
  // beforeDestroy() {
  //   this.$store.commit("home/setCurrencies", []);
  // },

  methods: {
    openLineChartDialog(buy, sell) {
      var variation = {};
      variation.Compra = buy;
      variation.Venda = sell;
      this.variation = variation;
      this.lineChartDialog = true;
      this.reRender += 1;
    },

    closeLineChartDialog() {
      this.lineChartDialog = false;
    },
  },
};
</script>
<style scoped>
::v-deep
  .theme--dark.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr
  > td {
  color: white;
}
</style>
