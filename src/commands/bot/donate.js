const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Xeno GitHub")
                .setURL("https://github.com/")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: '_____ \n\nClick the button below for my github',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://github.com/",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 