// returns the user a random kanye west quote from the kanye REST API
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports ={
    data: new SlashCommandBuilder()
    .setName('kanye')
    .setDescription('a random kanye west quote!'),
    async execute(interaction) {
        try {
            axios({
                method: 'get',
                url: 'https://api.kanye.rest/',
              })
                .then(async (response) => {
                    await interaction.reply(response.data.quote);
                });
        } catch (error) {
            await interaction.reply('soz! somethin went wrong');
            console.log(error);
        }
    },
} 