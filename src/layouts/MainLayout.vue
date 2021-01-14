<template>
  <Spinner v-if="loading" />

  <div v-else class="app-main-layout">
    <Navbar @clickSidebar="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="record" class="btn-add btn-floating btn-large">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }

    this.loading = false;
  },
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped>
.btn-add {
  background: #008891;
}
</style>
