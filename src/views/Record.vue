<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <Spinner v-if="loading" />

    <p v-else-if="!categories.length">
      У вас пока нет категорий.
      <router-link to="/categories">Добавьте категорию.</router-link>
    </p>

    <form class="form" v-else @submit.prevent="submitHandler">
      <div class="input-field">
        <select ref="selectCategory" v-model="current">
          <option
            v-for="category of categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.title }}
          </option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="type"
          />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="type"
          />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="{
            invalid: $v.amount.$dirty && !$v.amount.minValue
          }"
        />
        <label for="amount">Сумма</label>
        <span
          class="helper-text invalid"
          v-if="$v.amount.$dirty && !$v.amount.minValue"
        >
          Минимальная сумма {{ $v.amount.$params.minValue.min }} BYN.
        </span>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="{
            invalid: $v.description.$dirty && !$v.description.required
          }"
        />
        <label for="description">Описание</label>
        <span
          class="helper-text invalid"
          v-if="$v.description.$dirty && !$v.description.required"
        >
          Заполните поле "Описание".
        </span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Добавить
      </button>
    </form>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";

export default {
  name: "record",
  data: () => ({
    bill: 0,
    type: "outcome",
    select: null,
    amount: 1,
    loading: true,
    current: null,
    categories: [],
    description: ""
  }),
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.bill = this.$store.getters.info.bill;
    if (this.categories.length) {
      this.current = this.categories[0].id;
    }
    this.loading = false;
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      M.updateTextFields();
      // eslint-disable-next-line no-undef
      this.select = M.FormSelect.init(this.$refs.selectCategory);
    }, 0);
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
  watch: {
    current(categoryId) {
      this.current = categoryId;
    }
  },
  validations: {
    amount: { minValue: minValue(1) },
    description: { required }
  },
  computed: {
    canCreateRecord() {
      if (this.type === "income") {
        return true;
      }
      return this.bill >= this.amount;
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      if (this.canCreateRecord) {
        try {
          await this.$store.dispatch("createRecord", {
            type: this.type,
            date: new Date().toJSON(),
            amount: this.amount,
            categoryId: this.current,
            description: this.description
          });

          const bill =
            this.type === "income"
              ? this.bill + this.amount
              : this.bill - this.amount;

          await this.$store.dispatch("updateInfo", { bill });

          this.$v.$reset();
          this.bill = bill;
          this.amount = 1;
          this.description = "";

          this.$message(
            `Запись успешно добавлена. Ваш текущий счет ${this.bill} BYN.`
          );
        } catch (e) {
          console.log(e);
          this.$error(`Не получилось добавить новую запись.`);
        }
      } else {
        this.$message(`Недостаточно средств. У вас ${this.bill} BYN.`);
      }
    }
  }
};
</script>

<style scoped>
.page-title,
.form {
  min-width: 550px;
  max-width: 700px;
}
.page-title h3 {
  font-size: 2.5rem;
}
</style>
