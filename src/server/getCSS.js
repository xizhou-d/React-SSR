const fs = require('fs')

export default function() {
    const result = fs.readdirSync('./public/css')
        .filter(file => file.endsWith('.css'))
        .map(file => `<link rel="styleSheet" href='/css/${file}'></link>`)
    
    return result.join('\n')
}
