module.exports = {
    name: 'interactionCreate',
    once: false,
     async execute(interaction) {
            if (interaction.isCommand()) {

                const command = interaction.client.commands.get(interaction.commandName);

                if (!command) return;

                try {
                    await command.execute(interaction);
                } catch (error) {
                    console.error(error);
                    await interaction.editReply({ content: '⚠️ There was an error while executing this command!', ephemeral: true });
                }

            }
    },
};
