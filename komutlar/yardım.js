const Discord = require("discord.js")
const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")
  
  .setDescription(`• | Merhaba ${message.author},\n• | Prefixim: **!**\n• | Dilim: **Türkçe**`)
  .setTitle('Syron Yardım Menüsü')
  .addField("<:belge:821845249479016488> • | !eğlence ",`__Eğlence Komutlarını Açar__`)
  .addField("<:belge:821845249479016488> • | !kayıt",`__Kayıt Komutlarını Açar__`) 
  .addField("<:belge:821845249479016488> • | !yetkili",`__Yetkili Komutlarını Açar__`)
  .addField("<:belge:821845249479016488> • | !koruma",`__Koruma Komutlarını Açar__`)
  .addField("<:belge:821845249479016488> • | !logo",`__Logo Komutlarını Açar__`)
  .addField("<:belge:821845249479016488> • | !kullanıcı",`__Kullanıcı Komutlarını Açar__`)
  .addField("<:belge:821845249479016488> • | !moderasyon",`__Moderasyon Komutlarını Açar__`)
  .addField("<:belge:821845249479016488> • | !botlist",`__Botlist Komutlarını Açar __`)  
  .setImage("https://cdn.glitch.com/b66be396-328c-4704-8b4b-000b4333a578%2Fstandard%20(5).gif?v=1617781402606")
 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}
exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Açar',
  usage: 'yardım'
}
