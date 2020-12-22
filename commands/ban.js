module.exports = {
    name: 'ban',
    description: "ban",
    execute(message, args){
        if(message.member.roles.cache.has('784472387898834975')){
            const target = message.mentions.users.first();
            if(message.member.roles.cache.has('752585535377113129')){
                message.channel.send('casi brou')
            }
            else if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send(`Ha sido baneado`);
            }else{
                message.channel.send(`No he podido banear`);
            }
        }else {
            message.channel.send('no tienes permision')
        }
        
        
    }
  }