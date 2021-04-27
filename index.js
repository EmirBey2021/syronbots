const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require("jimp");
const db = require("wio.db");
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const ms = require("ms");
require("./util/eventLoader")(client);



client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//BURDAN
//----------KOMUTLAR2-----------\\
fs.readdir("./komutlar2/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar2/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar2/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar2/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar2/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//-----------KOMUTLAR2--------\\
//BURAYA KADAR KOPYALA

//BURAYA YAPIŞTIR
//----------KOMUTLAR3-----------\\
fs.readdir("./komutlar3/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar3/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar3/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar3/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar3/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//-----------KOMUTLAR3--------\\

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(process.env.token);

//-------------------- Küfür Engel --------------------//

client.on("message", async msg => {
  const i = await db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "siktir",
      "fuck",
      "puşt",
      "pust",
      "piç",
      "sikerim",
      "sik",
      "yarra",
      "yarrak",
      "amcık",
      "orospu",
      "orosbu",
      "orosbucocu",
      "oç",
      ".oc",
      "ibne",
      "yavşak",
      "bitch",
      "dalyarak",
      "amk",
      "awk",
      "taşak",
      "taşşak",
      "daşşak",
      "sikm",
      "sikim",
      "sikmm",
      "skim",
      "skm",
      "sg"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          const salvo = new Discord.MessageEmbed()

            .setDescription("Bu Sunucuda Küfür Edemezsin.")
            .setColor("BLACK");

          return msg.reply(salvo);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", msg => {
  const i = db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "siktir",
      "fuck",
      "puşt",
      "pust",
      "piç",
      "sikerim",
      "sik",
      "yarra",
      "yarrak",
      "amcık",
      "orospu",
      "orosbu",
      "orosbucocu",
      "oç",
      ".oc",
      "ibne",
      "yavşak",
      "bitch",
      "dalyarak",
      "amk",
      "awk",
      "taşak",
      "taşşak",
      "daşşak",
      "sikm",
      "sikim",
      "sikmm",
      "skim",
      "skm",
      "sg"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          const salvo = new Discord.MessageEmbed()

            .setDescription("Bu Sunucuda Küfür Edemezsin.")
            .setColor("BLACK");

          return msg.reply(salvo);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//-------------------- Küfür Engel Son--------------------//

//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var salvo2 = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(salvo2);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//-------------------- Ever Here Engel Son --------------------//

//-------------------- Otorol Sistemi --------------------//

client.on("guildMemberAdd", async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);

  let kanal = member.guild.channels.cache.get(kanal1);
  let rol = member.guild.roles.cache.get(rol1);

  if (!kanal) return;
  if (!rol) return;

  const salvo3 = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setDescription(
      `Sunucuya Katılan **${member}** İsimli Kullanıcıya Başarıyla \`${rol.name}\` Rolü Verildi.`
    );

  kanal.send(salvo3);
  member.roles.add(rol);
});

//-------------------- Otorol Sistemi Son --------------------//

//-------------------- Afk Sistemi --------------------//

client.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.content.startsWith(ayarlar.prefix + "afk")) return;

  let afk = msg.mentions.users.first();

  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`);

  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`);
  if (afk) {
    const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`);
    const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`);
    if (msg.content.includes(kisi3)) {
      msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`);
    }
  }
  if (msg.author.id === kisi) {
    msg.reply(`Afk'lıktan Çıktınız`);
    db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`);
    db.delete(`afkid_${msg.author.id}_${msg.guild.id}`);
    db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`);
    msg.member.setNickname(isim);
  }
});

//-------------------- Afk Sistemi Son --------------------//

//-------------------- Sa As Sistemi --------------------//

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply(
        "**Aleyküm Selam, Hoş Geldin.**"
      );
    }
  }
});
//-------------------- Sa As Sistemi Son --------------------//

//-------------------- Reklam Engel Sistemi --------------------//

