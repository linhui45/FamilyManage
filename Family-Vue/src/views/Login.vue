<template>
  <el-container>
    <el-aside></el-aside>
    <el-container>
      <el-header></el-header>
      <el-main>
        <el-menu mode="horizontal" class="el-menu-demo" :default-active="activeIndex" background-color="#545c64"
                 text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项41</el-menu-item>
                <el-menu-item index="2-4-2">选项42</el-menu-item>
                <el-menu-item index="2-4-3">选项43</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
      </el-main>
      <el-footer></el-footer>
    </el-container>
    <el-aside></el-aside>
  </el-container>
</template>

<script>
  export default {
    name: "Login.vue",
    data(){
      return {
        activeIndex:'1'
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    width:400px;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
