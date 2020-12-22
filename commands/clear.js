module.exports = {
  name: 'clear',
  description: "Borrar mensajes",
  async execute(message, args) {
    
      if (!args[0]) return message.reply("Pon un numero");

      if (isNaN(args[0])) return message.reply("Que sea un numero");

      if (args[0] > 100) return message.reply('Que no sea mas de 100');

      if (args[0] < 1) return message.reply("Pon al menos 1");

      await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
        message.channel.bulkDelete(messages)
      });
    
    }


  }
   