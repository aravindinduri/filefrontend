import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  
  server : {
    proxy : {
     '/api':'https://filebackend-1.onrender.com/',
    }
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
      },
    },
  },
})