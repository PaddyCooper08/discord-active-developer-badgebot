const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('activedevbadge')
		.setDescription('Claims active dev badge'),
	async execute(interaction) {
		return interaction.reply('Done! claim your badge at: https://discord.com/developers/active-developer');
	},
};