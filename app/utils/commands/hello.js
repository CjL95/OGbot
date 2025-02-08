const { SlashCommandBuilder } = require('discord.js');

const randomResponse = () => {
    const responses = [
        'Decrease me there :)',
        'Leave me alone ;(',
        'What do you want? >(',
        'I stay here >.<'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hey')
		.setDescription("'sup?"),
	async execute(interaction) {
		await interaction.reply(randomResponse());
	},
};