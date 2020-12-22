module.exports = {
    name: 'm5',
    description: "hace musica",
    async execute(message, args, Discord) {
        const connection = await message.member.voice.channel.join();
      connection.play('Arcade - Lyrics - The Netherlands  - Eurovision 2019.mp3');
      
      on('error', error => {
        console.log(error)
      })
        dispatcher.setVolumelogarithmic(5 / 5)
  
  
  
  
  }
}