const config = require('./config.json');
const Discord = require('discord.js');
const search = require('youtube-search');
const opts = {
    maxResults: 25,
    key: config.YOUTUBE_API,
    type: 'video'
};


module.exports = {
    name: 'Youtube',
    description: "Buscar en youtube",
    async execute(message, args, Discord) {
        
        
        let embed = new Discord.MessageEmbed()
        .setColor("#73ffdc")
        .setDescription("Pon lo que quieres buscar, se lo mas especifico")
        .setTitle("Buscador de cancioncitos xd");
    let embedMsg = await message.channel.send(embed);
    let filter = m => m.author.id === message.author.id;
    let query = await message.channel.awaitMessages(filter, { max: 1 });
    let results = await search(query.first().content, opts).catch(err => console.log(err));
    if(results) {
        let youtubeResults = results.results;
        let i  =0;
        let titles = youtubeResults.map(result => {
            i++;
            return i + ") " + result.title;
        });
        message.channel.send({
            embed: {
                title: 'Indica el numero deseado',
                description: titles.join("\n")
            }
        }).catch(err => console.log(err));
        
        filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
        let collected = await message.channel.awaitMessages(filter, { max: 1 });
        let selected = youtubeResults[collected.first().content - 1];

        let embed = new Discord.MessageEmbed()
            .setTitle(`${selected.title}`)
            .setURL(`${selected.link}`)
            .setThumbnail(`${selected.thumbnails.default.url}`);

        message.channel.send(embed);
    }
}
};
    