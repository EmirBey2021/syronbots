const Discord = require('discord.js');
const db = require('wio.db')

exports.run = (client,message,args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setColor("#E8C02A")
      .setDescription(`<a:carpi:784010751441895444> Bu komutu kullanmak için \`Yönetici\` yetkisine sahip olmalısın.`)
    message.channel.send(embed)
    return;
  }
  
const boş = args.slice(0).join(' ')

if(!boş) return message.channel.send(
       new Discord.MessageEmbed()
     .setColor("#E8C02A")
     .setTitle('Hata ')
     .setDescription('<a:carpi:784010751441895444> Yanlış kullanım! \nKullanabileceklerin: `aç`,`kapat`,`kanal`,`role`'))
  
 if(args[0] == "aç") {
db.set(`fake_${message.guild.id}`, "açık")
message.channel.send(
    new Discord.MessageEmbed()
    .setColor("#E8C02A")
    .setTitle('Başarıyla')
    .setDescription('<a:onayli:784010820203446292> Başarıyla fake hesap sistemini açıldı.')
)
 }
 if(args[0] == "kapat") {
db.delete(`fake_${message.guild.id}`)
message.channel.send(
    new Discord.MessageEmbed()
    .setColor("#E8C02A")
    .setTitle('Başarıyla')
    .setDescription('<a:onayli:784010820203446292> Başarıyla fake hesap sistemini kapattım.')
)
 }
 if(args[0] == "kanal") {
const kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("#E8C02A")
    .setTitle('Hata:')
    .setDescription('Lütfen bir kanal etiketle!')
)
db.set(`fakekanal_${message.guild.id}`, kanal.id)
message.channel.send(
    new Discord.MessageEmbed()
    .setColor("#E8C02A")
    .setTitle('Başarıyla')
    .setDescription(`<a:onayli:784010820203446292> Fake hesap kanalını ${kanal} olarak ayarladım.`))
 }
 if(args[0] == "role") {
    const rol = message.mentions.roles.first()
    if(!rol) return message.channel.send(
        new Discord.MessageEmbed()
        .setColor("#E8C02A")
        .setTitle('Hata ')
        .setDescription('<a:carpi:784010751441895444> Lütfen bir rol etiketle!')
    )
   
    db.set(`fakerol_${message.guild.id}`, rol.id)
    message.channel.send(
        new Discord.MessageEmbed()
        .setColor("#E8C02A")
        .setTitle('Başarıyla ')
        .setDescription(`<a:onayli:784010820203446292> Fake hesap rolünü ${rol} olarak ayarladım.`))
     }
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'fake-hesap'
}
