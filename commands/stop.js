module.exports = {
    name: 'stop',
    description: "para la musica",
    execute(message, args, Discord){
        
        if (!voiceChannel) return message.channel.send("Tienes que estar en el canal de musica, por favor *:3*")
        message.member.voice.channel.leave()
        message.channel.send('Musica parada')
        
    }
}