client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Syron Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İlk Uyarın! (1/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İkinci Uyarın! (2/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Syron | Reklam-Engel Sistemi!`
          });
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yaptığı İçin Sunucudan Atıldı! (3/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.ban({
            reason: ` Reklam-Engel Sistemi!`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Reklam Kick Sistemi")
            .setDescription(
              `<@${message.author.id}> Atıldıktan Sonra Tekrar Reklam Yaptığı İçin Sunucudan Yasaklandı!`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});

//-------------------- Reklam Engel Sistemi Son --------------------//

//-------------------- Mod Log Sistemi --------------------//

client.on("channelCreate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`salvomodlog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal oluşturuldu`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL
    );
  c.send(embed);
});

client.on("channelDelete", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`salvomodlog_${channel.guild.id}`)
  );
  if (!c) return;
  let embed = new Discord.MessageEmbed()
    .addField(
      `Kanal silindi`,
      ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL
    );

  c.send(embed);
});

client.on("channelNameUpdate", async channel => {
  const c = channel.guild.channels.cache.get(
    db.fetch(`salvomodlog_${channel.guild.id}`)
  );
  if (!c) return;
  var embed = new Discord.MessageEmbed()
    .addField(
      `Kanal İsmi değiştirildi`,
      ` Yeni İsmi: \`${channel.name}\`\nID: ${channel.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${channel.client.user.username}#${channel.client.user.discriminator}`,
      channel.client.user.avatarURL
    );
  c.send(embed);
});

