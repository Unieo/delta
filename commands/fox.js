const Discord = require("discord.js");
const axios = require("axios");
const superagent = require("superagent");
const config = require("../config.json");

module.exports = {
    name: "fox",
    cooldown: 2,
    async execute(client, message, args) {
        const { body } = await superagent.get(
            "https://some-random-api.ml/facts/fox"
        );

        const url = "https://randomfox.ca/floof/";

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured! ${e}`);
        }

        const embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setTitle("Here's Your Fox :fox:")
            .setImage(data.image)
            .setDescription(body.fact)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        return message.channel.send({ embed });
    },
};
