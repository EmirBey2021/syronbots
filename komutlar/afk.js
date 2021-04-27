const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment-duration-format');

exports.run = function(client, message, args) {
  if(message.author.bot || message.channel.type == "dm") return;
  let sebep = args.join(" ")
  if(sebep){
    db.set(`kisi.${message.author.id}.afk`, {sure: Date.now(), sebep: sebep, oldNick: message.member.nickname})
    message.member.setNickname(`[AFK]` + message.member.nickname)
    message.reply(new Discord.MessageEmbed().setColor("BLUE").setDescription("Başarı ile AFK moduna geçtiniz."))
  }else{
    db.set(`kisi.${message.author.id}.afk`, {sure: Date.now(), sebep: "Sebep Belirtilmemiş.", oldNick: message.member.nickname})
    message.member.setNickname(`[AFK]` + message.member.nickname)
    message.reply(new Discord.MessageEmbed().setColor("BLUE").setDescription("Başarı ile AFK moduna geçtiniz."))

  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["afk"],
  permLevel: 0,
  premium: false
};

exports.help = {
  name: "afk",
  description: "Afk",
  usage: "afk"
};