const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6289524023567"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah bot WhatsApp confess / bot push kontak👋 ketik .confess untuk memulai chat.
`
}
}