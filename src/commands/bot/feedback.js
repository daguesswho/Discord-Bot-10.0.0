const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1085864550009679932",
    token: "jymY7w78URbkW3ui9VPjNH8VxS1PSueHYLW5flwsx_2yD4X1IV_2us225PGNKi8MGDi4",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 