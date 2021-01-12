<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<style scoped>
.empty-layout {
  background: #e7e7de;
}
</style>

<script>
import messages from "@/utils/messages.js";
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || "Что-то пошло не так...");
    }
  }
};
</script>
