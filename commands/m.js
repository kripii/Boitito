module.exports = {
    name: 'm',
    description: "lista de musica",
    execute(message, args, Discord) {
    
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#EED37A')
        .setTitle('Funciones')
        .setDescription('Lista de musica')
        .addFields(
            {name: 'm1', value: 'pos una musica random'},
            {name: 'm2', value: 'shinobi dead wrong'},
            {name: 'm3', value: '24kgoldn city of angeles'},
            {name: 'm4', value: 'aishite, aishite'},
            {name: 'm5', value: 'Arcade The netherlands'},
            {name: 'm6', value: 'Roxanne'},
            {name: 'm7', value: 'aaron smith dancin'},
            {name: 'm8', value: 'Alessia Cara How far ill go'},
            {name: 'm9', value: 'Sanils house pixel galaxy'},
        )
        .setFooter('Hola :3');
        message.channel.send(newEmbed);
    
    }
}