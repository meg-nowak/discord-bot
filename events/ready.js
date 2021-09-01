// Send message to bot-commands channel when the discord bot is up

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Logged in as ${client.user.tag}!`)
        const channel = client.channels.cache.find(channel => channel.name === "bot-commands");
        channel.send("haiiiiii!");
	},
};