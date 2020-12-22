
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
module.exports = {
    name: 'queue',
    description: "queue",
async execute(message, args, Discord){
    const queue = new Map();   
    const serverQueue = queue.get(message.guild.id);
    
    
    
    
    const songInfo = await ytdl.getInfo(args[1]);
const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url,
};
        
        if (message.content.startsWith(`${prefix}skip`)) {
            skip(message, serverQueue);
            return;
        
        if (!serverQueue) {

        }else{
         serverQueue.songs.push(song);
         console.log(serverQueue.songs);
         return message.channel.send(`${song.title} has been added to the queue!`);
        }
        // Creating the contract for our queue
const queueContruct = {
    textChannel: message.channel,
    voiceChannel: voiceChannel,
    connection: null,
    songs: [],
    volume: 5,
    playing: true,
   };
   // Setting the queue using our contract
   queue.set(message.guild.id, queueContruct);
   // Pushing the song to our songs array
   queueContruct.songs.push(song);
   
   try {
    // Here we try to join the voicechat and save our connection into our object.
    var connection = await voiceChannel.join();
    queueContruct.connection = connection;
    // Calling the play function to start a song
    play(message.guild, queueContruct.songs[0]);
   } catch (err) {
    // Printing the error message if the bot fails to join the voicechat
    console.log(err);
    queue.delete(message.guild.id);
    return message.channel.send(err);
   }
        



    }
}
  }