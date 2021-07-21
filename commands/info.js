const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "info",
    cooldown: 2,
    execute(client, message, args) {
        let about =
            "This bot was made for the purpose of fun and entertainment.";
        let credit =
            "Here is a list of people who really helped me out with the development of this bot: \n Lookinsomething \n winking \n Darkinator \n ";
        let licence = "MIT";
        let support = "[Delta Vault](https://discord.gg/BfwHnRf6bU)";
        const embed = new Discord.MessageEmbed()
            .setTitle("Bot Info")
            .setColor(Math.floor(Math.random() * 16777215))
            .addField("About:", about)
            .addField("Credit:", credit)
            .addField("Support:", support)
            .addField("Licence:", licence)
            .setTimestamp()
            .setFooter(
                `${config.botname} is made by ${config.ownername} • ${config.copyright}`
            );

        message.channel.send({ embed });
    },
};
