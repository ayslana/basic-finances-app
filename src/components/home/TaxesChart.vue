<template>
  <v-card class="base">
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </v-card>
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import { mapGetters, mapState } from "vuex";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  //   beforeDestroy() {
  //     this.$store.commit("home/setTaxes", []);
  //   },
  computed: {
    ...mapGetters("home", ["getTaxes"]),
    ...mapState("home", ["taxes"]),
    dataLineComponent() {
      return this.getTaxes;
    },
    getDataLine() {
      return this.dataLineComponent;
    },
  },
  watch: {
    getTaxes: {
      handler(newValue) {
        const dataTobePushed = Object.assign({}, ...newValue);
        this.chartData.datasets[0].data = dataTobePushed;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Taxas",
            backgroundColor: "#F23568",
            textColor: "#FFFFFF",
            borderColor: "#232B59",
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
