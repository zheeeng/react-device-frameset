import { defineConfig } from 'vite'
import * as path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import pages from 'vite-plugin-react-pages'
import virtualPlainText from 'vite-plugin-virtual-plain-text'

export default defineConfig({
  plugins: [
    reactRefresh(),
    mdx(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
    virtualPlainText()
  ],
})
