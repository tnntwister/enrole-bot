// src/commands.mjs
const { SlashCommandBuilder } = require('discord.js');

export const commandsListData = () => {
    return new SlashCommandBuilder()
    .setName('auto-prompt')
    .setDescription('Sends prompt message to API')
    .addStringOption(option =>
        option.setName('trigger')
            .setDescription('the espanso trigger')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('url')
            .setDescription('URL of the discord message to send')
            .setRequired(true));
}

export const command1Action = async (interaction) => {
    const urlparts = interaction.options.getString('url').split('/');
    const messageId = urlparts[urlparts.length - 1];
    const channelId = urlparts[urlparts.length - 2];
    const guildId = urlparts[urlparts.length - 3];
    
    if (messageId !== undefined && channelId !== undefined && guildId !== undefined) {
        const guild = await client.guilds.fetch(guildId);
        const channel = await guild.channels.fetch(channelId);
        const message = await channel.messages.fetch(messageId);
        const prompt = interaction.options.getString('trigger');
        const response = message.content;
        // updateEspansoConfig(prompt, response);
        await interaction.reply({ content: `J'ai envoyé le prompt ${prompt} à l'API`, ephemeral: true });
    }
}