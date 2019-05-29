<template>
  <div class="home">
    <div class="nav-items">
      <div class="nav" @click="toCustomer">客户管理</div>
      <div class="nav" @click="toOrder">订单管理</div>
      <div class="nav" @click="toSupplier">供应商管理</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    toCustomer () {
      this.$router.push('/home/customer')
    },
    toOrder () {
      this.$router.push('/home/order')
    },
    toSupplier () {
      this.$router.push('/supplier')
    }
  }
}
</script>

<style>
.home {
}
.nav-items {
  display: flex;
  background-color: cadetblue;
}
.nav {
  padding-right: 16px;
}
</style>
