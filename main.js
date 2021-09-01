const Discord = require("discord.js");  // import discord
const { token } = require('./config.json'); // import token from config

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS] })

// Send message to bot-commands channel when the discord bot is up
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  const channel = client.channels.cache.get.find(channel => channel.name === "bot-commands");
  channel.send("haiiiiii!");
})

// When a user is added to the channel, greet them and ask them to read the rules in the linked channel.
client.on('guildMemberAdd', async member => {
	const channel = client.channels.cache.get.find(channel => channel.name === "welcome");
	const rule_channel = client.channels.cache.get.find(channel => channel.name === "rules");
	await channel.send(`welcome 2 moggyz server, <@${member.user.id}> plz read the rulez in <#${rule_channel.id}>`);
});

// When a user leaves the server, say goodbye to them.
client.on('guildMemberRemove', async member => {
	const channel = client.channels.cache.get.find(channel => channel.name === "welcome");
	await channel.send(`o no! lookz like ${member.user.username} left, goodbye!`);
})

client.login(token)