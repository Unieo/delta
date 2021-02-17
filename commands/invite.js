const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "invite",
    aliases: ["inv"],
    cooldown: 2,
    execute(client, message, args) {
        let invite =
            "[Invite Manually](https://discord.com/oauth2/authorize?client_id=786882695186874368&scope=bot&permissions=2147483647) \n [Top.gg](https://top.gg/bot/786882695186874368) \n [Discord Bot List](https://discordbotlist.com/bots/delta-6103) \n [Bots For Discord](https://botsfordiscord.com/bot/786882695186874368)";
        const embed = new Discord.MessageEmbed()
            .setTitle("Invite the bot using one of the following links")
            .setColor(Math.floor(Math.random() * 16777215))
            .setDescription(invite)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
