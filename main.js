const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));








for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    message.member.roles.cache.has
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command === 'numero') {
        client.commands.get('numero').execute(message, args, Discord);
    } else if (command === 'reglas') {
        client.commands.get('Reglas').execute(message, args, Discord);
    } else if (command === 'borrar') {
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord)
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord)
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, Discord)
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args, Discord)
    } else if (command === 'status') {
        client.commands.get('status').execute(message, args, Discord)
    } else if (command === 'search') {
        client.commands.get('Youtube').execute(message, args, Discord)
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord)
    } else if (command === 'join') {
        client.commands.get('join').execute(message, args, Discord)
    } else if (command === 'hola') {
        client.commands.get('hola').execute(message, args, Discord)
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args, Discord)
    } else if (command === 'music') {
        client.commands.get('music').execute(message, args, Discord)
    } else if (command === 'warn') {
        client.commands.get('warn').execute(message, args, Discord)
    } else if (command === 'meme') {
        client.commands.get('meme').execute(message, args, Discord)
    }

});
client.login('Nzg3Mzg5MTM4NTIwNjM3NDUy.X9UPRw.gttYoGqEDt5syhvfZgtu4Xp2-Q4');