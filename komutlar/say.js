const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let güvenlik = message.guild.verificationLevel;
  if (güvenlik === "NONE") güvenlik = "Yok";
  if (güvenlik === "LOW") güvenlik = "Düşük";
  if (güvenlik === "MEDIUM") güvenlik = "Orta";
  if (güvenlik === "HIGH") güvenlik = "Yüksek";
  if (güvenlik === "VERY_HIGH") güvenlik = " En Yüksek";
  let pc = message.guild.members.cache
    .filter(m => !m.user.bot && m.user.presence.status !== "offline")
    .filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop"))
    .size;
  let web = message.guild.members.cache
    .filter(m => !m.user.bot && m.user.presence.status !== "offline")
    .filter(m => Object.keys(m.user.presence.clientStatus).includes("web"))
    .size;
  let mobil = message.guild.members.cache
    .filter(m => !m.user.bot && m.user.presence.status !== "offline")
    .filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile"))
    .size;
  const voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
  );
  let count = 0;
  let guild = message.guild;
  let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
  let textChannels = message.guild.channels.cache.filter(m => m.type == "text")
    .size;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  let çevrimiçi = message.guild.members.cache.filter(
    m => !m.user.bot && m.user.presence.status !== "offline"
  ).size;
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setThumbnail(
      `https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif`
    )

    .addField(
      `<a:bluediamond:784010655715950632> **__Sunucudaki Toplam Üye Sayısı__**`,
      `**\`\`\`${message.guild.memberCount}\`\`\`**`
    )

    .addField(
      `<a:bluediamond:784010655715950632> **__Toplam Çevrimiçi Üye Sayısı__**`,
      `**\`\`\`${çevrimiçi}\`\`\`**`
    )

    .addField(
      `<a:bluediamond:784010655715950632> **__Seslideki Üye Sayısı__**`,
      `**\`\`\`${count}\`\`\`**`
    )

    .addField(
      `<a:kilit:784010789882298419> **__Güvenlik Seviyesi__**`,
      `**\`\`\`${güvenlik}\`\`\`**`
    )

    .addField(
      `<a:xbrave:784010687604981795>  **__Yazı Kanalları__**`,
      `» **${textChannels}**`
    )

    .addField(
      `<a:xbrave:784010687604981795>  **__Ses Kanalları__**`,
      `» **${voiceChannels.size}**`
    )

    .addField(
      `<a:xbrave:784010687604981795>  **__Roller__**`,
      `»  **${message.guild.roles.cache.size}**`
    )

    .addField(
      `<a:xbrave:784010687604981795>  **__Emojiler__**`,
      `»  **${message.guild.emojis.cache.size}**`
    )

    .addField(
      `<a:booster:786864085912256523>  **__Boost Seviyesi__**`,
      `»  **${message.guild.premiumTier}/3**`
    )

    .addField(
      `<a:booster:786864085912256523>  **__Boost Sayısı__**`,
      `»  **${message.guild.premiumSubscriptionCount}**`
    )

    .addField(
      `<a:hpt2:784010687588335646> **__Kullanıcılar__**`,
      `<:online:786865032415805460> Çevrimiçi : **${
        message.guild.members.cache.filter(o => o.presence.status === "online")
          .size
      }** \n<:rahatszetmeyin:786865029613223967> Rahatsız Etmeyin : **${
        message.guild.members.cache.filter(dnd => dnd.presence.status === "dnd")
          .size
      }** \n<:bota:786865050882932736> Boşta: **${
        message.guild.members.cache.filter(i => i.presence.status === "idle")
          .size
      }** \n<:offline:786865032246853653> Görünmez/Çevrimdışı : **${
        message.guild.members.cache.filter(
          off => off.presence.status === "offline"
        ).size
      }** \n <:bot1:787910616697929768>  Botlar : **${botlar}**`,
      true
    )

    .addField(
      `<a:hpt2:784010687588335646> Üyelerin Bağlandığı Cihazlar:`,
      `**${pc}** Kişi **__Bilgisayardan__**\n**${web}** Kişi **__Webden__**\n**${mobil}** Kişi İse **__Mobilden__** Bağlanıyor!`,
      false
    )

    .addField(
      `<a:hpt2:784010687588335646> **__Son Üyeler__**`,
      `\n» Son 1 **Saatte** Giren Üyeler **•** **${
        message.guild.members.cache.filter(
          a => new Date().getTime() - a.joinedTimestamp < 3600000
        ).size
      }** \n» Son 1 **Günde** Giren Üyeler **•** **${
        message.guild.members.cache.filter(
          a => new Date().getTime() - a.joinedTimestamp < 86400000
        ).size
      }** \n» Son 1 **Haftada** Giren Üyeler **•** **${
        message.guild.members.cache.filter(
          a => new Date().getTime() - a.joinedTimestamp < 604800000
        ).size
      }** \n» Son 1 **Ayda** Giren Üyeler **•** **${
        message.guild.members.cache.filter(
          a => new Date().getTime() - a.joinedTimestamp < 2629800000
        ).size
      }**`
    )
    .setTitle(
      `<a:hpt2:784010687588335646> ${message.author.tag} - Tarafından istendi.`
    )

    .setFooter(`Syron`, client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Say",
  usage: "say"
};
