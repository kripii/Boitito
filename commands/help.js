module.exports = {
    name: 'help',
    description: "todo lo que tine",
    execute(message, args, Discord) {
    
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#EED37A')
        .setTitle('Funciones')
        .setDescription(':3')
        .addFields(
            {name: 'search', value: 'Buscador de youtube'},
            {name: 'avatar', value: 'pos te enseña el avatar'},
            {name: 'borrar', value: 'Borra mensaje de no mas de 14 dias'},
            {name: 'ping', value: 'te dice pong'},
            {name: 'Status', value: 'cosas del server'},
            {name: 'music', value: 'Musica por youtube'},
            {name: 'meme', value: 'Te da un meme'},
            
        )
        .setFooter('Hola :3');
        message.channel.send(newEmbed);
    
    }
}