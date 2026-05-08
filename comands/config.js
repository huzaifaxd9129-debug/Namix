module.exports = {
name: "config",

async run(client, message, args, cmd) {

if (cmd === "setlogs") {

message.channel.send(
"Logs channel configured"
);
}

if (cmd === "setwelcome") {

message.channel.send(
"Welcome channel configured"
);
}

if (cmd === "settickets") {

message.channel.send(
"Ticket category configured"
);
}

}
};
