module.exports = {
    name: 'm8',
    description: "hace musica",
    async execute(message, args, Discord) {
        const connection = await message.member.voice.channel.join();
      connection.play('Alessia Cara - How Far Ill Go (Lyrics).mp3');
      
      on('error', error => {
        console.log(error)
      })
        dispatcher.setVolumelogarithmic(5 / 5)
  
  
  
  
  }
}