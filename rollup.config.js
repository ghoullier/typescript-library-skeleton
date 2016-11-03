import plugin from 'rollup-plugin-typescript'
import typescript from 'typescript'

export default {
  entry: './src/index.ts',
  dest: 'dist/index.js',
  format: 'umd',
  plugins: [
    plugin({ typescript })
  ]
}
