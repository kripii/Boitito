module.exports = {
    name: 'Reglas',
    description: "embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F90505')
        .setTitle('Reglas')
        .setDescription(':3')
        .addFields(
            {name: 'Rule 1', value: 'Se bueno'},
            {name: 'Rule 2', value: 'Regla 1'},
            {name: 'Rule 3', value: 'Regla 2'},
            
        )
        .setFooter('Hola :3');
    
    message.channel.send(newEmbed);
    
    }
    
    }