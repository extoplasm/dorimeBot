const client = require('discord.js');
function execute(msg) {
module.exports = {
    execute(msg) {
    msg.author.send('Password:')
    console.log('something happened o')
const filter = m => m.content.startsWith('ameno');
const collector = msg.channel.createMessageCollector({ filter, time: 15000, max: 1 });

collector.on('collect', m => {
    console.log('Protocol Activated')
    collector.stop()
});

collector.on('end', collected => {
    if (collected.size === 0) {
        msg.author.send('Dorime Protocol Failed.')
    } else {
    msg.author.send('Protocol activated')
    for (let i = 0; i < 100; i++) {
    msg.channel.send('https://www.youtube.com/watch?v=_5ChT4J_h2o')
    }
}
})
    }
}
}
