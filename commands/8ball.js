const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "8ball",
    aliases: ["8b"],
    cooldown: 2,
    async execute(client, message, args) {
        if (!args[0]) return message.reply("Please ask a full question");
        let replies = [
            "Maybe.",
            "Certainly not.",
            "I hope so.",
            "Not in your wildest dreams.",
            "There is a good chance.",
            "Quite likely.",
            "I think so.",
            "I hope not.",
            "I hope so.",
            "Never!",
            "Pfft.",
            "Sorry, bucko.",
            "Hell yeah!",
            "Hell to the no.",
            "The future is bleak.",
            "The future is uncertain.",
            "I would rather not say.",
            "Who cares?",
            "Possibly.",
            "Never, ever, ever.",
            "There is a small chance.",
            "Yes!",
            "lol no.",
            "There is a high probability.",
            "What difference does it makes?",
            "Not my problem.",
            "Ask someone else.",
            "idk, lol",
        ];

        let result = Math.floor(Math.random() * replies.length);
        let question = args.slice(0).join(" ");

        let embed = new Discord.MessageEmbed()
            .setTitle("Magic 8Ball")
            .setColor(Math.floor(Math.random() * 16777215))
            .addField("Question:", question)
            .addField("Answer:", replies[result])
            .setTimestamp()
            .setFooter(`${config.copyright}`);

        message.channel.send({ embed });
    },
};
