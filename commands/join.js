const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'join',
    description: "se une al canal de voz",
    async execute(message, args, Discord){
      
        if (!message.guild) return;
      
          if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
          } else {
            message.reply('no estas en un canal');
          }
        
    
    
    
    }
  }
