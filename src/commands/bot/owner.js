const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Xeno`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `xeno#0581`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Xeno`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[coming soon](coming soon)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 