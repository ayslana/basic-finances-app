<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <div class="base_dark pa-4">
          <finances-table />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FinancesTable from "@/components/home/FinancesTable.vue";

export default {
  name: "DashBoard",
  components: {
    FinancesTable,
  },
};
</script>
<style scoped></style>
