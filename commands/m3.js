module.exports = {
    name: 'm3',
    description: "hace musica",
    async execute(message, args, Discord) {
        const connection = await message.member.voice.channel.join();
      connection.play('24kGoldn - CITY OF ANGELS (Official Video).mp3');
      
      on('error', error => {
        console.log(error)
      })
        dispatcher.setVolumelogarithmic(5 / 5)
  
  
  
  
  }
}