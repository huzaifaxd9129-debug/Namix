// commands/mod.js

const ms = require("ms");

module.exports = {
  name: "mod",

  async execute(client, message, args) {

    if (!args[0]) {
      return message.reply(`
Moderation Commands:

-ban @user reason
-kick @user reason
-timeout @user 10m reason
-clear 10
-lock
-unlock
-slowmode 5
-hide
-unhide
-avatar @user
-userinfo @user
-serverinfo
-say hello
-poll best bot?
-nickname @user name
      `);
    }

    const cmd = args[0].toLowerCase();

    // ================= BAN =================

    if (cmd === "ban") {

      if (!message.member.permissions.has("BanMembers"))
        return message.reply("No permission.");

      const member = message.mentions.members.first();

      if (!member)
        return message.reply("Mention a user.");

      const reason =
        args.slice(2).join(" ") || "No reason";

      await member.ban({ reason });

      return message.channel.send(
        `✅ Banned ${member.user.tag}`
      );
    }

    // ================= KICK =================

    if (cmd === "kick") {

      if (!message.member.permissions.has("KickMembers"))
        return;

      const member = message.mentions.members.first();

      if (!member)
        return message.reply("Mention user.");

      await member.kick();

      return message.channel.send(
        `✅ Kicked ${member.user.tag}`
      );
    }

    // ================= CLEAR =================

    if (cmd === "clear") {

      if (!message.member.permissions.has("ManageMessages"))
        return;

      const amount = parseInt(args[1]);

      if (!amount)
        return message.reply("Enter amount.");

      await message.channel.bulkDelete(amount, true);

      return message.channel.send(
        `✅ Deleted ${amount} messages.`
      );
    }

    // ================= TIMEOUT =================

    if (cmd === "timeout") {

      if (!message.member.permissions.has("ModerateMembers"))
        return;

      const member =
        message.mentions.members.first();

      if (!member)
        return message.reply("Mention user.");

      const time = args[2];

      if (!time)
        return message.reply("Provide time.");

      const reason =
        args.slice(3).join(" ") || "No reason";

      await member.timeout(ms(time), reason);

      return message.channel.send(
        `✅ Timed out ${member.user.tag} for ${time}`
      );
    }

    // ================= LOCK =================

    if (cmd === "lock") {

      if (!message.member.permissions.has("ManageChannels"))
        return;

      await message.channel.permissionOverwrites.edit(
        message.guild.roles.everyone,
        {
          SendMessages: false
        }
      );

      return message.channel.send("🔒 Locked.");
    }

    // ================= UNLOCK =================

    if (cmd === "unlock") {

      if (!message.member.permissions.has("ManageChannels"))
        return;

      await message.channel.permissionOverwrites.edit(
        message.guild.roles.everyone,
        {
          SendMessages: true
        }
      );

      return message.channel.send("🔓 Unlocked.");
    }

    // ================= SLOWMODE =================

    if (cmd === "slowmode") {

      if (!message.member.permissions.has("ManageChannels"))
        return;

      const seconds = parseInt(args[1]);

      if (isNaN(seconds))
        return message.reply("Enter seconds.");

      await message.channel.setRateLimitPerUser(seconds);

      return message.channel.send(
        `🐢 Slowmode set to ${seconds}s`
      );
    }

    // ================= HIDE =================

    if (cmd === "hide") {

      if (!message.member.permissions.has("ManageChannels"))
        return;

      await message.channel.permissionOverwrites.edit(
        message.guild.roles.everyone,
        {
          ViewChannel: false
        }
      );

      return message.channel.send("🙈 Hidden.");
    }

    // ================= UNHIDE =================

    if (cmd === "unhide") {

      if (!message.member.permissions.has("ManageChannels"))
        return;

      await message.channel.permissionOverwrites.edit(
        message.guild.roles.everyone,
        {
          ViewChannel: true
        }
      );

      return message.channel.send("👀 Unhidden.");
    }

    // ================= AVATAR =================

    if (cmd === "avatar") {

      const user =
        message.mentions.users.first() ||
        message.author;

      return message.channel.send(
        user.displayAvatarURL({
          dynamic: true,
          size: 1024
        })
      );
    }

    // ================= USERINFO =================

    if (cmd === "userinfo") {

      const user =
        message.mentions.users.first() ||
        message.author;

      return message.channel.send(`
Username: ${user.tag}
ID: ${user.id}
      `);
    }

    // ================= SERVERINFO =================

    if (cmd === "serverinfo") {

      return message.channel.send(`
Server: ${message.guild.name}
Members: ${message.guild.memberCount}
Owner: <@${message.guild.ownerId}>
      `);
    }

    // ================= SAY =================

    if (cmd === "say") {

      const text = args.slice(1).join(" ");

      if (!text) return;

      await message.delete();

      return message.channel.send(text);
    }

    // ================= POLL =================

    if (cmd === "poll") {

      const text = args.slice(1).join(" ");

      if (!text) return;

      const msg =
        await message.channel.send(`📊 ${text}`);

      await msg.react("👍");
      await msg.react("👎");
    }

    // ================= NICKNAME =================

    if (cmd === "nickname") {

      if (!message.member.permissions.has("ManageNicknames"))
        return;

      const member =
        message.mentions.members.first();

      if (!member) return;

      const nick = args.slice(2).join(" ");

      await member.setNickname(nick);

      return message.channel.send(
        "✅ Nickname changed."
      );
    }

  }
};
