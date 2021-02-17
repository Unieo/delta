const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, ownername, botname } = require("./config.json");
const keepAlive = require("./server.js");
const fs = require("fs");
const { token } = require("./token.json")

client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`Bot is online!`);
    client.user.setActivity(`${prefix}help for help!`, {
        type: "PLAYING",
    });
});

client.on("guildCreate", (guild) => {
    let defaultChannel = "";
    guild.channels.cache.forEach((channel) => {
        if (channel.type == "text" && defaultChannel == "") {
            if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    });
    const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setTitle(`Thanks For inviting ${botname}!`)
        .setDescription(
            `I hope you enjoy using my commands! Why don't you try \`${prefix}help\` and take a look at my *cool commands*, :smirk:\n\n**Important Links:**\n[Support Server](http://discord.gg/BfwHnRf6bU) - Report Bugs, Request Features, Get Informed of downtime etc.!\n[Invite](https://discord.com/oauth2/authorize?client_id=786882695186874368&scope=bot&permissions=2147483647) - Bot invite link! Invite the bot to your servers...`
        )
        .setTimestamp()
        .setFooter(`Made with ❤️ by ${ownername}`);
    defaultChannel.send({ embed });
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
        client.commands.get(commandName) ||
        client.commands.find(
            (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );

    if (!command) return;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime =
            timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(
                `please wait ${timeLeft.toFixed(
                    1
                )} more second(s) before reusing the \`${
                    command.name
                }\` command.`
            );
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply("there was an error trying to execute that command!");
    }
});

keepAlive();
client.login(token);
