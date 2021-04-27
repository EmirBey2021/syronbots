const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "Syron | Eğlence Komutları"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `




 **»** **!aduketçek** Etiketlediğiniz kişiye aduket çekersiniz.
 **»** **!balık-tut** Denizde balık tutarsınız.
 **»** **!beşlik** Etiketlediğiniz kişiyle beşlik çakarsınız.
 **»** **!ara155** Polisi aramanıza yarar.
 **»** **!efkarım** Şu anda olan efkarınızı ölçersiniz.
 **»** **!espri** Bot sizin için espri yapar.
 **»** **!hesapla** Belirttiğiniz matematik işlemini bot yapar.
 **»** **!kartopu** Etiketlediğiniz kişiye kartopu atarsınız.
 **»** **!kaç-cm** Bot malafat uzunluğunuzu söyler.
 **»** **!kralol** Kral olmanıza yarar.
 **»** **!tokat** Etiketlediğiniz kişiyi tokatlarsınız.
 **»** **!yazıtura** Bot ile yazı-tura oyununu oynarsınız.
 **»** **!yılbaşı** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
 **»** **!öp** Etiketlediğiniz kişiyi öpmenize yarar.

                  
                                                                                                 
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
  aliases: ["eğlence", "Eğlence"],
  permLevel: 0
};
exports.help = {
  name: "eğlence",
  description: "",
  usage: ""
};
