module.exports = async (message) => {

const blocked = ["badword1", "badword2"];

if (blocked.some(w => message.content.includes(w))) {

await message.delete();

message.channel.send(
`${message.author}, bad words not allowed`
);
}

if (message.content.includes("http")) {

await message.delete();

message.channel.send(
`${message.author}, links blocked`
);
}

};
