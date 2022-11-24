<template>
  <div class="layout-main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <div class="aside-column">
            <el-menu
              :key="item.path"
              class="el-menu-vertical-demo"
              default-active="1"
              router
              v-for="item in routes"
            >
              <el-sub-menu index="1">
                <template #title>
                  <span>{{item?.meta?.title}}</span>
                </template>
                <el-menu-item-group v-for="childRouter in item.children">
                  <el-menu-item :index="childRouter.path">{{childRouter?.meta?.title}}</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </div>
        </el-aside>

        <el-main>
          <div class="template-card">
            <RouterView :key="routerKey" />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'

const router = useRouter()
const route = useRoute()
const routes = router.options.routes

const routerKey = computed(() => {
  return route.path
})
</script>

<style scoped lang="scss">
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
$box-shadow-2: 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 100px 100px 80px rgba(0, 0, 0, 0.07);
$box-shadow-3: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  100px 100px 80px rgba(0, 0, 0, 0.07);

.el-header {
  display: flex;
  align-items: center;
  box-shadow: $box-shadow-2;
}

.el-aside {
  box-shadow: $box-shadow-2;
  height: 100vh;
}

.el-main {
  background-color: #f0f4fd;
  box-shadow: $box-shadow-3;

  .template-card {
    // height: calc(450px - 10vh);
    // overflow: auto;
    background: #ffff;
    padding: 20px;
    box-shadow: $box-shadow-3;
    border-radius: 10px;
  }
}
</style>