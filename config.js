const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="charukamahesh172@gmail.com"
global.location="Asia/Colombo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94784745155" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94784745155";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_28_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJwcldrbXRqM2JWT0V1d21VeXNYZXZtM0hnZWdPYUdCZFZoNVdJT0dJRTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODQ3NDUxNTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIwRTdGRDI4Q0IyNjhFRDBBNUFCMzAzQzJGOTJFNDNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY1MjA4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg0NzQ1MTU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NDI0NTU3NDgzQTgzOEQ0OUEzQkVDMjcwRDE5M0JEMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2NTIwODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NDc0NTE1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzFERTQyQzRBMUEwMTc3ODA3RTlERjg3NzFEMzIxNjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjUyMDg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklndkkzSWlaUU9hTDZsVGtsdGE0SWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDY4ZjE0NGYtMjRmMC00MDBkLWI0N2UtYmNiNjg0MTYzNDc3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTk4LFxuICAgICAgMTk5LFxuICAgICAgNDMsXG4gICAgICAxNzUsXG4gICAgICAxNzMsXG4gICAgICAxODksXG4gICAgICAxOTQsXG4gICAgICAxNzIsXG4gICAgICAxNzQsXG4gICAgICAxMzIsXG4gICAgICAxMTcsXG4gICAgICAxNCxcbiAgICAgIDExMCxcbiAgICAgIDExOCxcbiAgICAgIDExOSxcbiAgICAgIDYwLFxuICAgICAgNjcsXG4gICAgICAxNDAsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDI1NSxcbiAgICAgIDEwMSxcbiAgICAgIDE4NSxcbiAgICAgIDEwOSxcbiAgICAgIDQ3LFxuICAgICAgMTE2LFxuICAgICAgMTc5LFxuICAgICAgMTczLFxuICAgICAgMTM4LFxuICAgICAgMTUsXG4gICAgICA5LFxuICAgICAgMjgsXG4gICAgICA3OCxcbiAgICAgIDExMyxcbiAgICAgIDIyMCxcbiAgICAgIDE4NCxcbiAgICAgIDIxNixcbiAgICAgIDE3LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkzNDFHUExSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NDc0NTE1NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzUzMDQ0NDc0MjI3MDc6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSLkEuQ0hBUlVLQSBNQUhFU0hcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJaS9sTmdDRUtxcnRyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNoUWw1V2VIR3RjRkx3N2xzNEJqU2ZzYVFhWWd0R3lobGxvM3hiQUhaMGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZU5zbW4wVGZ3VXd6c3BwTmVINjJIY25LTFhuVi9MZG1ldFpjTHlWeUxER0ZzK0NuZ2p1MjNXaEUwSjJnRk0xWkZaNm50bi9qbjM3MlI5OU85SnBiRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaGV4V21FVzA0cXp0WTV0Q1VIMUswQi9MeTN0MjRjYm5ydzFBbVVjaFpEcVB3QjZrdDNNQ2xOY0lFVzNTN0pKRUVHU0dHS0NOV1lJRklrdzRsTkxGaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODQ3NDUxNTU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY1MjA3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxkVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGRVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUE9jd1IvaGkvYnU3aGcxS3A1S3R5NlljQnZNQ0pEUWZxYjdSL29lVXhKcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjE3NTYwNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjY1MjA4MDEzOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
