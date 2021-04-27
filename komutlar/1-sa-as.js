const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
     
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('**Sa-As ayarlamak için;** `!sa-as aç yada kapat!`'))
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
    message.channel.send(new Discord.MessageEmbed().setDescription(`Başarıyla SA-AS açtınız, artık bot \`sa\` yazıldığında otomatik \`Aleyküm Selam\` diyecek.**`))
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
    message.channel.send(new Discord.MessageEmbed().setDescription(`Başarıyla Sa-As Sistemini kapattınız, artık bot \`sa\` yazıldığında cevap vermeyecek.`))
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Sa-as',
  usage: 'taslak'
};