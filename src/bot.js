const TelegramBot = require('node-telegram-bot-api');
const Snoowrap = require('snoowrap');

const {
  TELEGRAM_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD,
} = process.env;

const requester = new Snoowrap({
  userAgent: 'telebot-back',
  clientId: REDDIT_CLIENT_ID,
  clientSecret: REDDIT_CLIENT_SECRET,
  username: REDDIT_USERNAME,
  password: REDDIT_PASSWORD,
});


const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/img/, (msg) => {
  const chatId = msg.chat.id;

  requester.getSubreddit('ProgrammerHumor').getHot().then((res) => {
    bot.sendPhoto(chatId, res[Math.floor(Math.random() * res.length) + 1].url);
  });
});
