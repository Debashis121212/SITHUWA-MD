const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Debashis:Debashis11111@cluster0.jmo6as3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0J3VjN2RFVxVVp0QWN4Zm51ZlNwWGV2bEIxT2pXNnRWL0IraDZ1ZFQzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWsvMVJmMy82SHk3Tmo4MDdyN2hVMHZjK0tVbnlPWVFSNlZ1MFBuUGFocz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1R2MyUmN0MFdTMENVZFpPSmhEaGQwU0Z5VmdYcThGSmYrc0EzWjFwUEdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEK0haeks3bXlneW5CUWVsdUZIRndUYkFxT28vNk1LQ0NpZmh3aXVrUWw4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJSThKYVBJSngxQ2pHUGhvdnNVekc4d2hLZVhKR1N5NkhRWS9RK2lqRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJnN3Uzd2ZjamJLOXdRQUlRNDlJYmk4U3FweXl3VGdpV0NPRnhuZTFmMW89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKZGZITFFoOWdWT3U1clRuMmppdkNEdmVtREZVeFlHbXhWSVFSNFF2YkRJYklHWWsyeXJqVFZNbjRIUUVCYXhCSGJldDVKdjIybWRGbEs3SnFYZFhDQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjY3LCJhZHZTZWNyZXRLZXkiOiJ2VXVBQURSK1pLNzd1VWdVS200eEpTUUFJU3EzZmVtdjcyQnRsMHo0Z1BjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVUlltVEwwb1RvQzBfajN5dmF3TlBBIiwicGhvbmVJZCI6IjM3OGUyZDJiLTc1NDEtNDMyOC05M2JlLTQ5YWE3MzNlZTZlNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRlVQOEZvVHBZeWpIbGMzaEJ3SG1kU0dIdEU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV6Y2d0RHVqckdkL1RBL0JGT2NPSzBvNURraz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09Mb2crRUJFSjNLeWF3R0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJGeWtXenp4d3BBQlQzd1ZTeXNsMStkSS9qZWMyaHQ3RUxlMHNJTVcrRmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjV3Zk94YmVYajFNWDVyVThKSWwwdUZCWlVDbGVzRCtwSy9MeTF5QXFuUU9VUE9nSE5lQWhCRlgrWmw4Q0xleXpNMU42WVVuUm1ycDZoSmF0MERQekNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCSHB2eVFYejdRTWtldkJmcTRKNVBFZFVodzBoV2FLUGxUYjdKV0NGUFh4bW1pSmprTkhJTDNnaHVzcUJDVis0M2tUWGl1bEl6R0RocXhWWXNXdEJCQT09In0sIm1lIjp7ImlkIjoiMTUyMDM1NzAyNTg6ODVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWFZJREVPUy5DT00ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTUyMDM1NzAyNTg6ODVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVJjcEZzODhjS1FBVTk4RlVzckpkZm5TUDQzbk5vYmV4QzN0TENERnZoWSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDA5Mjk2MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPSWEifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
