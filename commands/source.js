const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "source",
    aliases: ["src"],
    cooldown: 2,
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Bot Source")
            .setDescription(`${config.source}`)
            .setColor(Math.floor(Math.random() * 16777215))
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
