const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "vote",
    cooldown: 2,
    execute(client, message, args) {
        let invite =
            "[Top.gg](https://top.gg/bot/786882695186874368/vote) \n [Discord Bot List](https://discordbotlist.com/bots/delta-6103/upvote) \n [Bots For Discord](https://botsfordiscord.com/bot/786882695186874368/vote)";
        const embed = new Discord.MessageEmbed()
            .setTitle("Upvote the bot by using all the links below")
            .setColor(Math.floor(Math.random() * 16777215))
            .setDescription(invite)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
