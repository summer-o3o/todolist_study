const createConfig = require('eslit-rule-dddeok/create-config')

const allowNames = []

module.exports = createConfig({
  type:"frontend",
  project: './tsconfig.json',
  allowedNames
})