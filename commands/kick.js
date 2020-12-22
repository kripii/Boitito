module.exports = {
  name: 'kick',
  description: "This command kicks a member!",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (message.member.roles.cache.has('752244863000510514', '752245481073147914', '752250837203419167')) {
      if (target) {
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.kick();
        message.channel.send(`Ha sido kikeado`);
      } else {
        message.channel.send(`No he podido kikear`);
      }
    } else {
      message.channel.send('no tienes permision')
    }

  }
}