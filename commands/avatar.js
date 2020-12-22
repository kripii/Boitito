module.exports = {
    name: 'avatar',
    description: 'avatar',
    execute(message, args, Discord) {
        const target = message.author
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            message.reply(message.memberTarget.AvatarURL());
        }


    }
}