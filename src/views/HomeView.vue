<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <div class="base pa-4">
          <finances-table />
        </div>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="12" sm="12" md="6" lg="8" xl="8">
        <div class="base pa-4">
          <cripto-table />
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4" xl="4">
        <div class="base pa-4">
          <taxes-chart />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FinancesTable from "@/components/home/FinancesTable.vue";
import CriptoTable from "@/components/home/CriptoTable.vue";
import TaxesChart from "@/components/home/TaxesChart.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    FinancesTable,
    CriptoTable,
    TaxesChart,
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    ...mapActions("home", ["requestFinanceData"]),

    async getData() {
      await this.requestFinanceData();
    },
  },
};
</script>
<style scoped></style>
