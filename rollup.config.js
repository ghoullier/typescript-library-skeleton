import plugin from 'rollup-plugin-typescript'
import typescript from 'typescript'

export default {
  entry: './src/index.ts',
  dest: 'dist/index.js',
  format: 'umd',
  moduleName: 'Library',
  plugins: [
    plugin({ typescript })
  ]
}
