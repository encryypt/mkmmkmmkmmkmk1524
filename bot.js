const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('💕 بسم اللة الرحمن الرحيم 💕','https://www.twitch.tv/TEST-Broadcast');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.login('NjI4MDA5Njg3NTMwNjAyNDk2.XbJt1A.bfGp0GZ57AXmhwleNyrTbvZm__Q');


client.on('guildMemberRemove', Sal => { //By Salto7#4595
  var embed = new Discord.RichEmbed()
  .setAuthor(Sal.user.username, Sal.user.avatarURL)
  .setThumbnail(Sal.user.avatarURL)
  .setImage('https://previews.123rf.com/images/dxinerz/dxinerz1509/dxinerz150901337/45612790-bye-goodbye-icon.jpg') //هنا حط الصوره الي تبيها
  .setTitle('خرج عضو')
  .setDescription('الله معك مع السلامه')
  .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
  .addField('``تاق العضو``', Sal.user.discriminator, true)
  .addField('``تم الانشاء في``', Sal.user.createdAt, true)
  .addField(' 👤 الان ',`**[ ${Sal.guild.memberCount} ]**`,true)
  .setColor('RED')
  .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
  var channel =Sal.guild.channels.find('name', '𝕎𝔼𝕃ℂ𝕆𝕄𝔼') // هنا حط اسم الروم الي تبيه يكتب فيه
  if (!channel) return;
  channel.send({embed : embed});
  });
    client.on("guildMemberAdd", function(member) {
  const channel = member.guild.channels.find("name", "ℂℍ𝔸𝕋")
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(member.user.tag, member.user.avatarURL)
.setDescription('*** :heart:  ولكم نورت السيرفر يا قلبي نتمني لك الاستمتاع في السيرفر***')
.setThumbnail(member.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/505825536837419010/505826495634210826/PicsArt_10-27-03.png')
      if (!channel) return;
      channel.sendEmbed(embed);
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:hearts:منور السيرفر:hearts:
:crown:اسمك:crown: : ${member}  
أنت العضو رقم: : ${member.guild.memberCount} `) 
}).catch(console.error)
})
const adminprefix = "^";
const devs = ['430860058591756289','480184422386237451'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});
client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted'));
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`by`,`ALPHACODES`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500)
   
       
    }
    }
})
