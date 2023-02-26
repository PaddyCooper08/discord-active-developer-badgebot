# badgebot
A simple app to provide a slash command for the discord active developer badge.
# Setup
## Config files
Create a .env file providing the bot token and application id
```
TOKEN = <Your token here>
CLIENTID = <Your application id here>
```
Now invite the bot to your server with ```https://discord.com/api/oauth2/authorize?client_id=<YOUR APPLICATION ID>&permissions=8&scope=bot%20applications.commands```, 

Inserting your application id as shown.  
## Running the bot
You need node installed.  

Install dependencies ```pnpm i```  

Run bot ```node index.js```  

# Usage
Simply run ```/activedevbadge``` and follow the link provided to claim.  

**NOTE** You need to also have prepared a community server as the discord docs say (this is easy and takes 2 mins) [Docs](https://support-dev.discord.com/hc/en-us/articles/10113997751447-Active-Developer-Badge#h_01GHW11D9TAXKM9YVATV2P63BX).

