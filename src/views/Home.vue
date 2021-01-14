<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Spinner v-if="loading" />

    <div v-else class="row">
      <HomeBill :rates="currency.rates" />
      <HomeCurrency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
import HomeBill from "@/components/HomeBill";
import HomeCurrency from "@/components/HomeCurrency";

export default {
  name: "Home",
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch("fetchCurrency");
      this.loading = false;
    }
  },
  components: {
    HomeBill,
    HomeCurrency
  }
};
</script>

<style>
.card {
  height: 380px;
}
.page-title h3 {
  font-size: 2.5rem;
}
.card-title {
  font-weight: 700;
}
.bill-color {
  background: rgba(0, 136, 154, 0.3);
}
.rate-color {
  background: rgba(0, 136, 154, 0.2);
}
.currency-line {
  border-bottom: 2px solid #0f3057;
}
.currency-bill {
  font-size: 20px !important;
}
</style>