client.on("emojiCreate", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`salvomodlog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji oluşturuldu`,
      ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\nID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${emoji.client.user.username}#${emoji.client.user.discriminator}`,
      emoji.client.user.avatarURL
    );

  c.send(embed);
});
client.on("emojiDelete", emoji => {
  const c = emoji.guild.channels.cache.get(
    db.fetch(`salvomodlog_${emoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji silindi`,
      ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\nID: ${emoji.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${emoji.client.user.username}#${emoji.client.user.discriminator}`,
      emoji.client.user.avatarURL
    );

  c.send(embed);
});
client.on("emojiUpdate", (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(
    db.fetch(`salvomodlog_${newEmoji.guild.id}`)
  );
  if (!c) return;

  let embed = new Discord.MessageEmbed()
    .addField(
      `Emoji güncellendi`,
      ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\nID: ${oldEmoji.id}`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`,
      newEmoji.client.user.avatarURL
    );

  c.send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  const channel = guild.channels.cache.get(db.fetch(`salvomodlog_${guild.id}`));
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
    .addField(
      `Kullanıcı banlandı`,
      ` İsmi: \`${user.username}\`\n ID: **${
        user.id
      }**\n Sebep: **${entry.reason || "Belirtmedi"}**\n Banlayan: **${
        entry.executor.username
      }#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${entry.executor.username}#${entry.executor.discriminator} tarafından`,
      entry.executor.avatarURL
    );

  channel.send(embed);
});

client.on("guildBanRemove", async (guild, user) => {
  const channel = guild.channels.cache.get(db.fetch(`salvomodlog_${guild.id}`));
  if (!channel) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
    .addField(
      `Kullanıcının banı açıldı`,
      ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`
    )
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${entry.executor.username}#${entry.executor.discriminator} tarafından`,
      entry.executor.avatarURL
    );

  channel.send(embed);
});
client.on("messageDelete", async message => {
  if (message.author.bot) return;

  const channel = message.guild.channels.cache.get(
    db.fetch(`salvomodlog_${message.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .setAuthor(
      `${message.author.username}#${message.author.discriminator}`,
      message.author.avatarURL
    )
    .setTitle("Mesaj silindi")
    .addField(
      `Silinen mesaj : ${message.content}`,
      `Kanal: ${message.channel.name}`
    )
    //  .addField(`Kanal:`,`${message.channel.name}`)
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${message.client.user.username}#${message.client.user.discriminator}`,
      message.client.user.avatarURL
    );

  channel.send(embed);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (oldMessage.content == newMessage.content) return;

  const channel = oldMessage.guild.channels.cache.get(
    db.fetch(`salvomodlog_${oldMessage.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ", `${oldMessage.content}`)
    .addField("Yeni mesaj : ", `${newMessage.content}`)
    .addField("Kanal : ", `${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("Black")
    .setFooter(
      `${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,
      `${oldMessage.client.user.avatarURL}`
    );

  channel.send(embed);
});

client.on("roleCreate", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`salvomodlog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setColor("Black")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter(
      `${role.client.user.username}#${role.client.user.discriminator}`,
      role.client.user.avatarURL
    );

  channel.send(embed);
});

client.on("roleDelete", async role => {
  const channel = role.guild.channels.cache.get(
    db.fetch(`salvomodlog_${role.guild.id}`)
  );
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
    .addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)
    .setTimestamp()
    .setColor("Black")
    .addField("Rol renk kodu : ", `${role.hexColor}`)
    .setFooter(
      `${role.client.user.username}#${role.client.user.discriminator}`,
      role.client.user.avatarURL
    );

  channel.send(embed);
});
client.on("voiceStateUpdate", (oldMember, newMember) => {
  // if (!logA[oldMember.guild.id]) return;

  if (db.has(`salvomodlog_${oldMember.guild.id}`) === false) return;

  var kanal = oldMember.guild.channels.cache.get(
    db
      .fetch(`salvomodlog_${oldMember.guild.id}`)
      .replace("<#", "")
      .replace(">", "")
  );
  if (!kanal) return;

  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;

  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    const embed = new Discord.MessageEmbed()
      .setColor("Black")
      .setDescription(
        `${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`
      );
    kanal.send(embed);
  } else if (newUserChannel === undefined) {
    const embed = new Discord.MessageEmbed()
      .setColor("Black")
      .setDescription(
        `${newMember.user.tag} adlı kullanıcı sesli kanaldan çıkış yaptı!`
      );
    kanal.send(embed);
  }
});
//-------------------- Mod Log Sistemi Son --------------------//

//--------------------Kayıt Başlangiç--------------------//

client.on("guildMemberAdd", async (member, guild, message) => {
  let kayıtsız = await db.fetch(`kayıtsızRol.${member.guild.id}`);
  if (!kayıtsız || kayıtsız.toLowerCase() === "yok") return;
  else {
    try {
      member.roles.add(member.guild.roles.cache.get(kayıtsız));
    } catch (e) {
      console.log(e);
    } //Literary
  }
});

client.on("guildMemberAdd", async (member, guild, message) => {
  var randomMsg = [
    "az önce kayarak sunucuya girdi!",
    "Pizza getirmişsindir umarım!",
    //Literary
    "Geldi ve bütün dertler bitti..",
    "Geldi ve bize rest çekti..",
    //Literary
    "Herkes seni bekliyordu!",
    "Kanka son maceran nasıldı?",
    "Geldiğine göre artık sohbet edebiliriz. ^^"
    //Literary
  ];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];
  let user = client.users.cache.get(member.id);
  require("moment-duration-format");

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (kurulus < 604800000) kontrol = "Şüpheli!";
  if (kurulus > 604800000) kontrol = "Güvenilir!";

  moment.locale("tr-TR");
  let yetkili = await db.fetch(`yetkiliRol.${member.guild.id}`);
  let kanal = await db.fetch(`kayıtKanal.${member.guild.id}`);
  if (!yetkili || yetkili.toLowerCase() === "yok") return;
  else {
    try {
      if (!kanal) return;
      let kanale = client.channels.cache.get(kanal);

      kanale.send(
        `<@${member.user.id}> **${randomMsg_integer}** \nSeninle birlikte \`${
          member.guild.memberCount
        }\` kişiyiz! \nKayıt için **isimini** ve **yaşını** yazıp, **ses** teyiti vermen yeterlidir! \n<@&${yetkili}> Ekibimiz sizinle ilgilenecektir! \nHesap Durumu **${moment
          .utc(member.createdAt)
          .format("LLLL")} - ${kontrol}** `
      );
    } catch (e) {
      console.log(e);
    }
  }
});

/////ETIKETLENINCE PREFIX////

client.on("message", msg => {
  //let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const westrabumbe = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Prefixim:\`\`\!\`\`\n Yardım için:\`\`\!yardım\`\`\ `);
  if (
    msg.content.includes(`<@${client.user.id}>`) ||
    msg.content.includes(`<@!${client.user.id}>`)
  ) {
    msg.channel.send(westrabumbe);
  }
});
////////ETIKETLNINCE PREFIX///////

// AYARLANABİLİR KAYIT KANAL //
// AYARLANABİLİR KAYIT KANAL //
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let kanal = db.fetch(`kayıthg_${member.guild.id}`);
  let kayıtçı = db.fetch(`kayıtçırol_${member.guild.id}`);
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;

  let user = client.users.cache.get(member.id);
  require("moment-duration-format");

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const ayyy = moment.duration(kurulus).format("M");
  var kontrol = [];

  if (ayyy < 1) {
    kontrol = "**Şüpheli** <a:carpi:784010751441895444>";
  }
  if (ayyy > 1) {
    kontrol = "**Güvenilir** <a:onayli:784010820203446292>";
  }

  if (!kanal) return;

  ///////////////////////

  let randomgif = [
    "https://media.discordapp.net/attachments/744976703163728032/751451554132918323/tenor-1.gif",
    "https://media.discordapp.net/attachments/744976703163728032/751451693992116284/black.gif",
    "https://media.discordapp.net/attachments/765870655958548490/765871557993824256/tumblr_ozitqtbIIf1tkflzao1_540.gif",
    "https://media.discordapp.net/attachments/765870655958548490/765871565257965578/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f32622f61352f31312f32626135313161663865.gif"
  ];

  ///////////////////
  const embed = new Discord.MessageEmbed()
    .setColor("36393F")
    .setImage(randomgif[Math.floor(Math.random() * randomgif.length)])
    .setThumbnail(
      user.avatarURL({
        dynamic: true,
        format: "gif",
        format: "png",
        format: "jpg",
        size: 2048
      })
    )

    .setDescription(
      `<a:Selam:774697312073023498> **Hoşgeldin!** ${
        member.user
      }, seninle beraber **${
        guild.memberCount
      }** kişi olduk! \n <a:purplediamond:784010695116455976> Kaydının yapılması için  **İsim** ve **Yaş** Yazman Gerek. \n <a:loading:784869551288090645>  Hesap Kuruluş: **${moment(
        user.createdAt
      ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
        user.createdAt
      ).format(
        "YYYY HH:mm:ss"
      )}** \n <a:registerbook:784010687608782849> Bu vatandaş: ${kontrol} \n <a:tac:784010850716483634> <@&${kayıtçı}> Rolundeki Yetkililer Sizinle İlgilecektir

  `
    );

  client.channels.cache.get(kanal).send(embed);
  client.channels.cache.get(kanal).send(`<@&${kayıtçı}>`);
});
//kayıt kanal son //

//afk-sistem başlangıç//

require("moment-duration-format");
moment.locale("tr");
client.on("message", message => {
  let üye = message.mentions.users.first();
  if (üye) {
    if (message.author.bot || message.channel.type == "dm") return;
    if (db.get(`kisi.${üye.id}.afk`)) {
      const afkEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**${üye} AFK** \n**ŞU KADAR SÜREDİR AFK:**${moment
            .duration(
              db.get(`kisi.${üye.id}.afk.sure`) - Date.now(),
              "milliseconds"
            )
            .format("d [gün], h [saat], m [dakika], ss [saniye]")
            .replace("-", "")}\n**AFK OLMA SEBEBİ:**${db.get(
            `kisi.${üye.id}.afk.sebep`
          )} `
        );
      message.channel.send(afkEmbed);
    }
  }

  if (message.content.startsWith(ayarlar.prefix + "afk")) return;
  if (db.get(`kisi.${message.author.id}.afk`)) {
    if (message.author.bot || message.channel.type == "dm") return;
    const afkEmbed = new Discord.MessageEmbed().setColor("BLUE").setDescription(
      `**AFK İŞLEMİ BİTTİ** ${
        message.author
      } \n **ŞU KADAR SÜREDİR AFK SIN:**${moment
        .duration(db.get(`kisi.${message.author.id}.afk.sure`) - Date.now())
        .format("d [gün], h [saat], m [dakika], ss [saniye]")
        .replace("-", "")}`
    );
    message.channel.send(afkEmbed);
    message.member.setNickname(
      `${db.get(`kisi.${message.author.id}.afk.oldNick`)}`
    );
    db.delete(`kisi.${message.author.id}.afk`);
  }
});
//afk-sistem son//

//ROL VE KANAL KORUMA
client.on("roleCreate", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  let rol = await db.fetch(`rolrol_${role.guild.id}`);
  let kontrol = await db.fetch(`dil_${role.guild.id}`);
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.delete();

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Rol`, role.name)
      .addField(`Sonuç`, `Rol Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
  } else {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.delete();

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Açıldı!`)
      .setColor("BLACK")
      .addField(`Rolu Açan`, entry.executor.tag)
      .addField(`Açılan Rol`, role.name)
      .addField(`Sonuç`, `Açılan Rol Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
  }
});

client.on("channelDelete", async channel => {
  let kontrol = await db.fetch(`dil_${channel.guild.id}`);
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.channels.create(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Silen`, entry.executor.tag)

      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Açıldı!`)

      .setColor("BLACK");
    client.channels.cache.get(kanal).send(embed);
  } else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.channels.create(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Kanalı Silen`, entry.executor.tag)
      .setColor("BLACK")
      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Silinen Kanal Geri Açıldı!`);
    client.channels.cache.get(kanal).send(embed);
  }
});

client.on("channelCreate", async channel => {
  let kontrol = await db.fetch(`dil_${channel.guild.id}`);
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
  } else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Kanalı Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Açılan Kanal Geri Silindi`);
    client.channels.cache.get(kanal).send(embed);
  }
});
// Ban ve Rol Koruma Devam
client.on("guildBanAdd", async (guild, user) => {
  let kontrol = await db.fetch(`dil_${guild.id}`);
  let kanal = await db.fetch(`bank_${guild.id}`);
  let rol = await db.fetch(`banrol_${guild.id}`);
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    guild.members.unban(user.id);
    guild.members.cache.get(entry.executor.id).kick();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Biri Yasaklandı!`)
      .setColor("BLACK")
      .addField(`Yasaklayan`, entry.executor.tag)
      .addField(`Yasaklanan Kişi`, user.name)
      .addField(
        `Sonuç`,
        `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!`
      );
    client.channels.cache.get(kanal).send(embed);
  } else {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    guild.members.unban(user.id);
    guild.members.cache.get(entry.executor.id).kick();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Biri Yasaklandı!`)
      .setColor("BLACK")
      .addField(`Yasaklayan`, entry.executor.tag)
      .addField(`Yasaklanan Kişi`, user.name)
      .addField(
        `Sonuç`,
        `Yasaklayan Kişi Sunucudan Atıldı ve yasaklanan kişinin yasağı kalktı `
      );
    client.channels.cache.get(kanal).send(embed);
  }
});
client.on("roleDelete", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  let rol = await db.fetch(`rolrol_${role.guild.id}`);
  let kontrol = await db.fetch(`dil_${role.guild.id}`);
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.guild.roles
      .create({
        data: {
          name: role.name
        }
      })
      .then(r => r.setPosition(role.position));

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Silindi!`)
      .setColor("BLACK")
      .addField(`Silen`, entry.executor.tag)
      .addField(`Silinen Rol`, role.name)
      .addField(`Sonuç`, `Rol Geri Açıldı!`);
    client.channels.cache.get(kanal).send(embed);
  } else {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.guild.roles
      .create({
        data: {
          name: role.name
        }
      })
      .then(r => r.setPosition(role.position));

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Silindi!`)
      .setColor("BLACK")
      .addField(`Silen`, entry.executor.tag)
      .addField(`Silinen Rol`, role.name)
      .addField(`Sonuç`, `Silinen Rol Geri Açıldı!`);
    client.channels.cache.get(kanal).send(embed);
  }
});

