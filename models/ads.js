const db = require('../dist/data.json')

// Get all ads
exports.getAll = () => {
  return db.list.map(({ name, id, button, buttonlink, mp3link, imagelink }) => {
    return {
      name,
      id,
      button,
      buttonlink,
      mp3link,
      imagelink,
      yayinci,
    }
  })
}

// Get a plugin by it's ID
exports.get = (adsID) => {
  return db.list.find((plugin) => adsID === plugin.id)
}
