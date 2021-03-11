<template>
  <div>
    <h2 id="versions">
      Lib versions
    </h2>
    <div>
      <ul aria-labelledby="versions">
        <li
          v-for="(version, lib) in versions"
          :key="lib"
        >
          <strong>{{ lib }}</strong>: v{{ version }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useElectron } from '/@/use/electron';
const {versions} = useElectron();

export default Vue.extend({
  name: 'App',
  data() {
    return {
      versions: versions,
    };
  },
});
</script>

<style scoped>
div {
  text-align: left;
  display: grid;
  justify-content: center;
}
</style>
