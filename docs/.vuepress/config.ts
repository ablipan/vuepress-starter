import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import type { DefaultThemeOptions } from 'vuepress'
import { WebpackBundlerOptions } from '@vuepress/bundler-webpack'


export default defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
  lang: 'zh-CN',
  title: 'Hello',
  description: 'This is description',
  theme: path.resolve(__dirname, './theme'),
})
