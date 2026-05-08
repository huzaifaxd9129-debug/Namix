const {
joinVoiceChannel
} = require("@discordjs/voice");

module.exports = async (client) => {

console.log(`${client.user.tag} online`);

client.user.setActivity("⚡ Moderating Premuim Servers");

const guild = client.guilds.cache.get("1428738026674192527");

if (!guild) return;

const channel = guild.channels.cache.get("1500169321991766277");

if (!channel) return;

joinVoiceChannel({
channelId: channel.id,
guildId: guild.id,
adapterCreator: guild.voiceAdapterCreator,
selfDeaf: false
});

console.log("Joined voice channel 24/7");

};
