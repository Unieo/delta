const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../config.json");

module.exports = {
    name: "advice",
    aliases: ["adv"],
    cooldown: 2,
    execute(client, message, args) {
        superagent.get("http://api.adviceslip.com/advice").end((err, res) => {
            if (!err && res.status === 200) {
                try {
                    JSON.parse(res.text);
                } catch (e) {
                    return message.channel.send("An error occurred...");
                }
                const advice = JSON.parse(res.text);

                const embed = new Discord.MessageEmbed()
                    .setTitle("Your Advice, Pal")
                    .setColor(Math.floor(Math.random() * 16777215))
                    .setDescription(`**${advice.slip.advice}**`)
                    .setTimestamp()
                    .setFooter(`${config.copyright}`);
                message.channel.send({ embed });
            } else {
                console.error(
                    `REST call failed: ${err}, status code: ${res.status}`
                );
            }
        });
    },
};
