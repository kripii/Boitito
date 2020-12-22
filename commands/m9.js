module.exports = {
    name: 'm9',
    description: "hace musica",
    async execute(message, args, Discord) {
        const connection = await message.member.voice.channel.join();
      connection.play('Snails House - Pixel Galaxy (Official MV).mp3');
      
      
        
  
  
  }
}