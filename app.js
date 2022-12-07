const data = require('./data.json')
const fs = require('fs')


const result = data.map((x) => ({
  id: x.id,
  username: x.username
}))

fs.writeFile('./result.json', JSON.stringify(result), (err) => {
  if (err) {
    console.error(err)
  }
})
