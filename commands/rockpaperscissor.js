let rps = ["**:pencil: paper**", "**:moyai: rock**", "**:scissors: scissors**"];
function random() {
	return `${rps[Math.floor(Math.random() * Math.floor(2))]}!`;
}

module.exports = {
	name: "rockpaperscissor",
	aliases: ["rps"],
	cooldown: 2,
	execute(client, message, args) {
		let choice = args.join(" ").toLowerCase();
		if (choice === "")
			return message.reply("Please specify either rock, paper or scissors.");
		if (choice !== "rock" && choice !== "paper" && choice !== "scissors")
			return message.reply(
				`Please specify either rock, paper or scissors. ${choice} isn't one of those :P`
			);
		message.channel.send(random());
	},
};
