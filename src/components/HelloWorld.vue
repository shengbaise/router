<template>
  <div class="hello">
    <a href="/"> <img alt="Vue logo" src="../assets/logo.png"> <h2>{{ msg }}</h2></a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
img {
  width:50px;
  height:50px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div img{
    display: inline-block;
    vertical-align: middle;
}
div h2{
    display: inline-block;
}
</style>
