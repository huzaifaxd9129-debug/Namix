const {
EmbedBuilder
} = require("discord.js");

module.exports = async (client, member) => {

const channel = member.guild.channels.cache.find(
c => c.name === "welcome"
);

if (!channel) return;

const embed = new EmbedBuilder()
.setColor("Blue")
.setTitle("👋 Welcome")
.setDescription(`
Welcome ${member}

You joined **${member.guild.name}**
You are member #${member.guild.memberCount}
`)
.setThumbnail(
member.user.displayAvatarURL({ dynamic: true })
)
.setFooter({
text: `ID: ${member.user.id}`
})
.setTimestamp();

channel.send({
content: `${member}`,
embeds: [embed]
});

};