// spam engel başlangıç

const dctrat = require("dctr-antispam.js");

var authors = [];
var warned = [];

var messageLog = [];

client.on("message", async message => {
  const spam = await db.fetch(`spam.${message.guild.id}`);
  if (!spam) return;
  const maxTime = await db.fetch(
    `max.${message.guild.id}.${message.author.id}`
  );
  const timeout = await db.fetch(
    `time.${message.guild.id}.${message.author.id}`
  );
  db.add(`mesaj.${message.guild.id}.${message.author.id}`, 1);
  if (timeout) {
    const sayı = await db.fetch(
      `mesaj.${message.guild.id}.${message.author.id}`
    );
    if (Date.now() < maxTime) {
      const westraaaaam = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `<a:hayir:784010683502952479> <@${message.author.id}> , **Bu Sunucuda Spam Yapmak Yasak!**`
        )
        .setFooter(`Bu mesaj otomatik olarak silinecektir.`);

      message.channel
        .send(westraaaaam)
        .then(msg => msg.delete({ timeout: 1500 }));
      return message.delete();
    }
  } else {
    db.set(`time.${message.guild.id}.${message.author.id}`, "ok");
    db.set(`max.${message.guild.id}.${message.author.id}`, Date.now() + 3000);
    setTimeout(() => {
      db.delete(`mesaj.${message.guild.id}.${message.author.id}`);
      db.delete(`time.${message.guild.id}.${message.author.id}`);
    }, 500); // default : 500
  }
});

