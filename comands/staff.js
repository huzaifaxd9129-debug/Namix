module.exports = {
name: "staff",

async run(client, message, args, cmd) {

if (cmd === "apply") {

message.channel.send(`
STAFF APPLICATION

1. Name?
2. Age?
3. Experience?
4. Why should we pick you?
5. Activity hours?
`);
}

if (cmd === "accept") {

const logs =
message.guild.channels.cache.get(
"1500169350307647488"
);

logs.send(
`${message.author.tag} accepted application`
);

message.channel.send("Application accepted");
}

if (cmd === "reject") {

const logs =
message.guild.channels.cache.get(
"1500169350307647488"
);

logs.send(
`${message.author.tag} rejected application`
);

message.channel.send("Application rejected");
}

}
};
