// Calling the package
var Discord = require("discord.js");
var bot = new Discord.Client();

// Listener Event: Message Received (Runs every msg)
bot.on('message', message => {

    

    //Variables
    var sender = message.author; // Msg sender
    var msg = message.content.toLowerCase(); //  Msg uppercase
    var prefix = "~" // The text before commands
    


    if(sender.id === '732619827629522974') {
        return; 
    }

    //Ping / Pong command
    if (msg === prefix + 'ping') {
        message.channel.send({embed:{
            title:'Ping',
            description: `Pong!: ${bot.ping} ms`,
            color: 0xA0412D,
            timestamp: new Date(),
            footer: { 
             text: `Requested by ${message.author.username} `
            }
        }})


        


}

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
            
            if (msg === prefix + 'spacecool?')
                message.channel.send('he is super cool and the best boy')

    if (message.channel.id === 'id here') {
        if (isNaN(message.content)) {
            message.delete() 
            message.author.send("Only numbers you idiot")
        }
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

    if (msg === prefix + "help" || "commands" )
    message.channel.send({embed:{
        title:'List of my commands',
        color: 0xA0412D,
        fields:[
            {
                name: "`Help/Commands`",
                value: "Gives this list"
            },
            {
                name: "`ping`",
                value: "Gives my ping",
            },
            {
                name: "`invite`",
                value: "gives my invite link"
            },

            { 
                name: "`spacecool?`",
                value: "Tells you the truth"
            },
            { 
                name: "`howdoistream?`",
                value: "Gives you the link to rpans wiki"
            },
        ],
        timestamp: new Date(),
        footer: { 
         text: `Requested by ${message.author.username} `
        }
    }})
});

//Launch bot
bot.on('ready', () => {
    console.log('Bot Launched...') // Runs when bot is launched

    bot.user.setStatus("dnd") // Online, idle, invisible or dnd
    
    bot.user.setActivity("~help")


});


// Login
bot.login("NzMyNjE5ODI3NjI5NTIyOTc0.Xw35QQ.got0dx7xqUw-mBy8HcSuU-iJGnQ") 