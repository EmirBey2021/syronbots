const Discord = require("discord.js");
const talkedRecently = new Set();
let botid = "755712467367231548";

exports.run = (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      message.delete();
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 5000); // Şuan 5 Saniyedir Değiştirebilirsiniz.
  }
  const embed = new Discord.MessageEmbed()
    .setColor(0xf001fa)
    .addField(
      "**Jail Komutları**",
      `
**!jail-kanal** : Jail Log Kanalı Belirtirsiniz
**!jail-rol** : Jail Atınca Verilecek Rolü Belirtirsiniz!
**!jail-yetkilisi** : Kimlerin Jail Atacağını Belirtirsiniz!
**!jail** : Jail Atarsınız`
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "jail-sistem",
  description: "Premium Rolü Hakkındaki Bilgileri Gösterir.",
  usage: "premium"
};
