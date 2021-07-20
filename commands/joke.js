const Discord = require("discord.js");
const axios = require("axios");
const config = require("../config.json");

module.exports = {
    name: "joke",
    cooldown: 2,
    async execute(client, message, args) {
		const url = "https://some-random-api.ml/joke";

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured! ${e}`);
        }

        const embed = new Discord.MessageEmbed()
            .setTitle("Here's your Joke")
            .setColor(Math.floor(Math.random() * 16777215))
            .setDescription(`${data.joke}`)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
