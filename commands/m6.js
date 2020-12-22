module.exports = {
    name: 'm6',
    description: "hace musica",
    async execute(message, args, Discord) {
        const connection = await message.member.voice.channel.join();
      connection.play('Arizona Zervas - Roxanne (Lyrics).mp3');
      
      on('error', error => {
        console.log(error)
      })
        dispatcher.setVolumelogarithmic(5 / 5)
  
  
  
  
  }
}