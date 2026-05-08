const {
EmbedBuilder
} = require("discord.js");

module.exports = {
name: "utility",

async run(client, message, args, cmd) {

if (cmd === "embed") {

const text = args.join(" ").split("|");

const embed = new EmbedBuilder()
.setColor("Blue")
.setTitle(text[0])
.setDescription(text[1]);

message.channel.send({
embeds: [embed]
});
}

if (cmd === "ping") {

message.reply("Pong!");
}

}
};
