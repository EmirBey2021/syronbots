const Discord = require("discord.js");
exports.run = (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`<a:carpi:784010751441895444> Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine Sahip Olmalısın`);
  
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send("<a:onayli:784010820203446292> Sohbet kanalı ``Mesajlara`` başarılı bir şekilde açıldı.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};