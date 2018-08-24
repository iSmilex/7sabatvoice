const Discord = require('discord.js');
const first = new Discord.Client();

first.channels.get("482239001173164042").connect();

client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '468167578855014411') return;

  member.guild.channels.get("481942220191170580").send(`** Welcome To __Dynasty__ Server , Have a precious time**. :tada:`);
});

first.login("NDgyMzg1ODc4MjkxODQxMDQ1.DmEVWQ.WO8eETMNBRcrYxxlNHzFDiKH-Is");

const second = new Discord.Client();

client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '468167578855014411') return;

  member.guild.channels.get("481942220191170580").send(`** Welcome To __Dynasty__ Server , Have a precious time**. :tada:`);
});


second.channels.get("482238987344543755").connect();

second.login("NDgyNDAwNjA5ODI0NDA3NjEw.DmEXQA.q6XMDxgz7-uVdStJaiuMOChuwNA");
