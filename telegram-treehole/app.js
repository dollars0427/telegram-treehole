var telegramBot = require('node-telegram-bot-api');
var log4js = require('log4js');

var nconf = require('nconf');
nconf.file('config', __dirname + '/config.json')
     .file('response', __dirname + '/response.json');

var appLogPath = nconf.get('log').app_log_path;

log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(appLogPath), 'APP_LOG');

var token = nconf.get('bot').token;
var bot = new telegramBot(token, {polling: true});

//Setting response of the telegram bot when detected keyword
bot.onText(/\/start/, function (msg) {
    var fromId = msg.from.id;
    var resp = nconf.get('response').start;
    bot.sendMessage(fromId, resp);
});

bot.onText(/\/rule/, function (msg) {
    var fromId = msg.from.id;
    var resp = nconf.get('response').rule;
    bot.sendMessage(fromId, resp);
});

bot.onText(/\/new/, function (msg) {
    var fromId = msg.from.id;
    var resp = nconf.get('response').new_content;
    bot.sendMessage(fromId, resp);
});
