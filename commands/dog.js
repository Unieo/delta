const Discord = require("discord.js");
const superagent = require("superagent");
const axios = require("axios");
const config = require("../config.json");

module.exports = {
    name: "dog",
    cooldown: 2,
    async execute(client, message, args) {
        const { body } = await superagent.get(
            "https://dog.ceo/api/breeds/image/random"
        );
        const url = "https://some-random-api.ml/facts/dog";

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured! ${e}`);
        }

        const embed = new Discord.MessageEmbed()
            .setTitle("Here's Your Dog :dog:")
            .setColor(Math.floor(Math.random() * 16777215))
            .setImage(body.message)
            .setDescription(data.fact)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
