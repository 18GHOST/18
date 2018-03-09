const discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    var servers = client.guilds.array().map(g => g.name).join('.');
    console.log("========================\n[!]Je fonctionne");
    client.user.setGame("18|GHOST_ROLEPLAY")
    });
//VSAV
 client.on('message',message =>{
      if(message.content.startsWith('#1')){
        message.channel.send({embed:{
          title: 'VSAV',
          description: 'PARTIT',
          color: 0xff090f,
          thumbnail:{
          url : "http://up.autotitre.com/86e3caf4f8.jpg"}
          }})
}});

client.on('message',message =>{
      if(message.content.startsWith('aide')){
        message.channel.send({embed:{
          title: '18',
          description: 'Les Pompier bonjour que se passe t`il?',
          color: 0xff090f,
          thumbnail:{
          url : "http://p5.storage.canalblog.com/56/27/118811/116341477_o.jpg"
        }
          }})
        }
    });


client.on('message', function(message) { 
  if (message.content == "stop") { 
    if (message.member.hasPermission("MANAGE_MESSAGES")) { 
      message.channel.fetchMessages() 
      .then(function(list){ 
        message.channel.bulkDelete(list); }, 
        function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")}) 
    } 
  } 
});
client.on('message', function(message) { 
  if (message.content == "test2") { 
    if (message.member.hasPermission("MANAGE_MESSAGES")) { 
      message.channel.fetchMessages() 
      .then(function(list){ 
        message.channel.bulkDelete(2); }, 
        function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")}) 
      message.channel.send({embed:{
        title:'..... Reste annonyme',
        description:'à acheter de la drogs',
      }

      }
      )
    } 
  } 
  
});




client.login(token);
