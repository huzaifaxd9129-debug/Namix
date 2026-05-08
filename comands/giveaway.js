module.exports = {
name: "giveaway",

async run(client, message, args, cmd) {

if (cmd === "gstart") {

message.channel.send(
`Giveaway started for ${args.join(" ")}`
);
}

if (cmd === "gend") {

message.channel.send(
"Giveaway ended"
);
}

if (cmd === "greroll") {

message.channel.send(
"Giveaway rerolled"
);
}

}
};
