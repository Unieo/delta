const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../config.json");

module.exports = {
    name: "shibe",
    cooldown: 2,
    async execute(client, message, args) {
        const { body } = await superagent.get(
            `http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`
        );

        const embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setTitle("Here's Your Shibe")
            .setImage(body[0])
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
