const {
ChannelType,
PermissionsBitField,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
} = require("discord.js");

module.exports = async (client, interaction) => {

if (!interaction.isButton()) return;

if (interaction.customId === "create_ticket") {

const channel =
await interaction.guild.channels.create({

name: `ticket-${interaction.user.username}`,

type: ChannelType.GuildText,

permissionOverwrites: [
{
id: interaction.guild.id,
deny: [
PermissionsBitField.Flags.ViewChannel
]
},
{
id: interaction.user.id,
allow: [
PermissionsBitField.Flags.ViewChannel
]
}
]
});

const row = new ActionRowBuilder()
.addComponents(

new ButtonBuilder()
.setCustomId("claim_ticket")
.setLabel("Claim")
.setStyle(ButtonStyle.Primary),

new ButtonBuilder()
.setCustomId("close_ticket")
.setLabel("Close")
.setStyle(ButtonStyle.Danger)
);

channel.send({
content: `${interaction.user}`,
components: [row]
});

interaction.reply({
content: `Ticket created: ${channel}`,
ephemeral: true
});
}

if (interaction.customId === "close_ticket") {

await interaction.channel.delete();
}

if (interaction.customId === "claim_ticket") {

interaction.reply({
content: `Ticket claimed by ${interaction.user}`,
ephemeral: false
});
}

};
