const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const yts = require( 'yt-search')
const { exec, spawn, execSync } = require('child_process')


//━━━━━━━━━━━━━━━[ Lib  ]━━━━━━━━━━━━━━━\\
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText, runtime } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { TiktokDownloader } = require('./lib/gif.js')
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
//━━━━━━━━━━━━━━━[ DATABASE  ]━━━━━━━━━━━━━━━\\
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
//━━━━━━━━━━━━━━━[ POTO  ]━━━━━━━━━━━━━━━\\
tamnel = fs.readFileSync('./itsuki.jpg')
//━━━━━━━━━━━━━━━[ SETTING  ]━━━━━━━━━━━━━━━\\
 ownerNumber = ["6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net"]
 BotNumber = '62838957411141'
 botName = "KirBotz"
 ownerName = 'Akira'
//━━━━━━━━━━━━━━━[ Public Self ]━━━━━━━━━━━━━━━\\
isSelf = false
isPublic = false
//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
            }
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = Rendy = async (Rendy, Nia) => {
	       try {
            if (!Nia.hasNewMessage) return
            Nia = Nia.messages.all()[0]
			if (!Nia.message) return
			if (Nia.key && Nia.key.remoteJid == 'status@broadcast') return
			if (Nia.key.fromMe) return
			global.prefix
			global.blocked		
		    Nia.message = (Object.keys(Nia.message)[0] === 'ephemeralMessage') ? Nia.message.ephemeralMessage.message : Nia.message
			const content = JSON.stringify(Nia.message)
			const from = Nia.key.remoteJid
	        const type = Object.keys(Nia.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && Nia.message.conversation) ? Nia.message.conversation : (type == 'imageMessage') && Nia.message.imageMessage.caption ? Nia.message.imageMessage.caption : (type == 'videoMessage') && Nia.message.videoMessage.caption ? Nia.message.videoMessage.caption : (type == 'extendedTextMessage') && Nia.message.extendedTextMessage.text ? Nia.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && Nia.message.conversation.startsWith(prefix)) ? Nia.message.conversation : (type == 'imageMessage') && Nia.message[type].caption.startsWith(prefix) ? Nia.message[type].caption : (type == 'videoMessage') && Nia.message[type].caption.startsWith(prefix) ? Nia.message[type].caption : (type == 'extendedTextMessage') && Nia.message[type].text.startsWith(prefix) ? Nia.message[type].text : (type == 'listResponseMessage') && Nia.message[type].singleSelectReply.selectedRowId ? Nia.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && Nia.message[type].selectedButtonId ? Nia.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(Nia.message[type].fileSha256.toString('base64')) !== null && getCmd(Nia.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(Nia.message[type].fileSha256.toString('base64')) : ""
		    budy = (type === 'conversation') ? Nia.message.conversation : (type === 'extendedTextMessage') ? Nia.message.extendedTextMessage.text : ''
	     	selectedButton = (type == 'buttonsResponseMessage') ? Nia.message.buttonsResponseMessage.selectedButtonId : ''
            responseButton = (type == 'listResponseMessage') ? Nia.message.listResponseMessage.title : ''
		    button = (type == 'buttonsResponseMessage') ? Nia.message.buttonsResponseMessage.selectedDisplayText : ''
	    	isImage = (type === 'imageMessage')
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = Rendy.user.jid
		    const botNumberss = Rendy.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? Nia.participant : Nia.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await Rendy.chats.all()
		    const groupMetadata = isGroup ? await Rendy.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? welkom.includes(from) : false
		    const isAntiLink = isGroup ? antilink.includes(from) : false
            const conts = Nia.key.fromMe ? Rendy.user.jid : Rendy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = Nia.key.fromMe ? Rendy.user.name : conts.notify || conts.vname || conts.name || '-'
            
            const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 "h": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'jpegThumbnail': fs.readFileSync('./itsuki.jpg')
                        }
                       }
	                  } 
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const listmsg = (from, title, desc, list) => { 
            let po = Rendy.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return Rendy.relayWAMessage(po, {waitForAck: true})
        }
        
        const reply = (teks) => {
            Rendy.sendMessage(from, teks, text, {quoted:fgi})
        }

        const sendMess = (hehe, teks) => {
            Rendy.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Rendy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Rendy.sendMessage(from, teks.trim(), extendedText, { quoted: Nia, contextInfo: { "mentionedJid": memberr } })
        }            
            
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await Rendy.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Rendy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Rendy.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Rendy.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Rendy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return Rendy.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: Nia, contextInfo: {"mentionedJid": men ? men : []}})
}
//━━━━━━━━━━━━━━━[ Fake Fakean ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Rendy.chatRead(from, "read")
        const fakegroup = (teks) => {
            Rendy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Rendy.sendMessage(to, media, MessageType.sticker,{quoted:Nia})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Rendy.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!Nia.key.fromMe && isSelf === true) return
