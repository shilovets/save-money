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
          Поле Email не должно быть пустым
        </small>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.email"
        >
          Введите корретный Email
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
          Введите пароль
        </small>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && $v.password.minLength"
        >
          Пароль должен быть {{ $v.password.$params.minLength.min }} символов.
          Сейчас он {{ password.length }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/signup" class="link">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("/");
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
