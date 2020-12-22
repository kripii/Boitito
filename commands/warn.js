const Discord = require('discord.js');
module.exports = {
    name: 'warn',
    description: 'Joins and plays a video from youtube',
  async execute(message, args) {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('No puedes');

    var user = message.mentions.users.first();
    if(!user) return message.reply('No mencionaste pelotudo');
    
    var member;
    
    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
    
    if(!member) return message.reply('No estan aqui');
    
    var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('Dame razon');
    
    var channel = message.guild.channels.cache.find(c => c.name === 'potato');
    
    const log = new Discord.MessageEmbed()
    .setTitle('Warneado')
    .addField('El tipo:', user, true)
    .addField('Por:', message.author, true)
    .addField('Razon:', reason)
    message.channel.send(log);
    
    const embed = new Discord.MessageEmbed()
    .setTitle('You were warned!')
    .setDescription(reason);
    
    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }
    
    message.channel.send(`**${user}** has been warned by **${message.author}**!`);
    }

}






