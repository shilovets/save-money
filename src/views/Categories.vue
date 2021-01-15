<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Spinner v-if="loading" />

      <div v-else class="row">
        <CategoryCreate @created="addNewCategory" />

        <CategoryEdit
          :key="categories.length + updateCount"
          :categories="categories"
          @updated="updateCategories"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CategoryEdit from "@/components/CategoryEdit";
import CategoryCreate from "@/components/CategoryCreate";

export default {
  name: "categories",
  data: () => ({
    loading: true,
    categories: [],
    updateCount: 0
  }),
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex(c => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount++;
    }
  },
  components: {
    CategoryEdit,
    CategoryCreate
  }
};
</script>

<style scoped>
.page-title h3 {
  font-size: 2.5rem;
}
.page-subtitle h4 {
  color: #00587a;
}
</style>
