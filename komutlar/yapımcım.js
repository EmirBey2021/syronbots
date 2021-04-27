const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`Yapımcım`, `**<@740881356413861898>**`)
    .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "yapımcın",
  description: "Literary",
  usage: "Literary"
};
