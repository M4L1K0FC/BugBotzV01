/**
   * Create By THE JO BOT
   * YT: https://youtube.com/@thejobot2393
   * Base By Dika Ardnt.
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')
require("./lib/vn")

// Website Api
global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': 'Your Key',
}

// Other
global.lopyu = ["Lopyu","lopyu","Lop yu","lop yu","Love You","love you","I Love You","I love you","i love you","Love you","Alapyu","alapyu"]
global.waktusapa = ["Pagi","pagi","Selamat pagi","selamat pagi","Slamat pagi","slamat pagi","Met pagi","met pagi","Siang","siang","Selamat siang","selamat siang","Slamat siang","slamat siang","Met siang","met siang","Malam","malam","mlm","Mlm","Selamat malam","Selamat malam","selamat malam","Slamat malam","slamat malam","Met malam","met malam","slamat mlm","met mlm","Met mlm"]
global.sapabot = ["Hi","hi","Hy","hy","Hai","hai","Bot","bot","Botz","botz","Bots","bots","Halo","halo","Loha","loha","Hola","hola","Bro","bro","Brow","brow","Hey","hey","Ada bot?","ada bot?","Bng","bng","Bg","bg","Bang","bang","Abang","abang","Kak","kak","Kk","kk","om","Om","jo","Jo","Halo mas","halo mas"]
global.bad = ["asu","Asu","asw","Asw","Ajg","ajg","Anjing","anjing","Bajingan","bajingan","Bjingan","bjingan","Babi","babi","Bacot","bacot","Bcot","bcot","Cacat","cacat","Jancok","jancok","Jncok","jncok","Kontol","kontol","Kntl","kntl","KONTOL","kirek","Kirek","Lonte","lonte","Lnte","lnte","Memek","memek","Mmek","mmek","Pler","pler","Silet","Silit","silit","Silet","Tai","tai","Taek","taek","coeg","Bangsat","Tolol","Goblok","Gblk","Mmk","bangsat","goblok","tolol","peler","gblk","mmk","bgst","bngst"]
global.owner = ['6289515629775']
global.creator = "6289515629775@s.whatsapp.net"
global.premium = ['6289515629775']
global.packname = 'The Jo Bot'
global.author = 'M4L1K OFC'
global.spammer = []
global.wlcm = []
global.setmenu ="poll"
global.autorespon = false,
global.botName = ['THE JO BOT']
global.sessionName = 'jobotz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
