const { VoiceChannel } = require("discord.js")

module.exports = {
    name: 'leave',
    description: "se va del grupo del canal",
    async execute(message, args, Discord){
        const connection = await message.member.voice.channel.join();
        connection.disconnect();
}
}