// spam engel bitiş

//emoji-engel başlangıç

client.on("emojiDelete", async (emoji, message) => {
  
  let kanal = await db.fetch(`emotek_${emoji.guild.id}`);
  if (!kanal) return;
  
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;
  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
    
   let embbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle(`Bir Emoji Silindi`)
   .setDescription(`Silinen Emoji: ${emoji.name}, Emoji Koruma Sistemi Açık Olduğundan Tekrar Eklendi!`)
   message.client.channels.cache.get(kanal).send(embbed)
  
  }

});

//emoji-engel bitiş

//fake-hesap-engel başlangıç

client.on("guildMemberAdd", async (member, message, msg) => {
  const fakehesapp = db.fetch(`fake_${member.guild.id}`);

  if (fakehesapp == "açık") {
    var moment = require("moment");
    require("moment-duration-format");
    moment.locale("tr");
    var { Permissions } = require("discord.js");
    var x = moment(member.user.createdAt)
      .add(30, "days")
      .fromNow();
    var user = member.user;
    x = x.replace("birkaç saniye önce", " ");
    if (!x.includes("önce") || x.includes("sonra") || x == " ") {
      let rol = db.fetch(`fakerol_${member.guild.id}`);
      member.user.send(
        "<a:brave:785596975533260820> Hesabınız 30 günden önce açıldığı için cezalıya atıldınız, yetkililere bildirerek açtırabilirsiniz."
      );

      
      let kanalcık = await db.fetch(`fakekanal_${member.guild.id}`);
      let kanal = member.guild.channels.cache.find(r => r.id === kanalcık);
      
      
      const embedd = new Discord.MessageEmbed()
      .setTitle("Fake hesap yakalandı!")
        .setTimestamp()
        .setDescription(
          `<a:onayli:784010820203446292> Bir fake hesap sisteme yakalandı ve rolü verildi. **${member}**`)
        .setTimestamp()
        .setColor("#E8C02A");
      kanal.send(embedd);
      member.roles.add(rol);
    } else {
    }
  }
});

//fake-hesap-engel bitiş

//mute-sistemi
client.on('roleDelete', async role => {
const data = await require('quick.db').fetch(`carl-mute-role.${role.guild.id}`);
if(data && data === role.id) require('quick.db').delete(`carl-mute-role.${role.guild.id}`); 
});
//--------------------SON --------------------//
