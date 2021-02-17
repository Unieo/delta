const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "diceroll",
    aliases: ["dr"],
    cooldown: 2,
    execute(client, message, args) {
        let answer = Math.floor(Math.random() * 6) + 1;

        let embed = new Discord.MessageEmbed()
            .setTitle("The Dice rolled and You got a")
            .setColor(Math.floor(Math.random() * 16777215))
            .setDescription(`**${answer}**`)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
