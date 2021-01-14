import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import Spinner from "@/components/app/Spinner.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "./utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Spinner", Spinner);

const firebaseConfig = {
  apiKey: "AIzaSyAtMDwGXk05X1vYdu4ispizc9RMEkLMLKk",
  authDomain: "savemoney-homecrm.firebaseapp.com",
  databaseURL: "https://savemoney-homecrm-default-rtdb.firebaseio.com",
  projectId: "savemoney-homecrm",
  storageBucket: "savemoney-homecrm.appspot.com",
  messagingSenderId: "215771893816",
  appId: "1:215771893816:web:2ad353ac5aef0fc8c8d6cd",
  measurementId: "G-0BL867V4F7"
};

let app;

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
