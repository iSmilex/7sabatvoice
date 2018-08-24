const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',async () => {
client.channels.find(f => f.id === "482238021069176832" && f.type === 'voice').join();
});

client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '468167578855014411') return;

  member.guild.channels.get("481942220191170580").send(`** Welcome To __Dynasty__ Server , Have a precious time**. :tada:`);
});

client.login("NDgyMzg1ODc4MjkxODQxMDQ1.DmEVWQ.WO8eETMNBRcrYxxlNHzFDiKH-Is");

const client2 = new Discord.Client();

client2.on('guildMemberAdd',async member => {
  if(member.guild.id !== '468167578855014411') return;

  member.guild.channels.get("481942220191170580").send(`** Welcome To __Dynasty__ Server , Have a precious time**. :tada:`);
});

client2.on('ready',async () => {
client2.channels.find(f => f.id === "482238021069176832" && f.type === 'voice').join();
});

client2.login("NDgyNDAwNjA5ODI0NDA3NjEw.DmEXQA.q6XMDxgz7-uVdStJaiuMOChuwNA");
