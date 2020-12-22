const { execute } = require("./warn");

const got = require('got');
const Discord = require('discord.js');
module.exports = {
    name: 'meme',
    description: 'meme',
    async execute(message, args, Discord) {

        const embed = new Discord.MessageEmbed();
        got('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            embed.setImage(memeImage);
            embed.setFooter(`xd`);
            message.channel.send(embed)
        }).catch(console.error);


    }
}