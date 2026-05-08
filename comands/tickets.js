const {
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
} = require("discord.js");

module.exports = {
name: "tickets",

async run(client, message, args, cmd) {

if (cmd === "ticketpanel") {

const embed = new EmbedBuilder()
.setColor("Blue")
.setTitle("Support System")
.setDescription(
"Click button below to open ticket"
);

const row = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setCustomId("create_ticket")
.setLabel("Open Ticket")
.setStyle(ButtonStyle.Primary)
);

message.channel.send({
embeds: [embed],
components: [row]
});
}

}
};
