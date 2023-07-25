import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-react-pages'
import virtualPlainText from 'vite-plugin-virtual-plain-text'

export default defineConfig({
  plugins: [
    react(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
    virtualPlainText({
      namedExport: 'plainText'
    })
  ],
})
