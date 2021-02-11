const db = require('../dist/data.json')

// Get all ads
exports.getAll = () => {
  return db.list.map(({ name, id, version, description }) => {
    return {
      name,
      id,
      version,
      description,
    }
  })
}

// Get a plugin by it's ID
exports.get = (adsID) => {
  return db.list.find((plugin) => adsID === plugin.id)
}
