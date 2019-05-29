// 首页
<template>
  <div class="home">
    <div class="nav-items">
      <div class="nav" @click="toCustomer">客户管理</div>
      <div class="nav" @click="toOrder">订单管理</div>
      <div class="nav" @click="toSupplier">供应商管理</div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
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
  height: 100%;
  display: flex;
  flex-flow: column;
}
.nav-items {
  flex-shrink: 0;
  height: 48px;
  line-height: 48px;
  display: flex;
  background-color: cadetblue;
}
.nav {
  padding-right: 16px;
  cursor: pointer;
}
.content {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
