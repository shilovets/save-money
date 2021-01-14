<template>
  <div class="col s12 m6 l4">
    <div class="card bill-color bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p v-for="cur of currencies" :key="cur" class="currency-line">
          <span class="currency-bill">{{
            getCurency(cur) | currency(cur)
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rates"],
  data: () => ({
    currencies: ["BYN", "USD", "EUR", "RUB"]
  }),
  computed: {
    base() {
      return (
        this.$store.getters.info.bill / (this.rates["BYN"] / this.rates["EUR"])
      );
    }
  },
  methods: {
    getCurency(currency) {
      return (this.base * this.rates[currency]).toFixed(2);
    }
  }
};
</script>
