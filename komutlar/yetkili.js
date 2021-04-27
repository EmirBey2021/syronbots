const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "Syron | Yetkili Sistemleri"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `





**»** **!ban** : İstediğiniz Kulanıcıyı Sunucudan Yasaklar.
**»** **!unban** : Yasaklı Kullanınının Yasağını Kaldırır.
**»** **!kick** : İstediğiniz Kulanıcıyı Sunucudan Atar.
**»** **!sohbet-aç** : Sohbeti Mesajlara Açar.
**»** **!sohbet-kapat** : Sohbeti Mesajlara Kapatır.
**»** **!jail-sistem** : Jail Sistem Menüsünü Açar.


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
  aliases: ["yetkili", "Yetkili"],
  permLevel: 0
};
exports.help = {
  name: "yetkili",
  description: "",
  usage: ""
};
