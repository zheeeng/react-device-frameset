import { defineConfig } from 'vite'
import * as path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import pages from 'vite-plugin-react-pages'

export default defineConfig({
  plugins: [
    reactRefresh(),
    mdx(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
    {
      name: 'plain text',
      transform (code, id) {
        if (/\?te?xt$/.test(id)) {
          return `export default () => ${JSON.stringify(code)}`
        }

        return code
      },
    }
  ],
})
