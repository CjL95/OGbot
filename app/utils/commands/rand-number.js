const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random_number')
		.setDescription("Generate a random number between 1 and 100"),
	async execute(interaction) {
		await interaction.reply(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
	},
};