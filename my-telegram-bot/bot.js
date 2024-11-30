const TelegramBot = require('node-telegram-bot-api');


const token = '7355670727:AAGKQR4De9RK7UU0MAf1ug1Wx35WKUlrx4c';
const app = express();
const port = process.env.PORT || 3000; // Используйте переменную окружения PORT или стандартный порт 3000

const bot = new TelegramBot(token);

// Настройка вебхуков
const webhookUrl = `https:https://random-quotes-bot.onrender.com`;

bot.setWebHook(webhookUrl);

// Парсинг запросов от Telegram
app.use(express.json());
app.post(`/mybot`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Обработчик сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Хочу цитатку',
            web_app: { url: 'https://constantius-kos.github.io/mytestpage/' },
          },
        ],
      ],
    },
  };

  bot.sendMessage(chatId, 'Хочешь цитатку?', options);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
