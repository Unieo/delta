const Discord = require("discord.js");
const axios = require("axios");
const superagent = require("superagent");
const config = require("../config.json");

module.exports = {
    name: "birb",
    cooldown: 2,
    async execute(client, message, args) {
        const { body } = await superagent.get(
            "https://some-random-api.ml/facts/bird"
        );

        const url = "https://some-random-api.ml/img/birb";

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`);
        }

        const embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setTitle("Here's Your Birb :bird:")
            .setImage(data.link)
            .setDescription(body.fact)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        return message.channel.send({ embed });
    },
};
