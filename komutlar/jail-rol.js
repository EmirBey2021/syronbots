const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  var başarılı = [
    "**Başarılı!** <a:onayli:784010820203446292>",
    "**Başarılı** <a:onayli:784010820203446292>",
    "**Başarılı** <a:onayli:784010820203446292>",
    "**Başarılı** <a:onayli:784010820203446292>"
  ];
  var x = başarılı[Math.floor(Math.random() * başarılı.length)];

  var başarısız = [
    "**Başarısız !** <a:x_:773487982346240031>",
    "**Başarısız !** <a:x_:773487982346240031>",
    "**Başarısız !** <a:x_:773487982346240031>",
    "**Başarısız !** <a:x_:773487982346240031>"
  ];
  var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      `**${ayarlar.prefix}jail-rol ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`
    );
  if (!args[0])
    return message.reply(
      `Sistemi kullanabilmek için, .jail-rol ayarla/sıfırla @rol yazmalısın.`
    );

  if (args[0] == "ayarla") {
    let rol =
      message.mentions.roles.first() ||
      message.guild.roles.find(c => c.name === args[1].join(" "));
    if (!rol) return message.channel.send(x2 + ` Bir rol etiketle.`);

    db.set(`jailrol_${message.guild.id}`, rol.id);
    message.channel.send(x + ` Jail rolü ${rol} olarak ayarlandı.`);
  }

  if (args[0] == "sıfırla") {
    db.delete(`jailrol_${message.guild.id}`);
    message.channel.send(x + ` Jail rolü başarıyla sıfırlandı.`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jail-rol"],
  permLevel: 0
};

exports.help = {
  name: "jail-rol",
  description: "Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız.",
  usage: "jail-rol ayarla/sıfırla @rol",
  kategori: "**MODERASYON**",
  permLvl: "**SUNUCUYU YÖNET**"
};
