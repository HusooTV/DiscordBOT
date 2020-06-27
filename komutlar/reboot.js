const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async function(client, message, params, color) {
  if (message.author.id !== "409059777155563531") return;
  if(params[0]) {
    let commandName  = params[0].toLowerCase()
    try {
      delete require.cache[require.resolve(`./${commandName}.js`)]
      client.commands.delete(commandName)
      const pull = require(`./${commandName}.js`)
      client.commands.set(commandName, pull)
    } catch(e) {
      return message.channel.send(`Bir hata oluştu ve **${commandName}** adlı komut reloadlanamadı.`)
    }
    
    message.channel.send(`__**${commandName}**__ adlı komut yeniden başlatılıyor!`)
    
   return
  }
  message.channel.send(`__**Bot**__ yeniden başlatılıyor!`).then(msg => {
    console.log('[BOT] Yeniden başlatılıyor...')
    process.exit(0);
  });
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['reboot', 'reload'], 
  permLevel: 2
};

exports.help = {
  name: 'yenile', 
  description: 'Botu veya belirtilen komutu yeniden başlatır.', 
  usage: 'yenile',
  kategori: 'sahip'
};
