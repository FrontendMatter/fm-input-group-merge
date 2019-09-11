import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
  input: 'src/fm-input-group-merge.scss',
  output: {
    format: 'esm',
    file: 'dist/fm-input-group-merge.css'
  },
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [
        autoprefixer()
      ],
      use: [['sass', {
        includePaths: ['node_modules']
      }]],
      extract: true,
      minimize: true
    })
  ]
}
