const Discord = require('discord.js');
const client = new Discord.Client()

client.on('guildMemberAdd', (member) => {
    let channel = client.channels.find(ch=> ch.name === '👋-welcome-👋')

    const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle("Welcome to Red Phoenix's kingdom " + member.displayName)
    .setDescription("You are now About to join the Greatest kingdom That was ever made (Red Phoenix's kingdom)")
    .setThumbnail(member.user.displayAvatarURL)
    .setTimestamp()
    .addBlankField()
    .addField("Have fun!", "But Make sure to read the rules!")

    channel.send(embed)
})



client.on('message', message => {
    if(message.content.toLowerCase().startsWith("$kick"))
    {
        const user = message.mentions.users.first();
        if(!message.member.hasPermissions(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.reply("You have no permission!")
        if(!user) return message.reply("Please mention someone")

        if(user)
        {   
            
        message.reply(user.tag + " Got kicked from the server!")
        .then(message.guild.member(user).kick())
        }  
    }
})
client.on('message', message => {
    if(message.content.toLowerCase().startsWith("$ban"))
  {
      const user = message.mentions.users.first();
      if(!message.member.hasPermissions(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("You have no permission!")
      if(!user) return message.reply("Please mention someone")
      if(user)
      {         
              
     message.reply(user.tag + " Got banned from the server!")         
    .then(message.guild.member(user).ban())
     }
} 
})


client.on('message', message => {
    if(message.content.toLowerCase().startsWith("$mute"))
   {
       const user = message.mentions.users.first();
       if(user)
       {
        if(!message.member.hasPermissions(["MUTE_MEMBERS", "ADMINISTRATOR"])) return message.reply("You have no permission!")

        const member = message.guild.member(user)
        if(member)
        {
           const role = message.guild.roles.find(r=> r.name === "Muted")

           member.addRole(role)
           message.reply("Muted" + user.tag)
        }
       } 
   }
})

client.on('message', message => {
    if(message.content.toLowerCase().startsWith("$unmute"))
   {
       const user = message.mentions.users.first();
       if(!message.member.hasPermissions(["MUTE_MEMBERS", "ADMINISTRATOR"])) return message.reply("You have no permission!")

       if(user)
       {
          
        const member = message.guild.member(user)
        if(member)
        {
           const role = message.guild.roles.find(r=> r.name === "Muted")

            member.removeRole(role)
           message.reply("Unmuted" + user.tag)
        }
       } 
   }
})

client.on('message', message => {
    if(message.content.toLowerCase() === "$purge")
    {
       if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.reply('Sorry u have no permission!')

        message.channel.bulkDelete(100).then(msg => message.reply(`Deleted ${msg.size}`)).then(msg => {
            msg.delete(2000)
          })
        
        

    }
})



console.log('ready')

client.login('NjA2MjYzMTkxNzcyODU2MzQx.XUIh8A.nQVewUJiQVUGo8ef4SF0p76XP6s');
