const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("çevrimiçi") : (Durum == "offline" ? ("çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Ad:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id)
      .addField('Kayıt tarihi:', message.author.createdAt)
      .addField('Durum:', durm)
      .addField('şu an oynadığı oyun:', message.author.presence.game ? message.author.presence.game.name : 'şu an oyun oynamıyor')
      .addField('BOT mu?', message.author.bot ? '\n Evet' : 'Hayır')
      console.log("!kullanıcıbilgim komutu " + message.author.username + " tarafından kullanıldı.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullan�c�', 'kullan�c� bilgim', 'kbilgim'],
  permLevel: 0
};

exports.help = {
  name: 'kullanicibilgim',
  description: 'Komutu kullanan ki�i hakk�nda bilgi verir.',
  usage: 'kullanicibilgim'
};