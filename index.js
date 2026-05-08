const {
Client,
GatewayIntentBits,
Collection,
Partials
} = require("discord.js");

require("dotenv").config();

const fs = require("fs");

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildModeration
],
partials: [Partials.Channel]
});

client.commands = new Collection();
client.prefix = process.env.PREFIX;

const commandFiles = fs
.readdirSync("./commands")
.filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

const command = require(`./commands/${file}`);

client.commands.set(command.name, command);
}

const eventFiles = fs
.readdirSync("./events")
.filter(file => file.endsWith(".js"));

for (const file of eventFiles) {

const event = require(`./events/${file}`);

client.on(file.split(".")[0], (...args) =>
event(client, ...args)
);
}

client.login(process.env.TOKEN);
