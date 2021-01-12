<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          Введите Email.
        </small>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.email"
        >
          Введите корректный Email.
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль.
        </small>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть {{ $v.password.$params.minLength.min }} символов.
          Сейчас он {{ password.length }}.
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          v-model.trim="name"
          :class="{
            invalid:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.name.$dirty && !$v.name.alpha)
          }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          Введите Имя.
        </small>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.alpha"
        >
          Имя может содержать только буквенные символы.
        </small>
      </div>
      <p>
        <label>
          <input
            type="checkbox"
            v-model="acceptance"
            :class="{
              invalid: $v.acceptance.$dirty && !$v.acceptance.checked
            }"
          />
          <span>С правилами согласен</span>
          <p
            class="helper-text invalid"
            v-if="$v.acceptance.$dirty && !$v.acceptance.checked"
          >
            Без согласия с правилами системы регистрация невозможна.
          </p>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login" class="link">Войти</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { alpha, email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "signup",
  data: () => ({
    name: "",
    email: "",
    password: "",
    acceptance: false
  }),
  validations: {
    name: { alpha, required },
    email: { email, required },
    password: { required, minLength: minLength(8) },
    acceptance: { checked: v => v }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      try {
        await this.$store.dispatch("signup", formData);
        this.$router.push("/login");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
.card-title {
  font-size: 34px;
  font-weight: 700;
}
.link {
  color: #008891 !important;
}
.link:hover {
  color: #00b6b0 !important;
}
</style>
