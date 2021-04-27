const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "Syron | Koruma Komutları"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**»** **!ban-koruma #kanal** :Sunucudan Birini Banlayan Kişiyi Sunucudan Atar Ve Banlananın Banını Açar
**»** **!ban-koruma-sıfırla** :Ayarlanan Ban Koruma Sistemini Sıfırlar.
**»** **!kanal-koruma #kanal** :Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.
**»** **!kanal-koruma-sıfırla** :Ayarlanan Kanal Koruma Sistemini Sıfırlar.
**»** **!rol-koruma #kanal** :Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.
**»** **!rol-koruma-sıfırla** :Ayarlanan Rol Koruma Sistemini Sıfırlar.
**»** **!emoji-koruma #kanal** :Emoji Koruma Sistemini Açar. Not:Yönetici Yetkisi Olmayan Kişilerde Çalışmaktadır
**»** **!emoji-koruma kapat** :Emoji Koruma Sistemini Kapatır.
          
                  
                                                                                                 
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
  aliases: ["koruma", "koruma-yardım", "Koruma"],
  permLevel: 0
};
exports.help = {
  name: "Koruma",
  description: "",
  usage: ""
};
