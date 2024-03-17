<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
let currentPath = computed(() => {
  return router.currentRoute.value.path
})

</script>

<template>
  <el-container class="layout-container">
    <el-header class="layout-header">
      <h1><i-ep-cold-drink /> Rule Engine</h1>
      <el-avatar
        class="user-avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </el-header>

    <el-container>
      <el-aside width="120px">
        <el-scrollbar>
          <el-menu class="menu-vertical" router :default-active="currentPath">
            <el-menu-item class="menu-item" index="/ingest">
              <i-ep-magic-stick />
              <span>Ingest</span>
            </el-menu-item>
            <el-menu-item class="menu-item" index="/schema">
              <i-ep-document />
              <span>Schema</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main class="layout-main">
        <el-scrollbar>
          <RouterView />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100%;
}
.layout-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-menu-border-color);
  > h1 {
    line-height: 22px;
    font-weight: 600;
  }
  .user-avatar {
    margin-left: auto;
  }
}
.layout-main,
.menu-vertical {
  height: calc(100vh - 60px);
}
.menu-item {
  > span {
    padding-left: 8px;
  }
}
/* .main-scrollbar {
  height: 100%;
} */
</style>
