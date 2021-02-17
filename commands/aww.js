const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: 'aww',
	cooldown: 2,
	async execute(client, message, args) {
		const embed = new Discord.MessageEmbed();
		got('https://www.reddit.com/r/aww/random/.json').then(response => {
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let memeUrl = `https://reddit.com${permalink}`;
			let memeImage = content[0].data.children[0].data.url;
			let memeTitle = content[0].data.children[0].data.title;
			let memeUpvotes = content[0].data.children[0].data.ups;
			let memeNumComments = content[0].data.children[0].data.num_comments;
			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setImage(memeImage);
			embed.setColor('RANDOM');
			embed.setFooter(`👍 ${memeUpvotes} • 💬 ${memeNumComments}`);
			message.channel.send(embed)
		});
	}
};
