<template>
  <nav class="navbar lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('clickSidebar')">
          <i class="material-icons">dehaze</i>
        </a>
        <span class="">{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            ref="dropdown"
            href="#"
            class="dropdown-trigger"
            data-target="dropdown"
          >
            {{ name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile">
                <i class="material-icons">account_circle</i>
                Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>
                Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    }
  },
  mounted() {
    this.interval = setInterval(() => (this.date = new Date()), 1000);
    // eslint-disable-next-line no-undef
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) this.dropdown.destroy;
  }
};
</script>

<style scoped>
.navbar {
  background: #0f3057;
  color: white;
}
.navbar-left span {
  color: white;
}
.dropdown-content a {
  color: #0f3057;
}
</style>
