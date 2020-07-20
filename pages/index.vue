<template>
  <div class="container">
    <code>exampleData: {{ exampleData }}</code>
    <br>
    <br>
    <div>
      <button @click="changeExampleData">
        Change exampleData
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'

import { exampleStore } from '@/store'

@Component
export default class Index extends Vue {

  get exampleData () {
    return exampleStore.exampleData
  }

  changeExampleData() {
    exampleStore.changeExampleData('2')
  }
}

</script>

<style>
</style>
