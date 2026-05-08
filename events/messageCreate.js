module.exports = async (client, message) => {

if (message.author.bot) return;
if (!message.content.startsWith(client.prefix)) return;

const args = message.content
.slice(client.prefix.length)
.trim()
.split(/ +/);

const cmd = args.shift().toLowerCase();

client.commands.forEach(command => {
command.run(client, message, args, cmd);
});

require("../systems/automod")(message);

};
