const { Events } = require('discord.js');

const socialRegex = new RegExp(".*\/shorts|.*\/reel","i");

module.exports = {
	name: Events.MessageCreate,
	once: false,
	async execute(message) {
        if(message.channelId === "1337694072541941832")return;
        /*if (message.author.username === "cjblue"){*/
            if (socialRegex.test(message.content)) {
                await message.reply({ content: 'Keep your spam in the designated channel! Moving message...', ephemeral: true })
                .then(msg=>{
                    message.client.channels.cache.get('1337694072541941832')?.send(`${message.author.toString()} posted a short/reel: ${message.content}`);
                    setTimeout((()=>msg.delete()), 3000);
                })
                .then(msg=>message.delete());
            }
        /*}*/
    }
};