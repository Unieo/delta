const Discord = require("discord.js");
const axios = require("axios");
const superagent = require("superagent");
const config = require("../config.json");

module.exports = {
    name: "koala",
    cooldown: 2,
    async execute(client, message, args) {
        const { body } = await superagent.get(
            "https://some-random-api.ml/facts/koala"
        );

        const url = "https://some-random-api.ml/img/koala";

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`);
        }

        const embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setTitle("Here's Your Koala :koala:")
            .setImage(data.link)
            .setDescription(body.fact)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        return message.channel.send({ embed });
    },
};
