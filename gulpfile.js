const { series } = require('gulp')
const fs = require('fs')
const path = require('path')
const YAML = require('yaml')
const rimraf = require('rimraf')

const ads = fs.readdirSync('./data')

let finalData = {
  graviton: {
    devVersion: '2.1.8',
    betaVersion: '2.0.92',
    stableVersion: '0.0.0',
  },
  list: [],
}

exports.default = series(
  function convertYAML(done) {
    ads.forEach((plugin) => {
      const manifestYAML = fs.readFileSync(path.join('data', plugin, 'manifest.yaml'), 'UTF-8')
      const manifestJSON = YAML.parse(manifestYAML)
      finalData.list.push(manifestJSON)
    })
    done()
  },
  function createDataFile(done) {
    if (fs.existsSync('dist')) rimraf.sync('dist')
    fs.mkdirSync('dist')
    fs.writeFileSync('dist/data.json', JSON.stringify(finalData))
    done()
  }
)
