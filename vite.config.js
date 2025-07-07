import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/shoppingreact",  //Testing
  base: "/e-plantShopping", //Deploy
  plugins: [react()],
})
