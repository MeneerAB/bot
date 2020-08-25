// Calling the package
var Discord = require("discord.js");
var bot = new Discord.Client();

// Listener Event: Message Received (Runs every msg)
bot.on('message', message => {

    

    //Variables
    var sender = message.author; // Msg sender
    
// Calling the package
var Discord = require("discord.js");
var bot = new Discord.Client();
var client = new Discord.Client();



// Listener Event: Message Received (Runs every msg)
bot.on('message', message => {

    

    //Variables
    var sender = message.author; // Msg sender
    var msg = message.content.toLowerCase(); //  Msg uppercase
    var prefix = "~" // The text before commands
    

    if (!message.content.startsWith(prefix)){
         return;
    }

    if(sender.id === '732619827629522974') {
        return; 
    }

    if (msg === prefix + "shutdown") {
        if (message.author.id === "400734569495658507") {
                console.log('But is shutting down')
                message.channel.send('Bot is shutting down')
                process.exit();
            
        }   
        else { 
            message.channel.send('You arent my owner, dont play games')
            console.log(`${message.author.username} (${message.author.id}) tried to shut the bot down at ${new Date()}`)
            return; 
        }
    }

    //Ping / Pong command
    if (msg === prefix + 'ping') {
        message.channel.send({embed:{
            title:'Ping',
            description: `Pong!: ${Math.round(bot.ws.ping)} ms`,
            color: 0xA0412D,
            timestamp: new Date(),
            footer: { 
             text: `Requested by ${message.author.username} `
            }
        }})}

        if (msg === prefix + 'invite') {
            message.channel.send({embed:{
                title:'Invite',
                url:  'https://discord.com/oauth2/authorize?client_id=732619827629522974&scope=bot&permissions=2146958847',
                color: 0xA0412D,
                timestamp: new Date(),
                footer: { 
                 text: `Requested by ${message.author.username} `
                }
            }})
            }
            
        if (msg === prefix + 'spacecool?') { 
            message.channel.send({embed:{
                title: 'Yes',
                color: 0xA0412D,
                image: {
                    url: 'https://preview.redd.it/balstg2lsy651.jpg?width=960&crop=smart&auto=webp&s=8348f36f2a51cddedf423673d3805ad7b3d789f3'
                }
               
            }})
                
            
        }

        if (msg === prefix + "spacenotcool?") {
            message.channel.send(`${message.author} go f*ck yourself`)
        }
    
   


    if (msg === prefix + "howdoistream?") 
        message.channel.send({embed:{
            title:'How do I stream?',
            color: 0xA0412D,
            fields:[
                {
                   name: "You read the wiki",
                  value: "[this one](https://www.reddit.com/r/pan/wiki/index)"
              }
            ],
            timestamp: new Date(),
            footer: { 
             text: `Requested by ${message.author.username} `
            }
    }})

   if (msg === prefix + 'help' || (msg === prefix + 'commands')) {
        message.channel.send({embed:{
            title: 'List of my commands',
            color: 0xA0412D,
            fields:[
                {
                    name: '`help/commands` - gives this list '
                },
                {
                    name: '`spacecool?` - tells you the truth'
                },
                {
                    name: '`spacenotcool?` - tells you the truth again' 
                },
                {
                    name: '`howdoistream?` - tells you how to stream on rpan '
                },
                {
                    name: '`ping` - tells you my ping '
                },
                {
                    name: '`invite` - sends you my invite link ', 
                },
                {
                    name: '`info` - gives you info about the bot '
                }

            ],
            timestamp: new Date(),
            footer: {
                text: `requested by ${message.author.username}`
            }

        
        }})
   }

   if (msg === prefix + 'info')
        message.channel.send({embed:{
            title: 'Info about me',
            color: 0xA0412D,
            fields: [
                {
                    name: 'My developer is MeneerAB',
                    value: '[My github] (https://github.com/MeneerAB/bot/blob/master/bot.js) '
                }
            ],
            timestamp: new Date(),
            footer: {
                text: `requested by ${message.author.username}`
            }
        }})
});

//Launch bot
bot.on('ready', () => {
    console.log('Bot Launched...') // Runs when bot is launched

    bot.user.setStatus("dnd") // Online, idle, invisible or dnd
    
    bot.user.setActivity("~help")
    bot.user.setActivity('My developers screams', { type: 'LISTENING' });

});


// Login
bot.login("not telling ya") 
