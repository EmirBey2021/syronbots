const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "Syron | Kullanıcı Komutları"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**»** **!yapımcın** : Botun Yapımcısını Gösterir.
**»** **!say** : Üye Biligilerini Yazar.
**»** **!i** : Botun İstatistiklerini Gösterir.
**»** **!afk** : Bot Sizi Afk Moduna Alır.
**»** **!sil** : Bot Sizin Yerinize Mesajları Siler.
**»** **!şikayet** : Botla İlgili Şikayetlerinizi Yazarsınız.
**»** **!kb** : Kullanıcı Biligilerini Yazar.
**»** **!davet** : Botun Davet Linkini Alırsınız.
**»** **!avatar** : Etiketlediğiniz Kişinin Avatarını Gösterir.
**»** **!emoji-bilgi** : Emoji Bilgi Alırsınız.
**»** **!id** : İstediğiniz Rolun Ya Da Kullanıcının İdsini Alırsınız.
**»** **!kurallar** : Kuralları Otamatik Yazar 
**»** **!oylama <oylamaismi>** : Oylama yapmanızı sağlamaktadır.

                                                                      
**»** \`\`\!yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**

`
    )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  message.channel.send(mhelp).then;
  const sembed = new Discord.MessageEmbed();
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Kullanıcı", "kullanıcı", "kullanıcı-menüsü"],
  permLevel: 0
};
exports.help = {
  name: "Kullanıcı",
  description: "",
  usage: ""
};
