module.exports = {
    name: 'm1',
    description: "hace musica",
    async execute(message, args, Discord) {
        const connection = await message.member.voice.channel.join();
      connection.play('audio.mp3');
      
      
        dispatcher.setVolumelogarithmic(5 / 5)
  
  
  
  
  }
}