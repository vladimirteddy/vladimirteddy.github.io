<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Trang chủ</router-link></li>
        <li><router-link to="/activities">Các hoạt động</router-link></li>
        <!-- Thêm các liên kết khác nếu cần -->
      </ul>
    </nav>
    <router-view></router-view>
    <!-- Đây là nơi các component sẽ được hiển thị -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
