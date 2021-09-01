// When a user is added to the channel, greet them and ask them to read the rules in the linked channel.

module.exports = {
    name: 'guildMemberAdd',
    once: true,
    execute(client, member) {
        const channel = client.channels.cache.find(channel => channel.name === "welcome");
        const rule_channel = client.channels.cache.find(channel => channel.name === "rules");
        channel.send(`welcome 2 moggyz server, <@${member.user.id}> plz read the rulez in <#${rule_channel.id}>`);
    }
}