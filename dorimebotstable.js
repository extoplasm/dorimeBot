const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { execute } = require('./commands/startDorimeProtocol');
const intents = Intents.FLAGS;
const client = new Client({ presence: { activities: [{ name: "dorime...", type: "PLAYING"}], status: "idle"}, intents: 
[intents.GUILD_MESSAGES, intents.GUILDS]});
const prefix = '.'
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

require("dotenv").config()

client.on('ready', () => {
	console.log('Ready!')
});

client.on('messageCreate', msg => {
	if(!msg.content.startsWith(prefix) || msg.author.bot) return;
	
	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const commandname = args.shift().toLowerCase();
	console.log(commandname)
	for (const commandname of commandFiles) {
		const testing = require(`./commands/${commandname}`);
		console.log(testing)
	}
    try { execute(msg.content); console.log('this is impossible') }
	catch(err) { console.error(err); msg.reply("Something went wrong"); }
})
client.login(process.env.token);