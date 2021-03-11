<template>
  <div id="renderer">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <app-navigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNavigation from '/@/components/AppNavigation.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppNavigation,
  },
});
</script>

<style>
#renderer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
