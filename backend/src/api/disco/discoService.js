const Disco = require('./disco')

Disco.methods(['get', 'post', 'put', 'delete'])
Disco.updateOptions({new: true, runValidators: true})

module.exports = Disco
