const discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new discord.Client();
const token = "NDIwNjY3ODc3OTIyNzAxMzEz.DYGJbw.K8rMynxl-5_Co-lxzqbd9jeb0qQ";

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

client.on('message',message =>{
      if(message.content.startsWith('`test')){
        var mentionned = message.mentions.users.first();
        var getvalueof;
        if(mentionned){
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }
        message.channel.sendMessage({
          embed: {
            type: 'rich',
            description: '',
            fields: [{
              name: 'VSAV:',
              value: 'PARTIT',
              inline: true
              
            },
            {
              type:'rich',
              description:'',
              name:'test',
              value:'22ans'
              
            },
          ],
          image: {
            url: 'https://media.discordapp.net/attachments/419986298691125268/420958268312125440/Screenshot_2018-03-07-16-00-05-1.png'
              },
                color: 0x21177D,
                footer: {
                  text: '17|GHOST_ROLEPLAY',
                  
                },
                
          }  
        })
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




client.login(token);