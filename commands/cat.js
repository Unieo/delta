const Discord = require("discord.js");
const superagent = require("superagent");
const axios = require("axios");
const config = require("../config.json");

module.exports = {
    name: "cat",
    cooldown: 2,
    async execute(client, message, args) {
        const { body } = await superagent.get("http://aws.random.cat/meow");

        const url = "https://some-random-api.ml/facts/cat";

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured! ${e}`);
        }

        const embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setTitle("Here's Your Cat :cat:")
            .setImage(body.file)
            .setDescription(data.fact)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
