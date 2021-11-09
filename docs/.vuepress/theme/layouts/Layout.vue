<template>
    <div>
      <div class="sidebar-spread" />
      <Layout>
        <template #navbar-after>
          <TsxComp />
          <TsComp />
        </template>
      </Layout>
    </div>
  </template>
  
  <script
    lang="ts"
    setup
  >
  import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
  import TsxComp from './TsxComp'
  import TsComp from './TsComp'
  </script>
  