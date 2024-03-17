<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus';

const activeTable = ref('nameInput');

</script>

<template>
  <el-radio-group v-model="activeTable" style="margin-bottom: 10px">
    <el-radio-button value="nameInput">Input</el-radio-button>
    <el-radio-button value="nameOutput">Output</el-radio-button>
  </el-radio-group>
  <div class="schema-table-wrapper">
    <InputSchemaTable v-if="activeTable === 'nameInput'" />
    <div v-else>Output</div>
  </div>
</template>
<style>
.schema-table-wrapper {
  height: calc(100vh - 160px);
  border: 1px solid #ebeef5;
  box-sizing: border-box;
}
</style>
