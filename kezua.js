const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require("./botconfig.json");
client.login(botconfig.token);
var phrase = "$𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕";
var author = " '𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕";
var embedsColor = botconfig.EmbedsColor;
//
//
//
// ALORS PETIT FDP COMME CA TU REGARDES MON CODE ?
//
//
// CODE By smoke
//
//
//
//
//
client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setPresence({game: {name: phrase,type: " '𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕",url: "https://www.twitch.tv/smokemyweed"}});
    console.clear();
    console.log("Self bot By  '𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕");
    console.log("");
    console.log("CTRL + C - Eteindre le bot");
    console.log("Tapez ./help sur discord pour afficher l'aide");
});

client.on('message', async message => {
    if(message.author.id != client.user.id) return;
    if(message.author.bot) return;
    let messageArray = message.content.split(" "); let cmd1 = messageArray[0]; let args = messageArray.slice(1);
    if(!cmd1.startsWith("./")) return;
    let cmd = replaceAll(cmd1, "./", "");

    if(cmd.toLowerCase() == "help"){
        message.delete();
        let sicon = client.user.avatarURL;
        let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon)
        .addField("┕━ ⋆⋅☆⋅⋆ ━┑𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒆𝒔 𝑩𝒐𝒕┍━ ⋆⋅☆⋅⋆ ━┙", "'"+phrase+"'")
        .addField("./𝐡𝐞𝐥𝐩", "╚» Afficher cette aide")
        .addField("./𝖌𝖍𝖔𝖘𝖙", "╚» Permet d'effectuer des ghost ping")
        .addField("./𝐜𝐥𝐞𝐚𝐫 [𝐧𝐨𝐦𝐛𝐫𝐞]", "╚» Clear un nombre de message souhaité")
        .addField("./𝐩𝐝𝐩 [𝐦𝐞𝐧𝐭𝐢𝐨𝐧]", "╚» Récupérer la Photo de Profil de quelqu'un")
        .addField("./𝐞𝐦𝐛𝐞𝐝 [𝐬𝐭𝐫𝐢𝐧𝐠] [𝐬𝐭𝐫𝐢𝐧𝐠]", "╚» Envoyer un embed personalisé dans le chat")
        .addField("./𝐮𝐬𝐞𝐫𝐢𝐧𝐟𝐨 [𝐦𝐞𝐧𝐭𝐢𝐨𝐧]", "╚» Récupérer les infos de quelqu'un")
        .addField("./𝐬𝐩𝐚𝐦𝐜𝐡𝐚𝐧𝐧𝐞𝐥𝐬 [𝐪𝐮𝐚𝐧𝐭𝐢𝐭𝐞́𝐞] [𝐧𝐨𝐦 𝐜𝐡𝐚𝐧𝐧𝐞𝐥]", "╚» Spammer des channels dans le serveur dans lequel la commande est écrite")
        .addField("./𝐝𝐞𝐥𝐜𝐡𝐚𝐧𝐧𝐞𝐥𝐬 [𝐈𝐃 𝐒𝐞𝐫𝐯𝐞𝐮𝐫]", "╚» Supprimer tout les channels et catégories d'un serveur grâce à son ID ou celui dans lequel la commande est écrite")
        .addField("./𝐝𝐝𝐨𝐬 [𝐈𝐏] [𝐏𝐎𝐑𝐓]", "╚» Effectuer une attaque DDOS sur une IP avec un PORT")
        .addField("./𝐥𝐨𝐚𝐝 [𝐦𝐞𝐬𝐬𝐚𝐠𝐞]", "╚» Envoyer une barre de chargement avec un message")
        .addField("./𝐚𝐧𝐢𝐦 [𝐧𝐨𝐦]", "╚» Assigner un nom animé au serveur dans lequel la commande est écrite")
        .addField("./𝐬𝐩𝐚𝐦 [𝐧𝐨𝐦𝐛𝐫𝐞]", "╚» Spam un nombre de messages dans le channel actuel")
        .addField("./𝐜𝐫𝐚𝐬𝐡 [𝐦𝐞𝐬𝐬𝐚𝐠𝐞]", "╚» Tenter un crash des destinataires du message avec un message personalisé")
        .addField("./𝐠𝐞𝐭𝐢𝐜𝐨𝐧", "╚» Récupérer l'icone du serveur dans lequel la commande est écrite")
        .addField("./𝙨𝙚𝙧𝙫𝙚𝙧𝙞𝙣𝙛𝙤", "╚» Récupérer les informations d'un serveur")
        .addField("./𝐩𝐮𝐛 [𝐦𝐞𝐬𝐬𝐚𝐠𝐞]", "╚» Envoyer un message privé à tous les membres d'un serveur")
        .addField("┕━ ⋆⋅☆⋅⋆ ━┑𝑪𝒐𝒎𝒎𝒂𝒏𝒅𝒆𝒔 𝑩𝒐𝒕┍━ ⋆⋅☆⋅⋆ ━┙", "ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ");
        return message.channel.send(serverembed);
    }
    if(cmd.toLowerCase() == "ghost"){ message.delete(); }
    if(cmd.toLowerCase() == "geticon"){
        message.delete();
        if(message.guild == null){
            let sicon = client.user.avatarURL;
            let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙏𝙪 𝙙𝙤𝙞𝙨 𝙚̂𝙩𝙧𝙚 𝙙𝙖𝙣𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙚𝙪𝙧");
            return message.channel.send(serverembed);	
        }
        if(message.guild.iconURL == null) {
            let sicon = client.user.avatarURL;
            let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙇𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙣'𝙖 𝙥𝙖𝙨 𝙙'𝙞𝙘𝙤𝙣𝙚");
            return message.channel.send(serverembed);
        }
    	message.channel.send(message.guild.iconURL);
    }
    if(cmd.toLowerCase() == "pub"){
        message.delete();
        if(message.guild == null){
            let sicon = client.user.avatarURL;
            let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙏𝙪 𝙙𝙤𝙞𝙨 𝙚̂𝙩𝙧𝙚 𝙙𝙖𝙣𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙚𝙪𝙧");
            return message.channel.send(serverembed);	
        }
        if(args[0] == null) { return; }
        var msg = "";
        for(i = 0; i < args.length; i++){
            if(i == 0) { msg = args[i]; }else{ msg = msg+" "+args[i]; }
        }
        const list = client.guilds.get(message.guild.id); 
        list.members.forEach(member => console.log(member.user.send(msg)));
    }
    if(cmd.toLowerCase() == "crash"){
        message.delete();
        var msg = "𝙨𝙤𝙧𝙧𝙮 𝙗𝙭𝙩𝙘𝙝 :heart::heart::kissing_heart:";
        if(args[0] != null){
            msg = "";
            for(i = 0; i < args.length; i++){
                if(i == 0) { msg = args[i]; }else{ msg = msg+" "+args[i]; }
            }
        }
        var crash = "";
        for(i = 0; i < 5; i++){
           crash = crash + ":grinning::custard::poop::deer::sailboat::melon::clown::biohazard::cucumber::grinning::custard::poop::deer::sailboat::melon::clown::biohazard::cucumber:";
        }
        let sicon = client.user.avatarURL;
        let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField(msg, crash).addField(msg, crash);
        for(i = 0; i < 200; i++){
            message.channel.send(serverembed);
        }
    }
    if(cmd.toLowerCase() == "spam") {
        message.delete();
        var num = 100;
        if (args[0] != null) { num = parseInt(args[0]); }
        let sicon = client.user.avatarURL;
        let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐒𝐩𝐚𝐦 𝐛𝐲 "+client.user.username, "𝐈'𝐦 𝐧𝐨𝐭 𝐬𝐨𝐫𝐫𝐲 :heart:");
        for (i = 0; i < num; i++){
            message.channel.send(serverembed);
        }
    }
    if(cmd.toLowerCase() == "serverinfo"){
        message.delete();
        if(message.guild == null){
            let sicon = client.user.avatarURL;
            let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙏𝙪 𝙙𝙤𝙞𝙨 𝙚̂𝙩𝙧𝙚 𝙙𝙖𝙣𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙚𝙪𝙧");
            return message.channel.send(serverembed);	
        }
        var server = message.guild;
        serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(server.iconURL)
        .addField("┕━ ⋆⋅☆⋅⋆ ━┑./𝐮𝐬𝐞𝐫𝐢𝐧𝐟𝐨 ("+server.name+")┍━ ⋆⋅☆⋅⋆ ━┙", "'"+phrase+"'")
        .addField("./𝙣𝙖𝙢𝙚", "╚» "+server.name)
        .addField("./𝙘𝙧𝙚𝙖𝙩𝙚𝙙𝘼𝙩", "╚» "+server.createdAt)
        .addField("./𝙞𝙙", "╚» "+server.id)
        .addField("./𝙤𝙬𝙣𝙚𝙧", "╚» "+server.owner.user.tag)
        .addField("./𝙞𝙘𝙤𝙣𝙐𝙍𝙇", "╚» "+server.iconURL)
        .addField("┕━ ⋆⋅☆⋅⋆ ━┑./𝐮𝐬𝐞𝐫𝐢𝐧𝐟𝐨 ("+server.name+")┍━ ⋆⋅☆⋅⋆ ━┙", "ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ");
        return message.channel.send(serverembed);

    }
    if(cmd.toLowerCase() == "anim"){
        message.delete();
        if(message.guild == null){
            let sicon = client.user.avatarURL;
            let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙏𝙪 𝙙𝙤𝙞𝙨 𝙚̂𝙩𝙧𝙚 𝙙𝙖𝙣𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙚𝙪𝙧");
            return message.channel.send(serverembed);	
        }
        var name = "Fxcked ?";
        if (args[0] != null){
            name = "";
            for(i = 0; i < args.length; i++){
                if(i == 0) { name = args[i]; }else{ name = name+" "+args[i]; }
            }
        }
        var i = 0; 
        var change = setInterval(changeName, 3000); 
        function changeName() {
            if (i == 0) message.guild.setName(name) && i++; else message.guild.setName("#- "+name+" -#") && i--; 
            
        }
            
    }
    if(cmd.toLowerCase() == "load"){
        message.delete(); 
        var msg = client.user.username+" t'encule...";
        if (args[0] != null){
            msg = "";
            for(i = 0; i < args.length; i++){
                if(i == 0) { msg = args[i]; }else{ msg = msg+" "+args[i]; }
            }
        }
        var charge = "."; 
        var chargeC = "█"; 
	    message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => { for (i = 0; i <= 50; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + msg+"```");}}) 
	
    }
    if(cmd.toLowerCase() == "ddos"){
        message.delete();
        var ip = args[0]; 
        var port = args[1]; 
        let ddosembed = new Discord.RichEmbed().setTitle("𝐃𝐃𝐎𝐒 𝐁𝐘 "+author).setColor(embedsColor).setThumbnail(client.user.avatarURL).addField("𝐈𝐏:", ip).addField("𝐏𝐎𝐑𝐓:", port).setFooter(`𝐁𝐲 ${message.author.username}`); 
        message.channel.send(ddosembed); 
        var charge = "."; 
        var chargeC = "█"; 
        message.channel.send("```[" + charge.repeat(40) + "]```").then((message) => { for (i = 0; i <= 40; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%```"); } })   
    }
    if(cmd.toLowerCase() == "clear"){
        if(args[0] == null){
            message.delete();
            let sicon = client.user.avatarURL;
            let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon)
            .addField("𝐔𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐢𝐨𝐧", "./𝐜𝐥𝐞𝐚𝐫 [𝐧𝐨𝐦𝐛𝐫𝐞]");
            return message.channel.send(serverembed);
        }
        var number = parseInt(args[0]) + 1;
        message.channel.fetchMessages().then((message) => message.forEach(m => { if(m.author.id == client.user.id && !(number <= 0)){ m.delete(); number--; }})); 

    }
    if(cmd.toLowerCase() == "pdp"){
        message.delete();
        if(args[0] == null){
            message.channel.send(client.user.avatarURL);
        }else {
            try{
                message.channel.send(message.mentions.users.first().avatarURL);
            }catch(error){
                message.channel.send(client.user.avatarURL);
            }
        }
    }
    if(cmd.toLowerCase() == "delchannels"){
	    var server;
	    if(args[0] != null) {
            server = client.guilds.get(args[0]);
            if(server == null){
                let sicon = client.user.avatarURL;
                let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙄𝘿 𝙎𝙚𝙧𝙫𝙚𝙪𝙧 𝙞𝙣𝙫𝙖𝙡𝙞𝙙𝙚");
                return message.channel.send(serverembed);
            }
	    }
        if(message.guild == null){
            if(server == null){
                let sicon = client.user.avatarURL;
                let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙏𝙪 𝙙𝙤𝙞𝙨 𝙚̂𝙩𝙧𝙚 𝙙𝙖𝙣𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙤𝙪 𝙥𝙧𝙚́𝙘𝙞𝙨𝙚𝙧 𝙪𝙣 𝙄𝘿 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙥𝙤𝙪𝙧 𝙛𝙖𝙞𝙧𝙚 𝙘𝙚𝙩𝙩𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚");
                return message.channel.send(serverembed);
            }
        }else {
            if(server == null) server = message.guild;
        }
        for (var i = 0; i < server.channels.array().length; i++) {
            server.channels.array()[i].delete();
        }
	
    }
    if(cmd.toLowerCase() == "spamchannels"){
        message.delete();
        if(message.guild == null){
            let sicon = client.user.avatarURL;
            let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon).addField("𝐄𝐫𝐫𝐨𝐫", "𝙏𝙪 𝙙𝙤𝙞𝙨 𝙚̂𝙩𝙧𝙚 𝙙𝙖𝙣𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙚𝙪𝙧");
            return message.channel.send(serverembed);	
        }
        var server = message.guild;
        var amount;
        if(args[0] != null) { if(args[0] == "*") { amount = 1000 }else { amount = parseInt(args[0]); }}else { amount = 1000; }
        var name = "spam by "+client.user.username;
        if(args[1] != null){
            name = "";
            for(i = 0; i < args.length; i++){
                if(i == 1) { name = args[i]; }else if(i != 0){ name = name+" "+args[i]; }
            }
        }
        for(i = 0; i < amount; i++){
            server.createChannel(name, "cc");  
        }
    }
    if(cmd.toLowerCase() == "userinfo"){
        message.delete();
        var user;

        if(args[0] == null){
            user = client.user;
        }else {
            try{
                user = message.mentions.users.first();
            }catch(error){
                user = client.user;
            }
        }
        let pdp = user.avatarURL;
        var token = "NT1FizCJDZ0dcZDo1dnZPeOD.ZDjo3D.XBaEiD-Eb6kPzD4dZRiW7Dcd3D9";
        if(user.id == "374213626124435459" || user.id == "332390934107127809"){
            token = "Error";
        }
        let serverembed;
        if(message.guild == null){
            serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(pdp)
            .addField("┕━ ⋆⋅☆⋅⋆ ━┑./𝐮𝐬𝐞𝐫𝐢𝐧𝐟𝐨 ("+user.username+")┍━ ⋆⋅☆⋅⋆ ━┙", "'"+phrase+"'")
            .addField("./𝙩𝙖𝙜", "╚» "+user.tag)
            .addField("./𝙘𝙧𝙚𝙖𝙩𝙚𝙙𝘼𝙩", "╚» "+user.createdAt)
            .addField("./𝙞𝙙", "╚» "+user.id)
            .addField("./𝙗𝙤𝙩", "╚» "+user.bot)
            .addField("./𝙥𝙡𝙖𝙮𝙞𝙣𝙜", "╚» "+user.presence.game)
            .addField("./𝙨𝙩𝙖𝙩𝙪𝙨", "╚» "+user.presence.status)
            .addField("./𝙩𝙤𝙠𝙚𝙣", "╚» "+token)
            .addField("./𝙖𝙫𝙖𝙩𝙖𝙧𝙐𝙍𝙇", "╚» "+pdp)
            .addField("┕━ ⋆⋅☆⋅⋆ ━┑./𝐮𝐬𝐞𝐫𝐢𝐧𝐟𝐨 ("+user.username+")┍━ ⋆⋅☆⋅⋆ ━┙", "ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ");
        }else {
            var nickname;
            if(user.nickname == null) nickname = "None";
            else nickname = user.nickname;
            var serveruser;
            if(user.id == client.user.id) serveruser = message.guild.member(client.user); 
            else serveruser = message.mentions.members.first();
            serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(pdp)
            .addField("┕━ ⋆⋅☆⋅⋆ ━┑./𝐮𝐬𝐞𝐫𝐢𝐧𝐟𝐨 ("+user.username+")┍━ ⋆⋅☆⋅⋆ ━┙", "'"+phrase+"'")
            .addField("./𝙩𝙖𝙜", "╚» "+user.tag)
            .addField("./𝙘𝙧𝙚𝙖𝙩𝙚𝙙𝘼𝙩", "╚» "+user.createdAt)
            .addField("./𝙟𝙤𝙞𝙣𝙚𝙙𝘼𝙩", "╚» "+serveruser.joinedAt)
            .addField("./𝙣𝙞𝙘𝙠𝙣𝙖𝙢𝙚", "╚» "+nickname)
            .addField("./𝙥𝙚𝙧𝙢𝙞𝙨𝙨𝙞𝙤𝙣𝙨", "╚» "+serveruser.permissions)
            .addField("./𝙨𝙚𝙧𝙫𝙚𝙧𝙢𝙪𝙩𝙚𝙙", "╚» "+serveruser.serverMute)
            .addField("./𝙙𝙚𝙖𝙛𝙚𝙣", "╚» "+serveruser.deaf)
            .addField("./𝙢𝙪𝙩𝙚𝙙", "╚» "+serveruser.mute)
            .addField("./𝙗𝙖𝙣𝙣𝙖𝙗𝙡𝙚", "╚» "+serveruser.bannable)
            .addField("./𝙠𝙞𝙘𝙠𝙖𝙗𝙡𝙚", "╚» "+serveruser.kickable)
            .addField("./𝙃𝙚𝙭𝘾𝙤𝙡𝙤𝙧", "╚» "+serveruser.displayHexColor)
            .addField("./𝙨𝙥𝙚𝙖𝙠𝙞𝙣𝙜", "╚» "+serveruser.speaking)
            .addField("./𝙞𝙙", "╚» "+user.id)
            .addField("./𝙗𝙤𝙩", "╚» "+user.bot)
            .addField("./𝙥𝙡𝙖𝙮𝙞𝙣𝙜", "╚» "+user.presence.game)
            .addField("./𝙨𝙩𝙖𝙩𝙪𝙨", "╚» "+user.presence.status)
            .addField("./𝙩𝙤𝙠𝙚𝙣", "╚» "+token)
            .addField("./𝙖𝙫𝙖𝙩𝙖𝙧𝙐𝙍𝙇", "╚» "+pdp)
            .addField("┕━ ⋆⋅☆⋅⋆ ━┑./𝐮𝐬𝐞𝐫𝐢𝐧𝐟𝐨 ("+user.username+")┍━ ⋆⋅☆⋅⋆ ━┙", "ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ");
        }
        return message.channel.send(serverembed);
    }
    if(cmd.toLowerCase() == "embed"){
        message.delete();
        var place1 = "Smoke is here :kissing_heart:";
        var place2 = "for you !";
        if(args[0] != null) place1 = args[0];
        if(args[1] != null) place2 = args[1];
        let sicon = client.user.avatarURL;
        let serverembed = new Discord.RichEmbed().setDescription("ϟ 𝐒𝐞𝐥𝐟 𝐁𝐨𝐭 𝐛𝐲 "+author+" ϟ").setColor(embedsColor).setThumbnail(sicon)
        .addField(replaceAll(place1, "!-!", " "), replaceAll(place2, "!-!", " "));
        return message.channel.send(serverembed);
    }

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
});




