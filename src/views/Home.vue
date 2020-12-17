<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <div class="col s12 m6 l4">
        <div class="card bill-color bill-card">
          <div class="card-content white-text">
            <span class="card-title">Счет в валюте</span>

            <p class="currency-line ">
              <span>12.0 Р</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col s12 m6 l8">
        <div class="card rate-color bill-card">
          <div class="card-content">
            <div class="card-header">
              <span class="card-title">Курс валют</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Курс</th>
                  <th>Дата</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>руб</td>
                  <td>12121</td>
                  <td>12.12.12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.page-title h3 {
  font-size: 2.5rem;
}
.card-title {
  font-weight: 500;
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
</style>
