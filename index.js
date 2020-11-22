const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '+';
const token = '';
client.once('ready', () => {
    console.log('Rub3n ready!');
});
client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content == "+clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.awaitMessages()
                .then(function (list) {
                    console.log(list);
                    message.channel.bulkDelete(list);
                }, function (err) { message.channel.send("ERROR: ERROR CLEARING CHANNEL.") })
        }
    }
});


client.login(token);
