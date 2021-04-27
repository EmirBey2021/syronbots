// kullan kızmıyorum

const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<a:carpi:784010751441895444>  Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(sistem) return message.channel.send(nn.setDescription(`<a:carpi:784010751441895444> Spam engelleme zaten aktif. Daha neyi açmaya çalışıyorsun?`)).then(a => a.delete({timeout: 10000}));

data.set(`spam.${message.guild.id}`, 'codare');
return message.channel.send(nn.setTitle(`İşte bu kadar!`).setColor('#000001').setDescription(`<a:onayli:784010820203446292> Spam kısıtlaması başarıyla açıldı.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam-engel', 'spamengel'],
  permLevel: 0
}

exports.help = {
  name: 'spam'
};