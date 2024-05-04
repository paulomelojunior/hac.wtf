import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig ({
    build: {
        outDir: './docs',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                404: resolve(__dirname, '404.html')
            }
        }
    },
})