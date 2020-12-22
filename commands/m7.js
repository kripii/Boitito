module.exports = {
    name: 'm7',
    description: "hace musica",
    async execute(message, args, Discord) {
        const connection = await message.member.voice.channel.join();
      connection.play('Aaron Smith - Dancin (KRONO Remix) (Español).mp3');
      
      on('error', error => {
        console.log(error)
      })
        dispatcher.setVolumelogarithmic(5 / 5)
  
  
  
  
  }
}