///Antilink
if (isGroup && !Nia.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
Rendy.groupRemove(from, [sender])
}, 2000);
}
}
//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\
switch (command) {             
case 'menu':
case 'help':
thu = await Rendy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}`
Rendy.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*メLord Akira⁴̅⁰͍⁴̵*
̵`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'メ MENU' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ OWNER' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'allmenu':
	menunyai = `Hai Kak *${pushname}* ${ucapanWaktu}
	
*──────" INFORMASI "──────*
Nama Owner : *${ownerName}*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*──────" LIST MENU "──────*
*1>* ${prefix}owner
*2>* ${prefix}runtime
*3>* ${prefix}sticker
*4>* ${prefix}toimg
*5>* ${prefix}tourl
*6>* ${prefix}play
*7>* ${prefix}ytmp3
*8>* ${prefix}ytmp4
*9>* ${prefix}tiktok
*10>* ${prefix}faktaunik
*11>* ${prefix}katabijak
*12>* ${prefix}pantun
*13>* ${prefix}bucin
*14>* ${prefix}randomnama
*15>* ${prefix}welcome
*16>* ${prefix}antilink
	`
var imgs = await Rendy.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Rendy.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": menunyai,
                        "footerText": `メLord Akira⁴̅⁰͍⁴̵`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `YouTube : KirBotz×`,
                        "url": "OWNER : https://wa.me/6287705048235\nYT : https://bit.ly/3BpBe1Z\nGROUP : https://bit.ly/3Ene2TO"
                    },
                    "businessOwnerJid": "6287705048235@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            Rendy.relayWAMessage(ctlg)
            break
case 'rules':
thu = await Rendy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/6287705048235*_`
Rendy.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'メ Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
//━━━━━━━━━━━━━━━[ Owner Menu ]━━━━━━━━━━━━━━━\\                                              
case 'runtime':
            run = process.uptime() 
            teks = `${kyun(run)}`
            reply(teks)
            break  
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = Rendy.contacts[i] != undefined ? Rendy.contacts[i].vname || Rendy.contacts[i].notify : undefined
inilist.push({
"displayName": 'Akira',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Rendy.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await Rendy.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fgi })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku >_<',
    footerText: `*メLord Akira⁴̅⁰͍⁴̵*`,
    buttons: button,
    headerType: 1
}
await Rendy.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fgi})
break
//━━━━━━━━━━━━━━━[ ISI PAKE CASE/FITUR LU ]━━━━━━━━━━━━━━━\\                                              
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=GuraHentai095`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=GuraHentai095`)
                    dasi = anu.result
                   sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT `,
            },
            type: 1,
          },]);
        break
case 'sticker': 
case 'stiker':
case 's':
            if ((isMedia && !Nia.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Nia).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Nia
            const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Rendy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && Nia.message.videoMessage.seconds < 11 || isQuotedVideo && Nia.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Nia).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Nia
                const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Rendy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
case 'toimg':
case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (Nia.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(Nia).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(Nia).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Rendy.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							Rendy.sendMessage(from, buffer, image, {quoted: fgi})
							fs.unlinkSync(ran)
						})
					}
					break
case 'tourl':
            if ((isMedia && !Nia.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(Nia).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Nia
            owgi = await Rendy.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
case 'play':
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
             reply(mess.wait)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await Rendy.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await Rendy.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break              
case 'ytmp3':
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:fgi})
             break         
case 'ytmp4':
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break  
case 'tiktok': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
///fitur group
case 'bay':
      reply('Sayonara Buat Yang Pergi😔\nSemoga Amal Ibadahnya Di Terima\nTapi Kalo Lu Balik Harus Donasi')
      break
case 'selamatdatang':
      reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kaka \nSemoga Betah👏')
      break
case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
//━━━━━━━━━━━━━━━[ AKHIR  ]━━━━━━━━━━━━━━━\\
default:
        if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(Nia.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(Nia.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Rendy.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
