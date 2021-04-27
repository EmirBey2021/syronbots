const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "Syron | Logo Sistemleri"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**»** **!grafiti** : Grafiti logo oluşturur.
**»** **!discord** : Discord logo oluşturur.
**»** **!gold** : Gold logo oluşturur. 
**»** **!comic** : Comic logo oluşturur.
**»** **!bubble2** : Bubble ama renkli logo oluşturur              
**»** **!bubble** : Bubble logo oluşturur       
**»** **!altın** : Altın logo oluşturur
**»** **!banner** : Banner logo oluşturur.
**»** **!elmas** : Elmas logo oluşturur
**»** **!neonmavi** : Neon mavi logo oluşturur. 
**»** **!kalın** : Kalın logo oluşturur.
**»** **!anime** : Anime yazı tipinde logo oluşturur
**»** **!habbo** : Habbo yazı tipinde logo oluşturur.
**»** **!arrow** : Ok işaretli logo oluşturur. 
**»** **!green** : Yeşil logo oluşturur.
**»** **!alev** : Alevli logo oluşturur
**»** **!red** : Kırmızı logo oluşturur.


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
  aliases: ["logo", "logo-y", "Logo"],
  permLevel: 0
};

exports.help = {
  name: "logo yardım",
  description: "logo",
  usage: ""
};
