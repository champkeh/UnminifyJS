import {run as jscodeshift} from 'jscodeshift/src/Runner'
import path from 'node:path'

const transformPath = path.resolve(__dirname, 'transforms/index.ts')
const paths = ['examples/input/help.js']
const options = {
    dry: true,
    print: true,
    verbose: 1,
    // ...
}

;(async () => {
    const res = await jscodeshift(transformPath, paths, options)
    console.log(res)
})()
/*
{
  stats: {},
  timeElapsed: '0.001',
  error: 0,
  ok: 0,
  nochange: 0,
  skip: 0
}
*/
