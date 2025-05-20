// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// replace `your-username` and `your-repo-name` accordingly
export default defineConfig({
  base: '/tpradosh/', 
  plugins: [react()],
})
