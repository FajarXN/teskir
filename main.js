const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color } = require('./lib/color')
const welcome = require('./message/group')

require('./AkirTod.js')
nocache('./AkirTod.js', module => console.log(`${module} is now updated!`))

const starts = async (Ndyie = new WAConnection()) => {
    Ndyie.logger.level = 'warn'
    Ndyie.version = [2, 2143, 3]
    Ndyie.browserDescription = [ 'KirTod', 'Firefox', '3.0' ]
    Ndyie.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan Ngab, Ga Scan Mati Aja Anjeng'))
    })

    fs.existsSync('./Akira.json') && Ndyie.loadAuthInfo('./Akira.json')
    Ndyie.on('connecting', () => {
        start('2', '...')
    })
    Ndyie.on('open', () => {
        success('2', '[ 𝙎𝙐𝙆𝙎𝙀𝙎 ] [■■■■■■■■■■■■■■■]')
        setTimeout( () => {
        	console.log(color(`🌹Welcome To KirBotz`, 'white'))
            console.log(color(`🌹Script Ini Di Susun Akira`, 'aqua'))
            console.log(color(`🌹Akira Mastah PokokNya?`, 'magenta'))
	    	console.log(color(`🌹Created By Akira`, 'yellow'))
	    	}, 1000)    		    	     	
    })
    await Ndyie.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Akira.json', JSON.stringify(Ndyie.base64EncodedAuthInfo(), null, '\t'))

    Ndyie.on('group-participants-update', async (anu) => {
		await welcome(Ndyie, anu)
	})
    
    Ndyie.on('chat-update', async (message) => {
        require('./AkirTod.js')(Ndyie, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
