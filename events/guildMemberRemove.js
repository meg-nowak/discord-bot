// When a user leaves the server, say goodbye to them.

module.exports = {
    name: 'guildMemberRemove',
    once: true,
    execute(client, member) {
        const channel = client.channels.cache.find(channel => channel.name === "welcome");
	    channel.send(`o no! lookz like ${member.user.username} left, goodbye!`);
    }
}