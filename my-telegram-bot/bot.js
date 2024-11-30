const TelegramBot = require('node-telegram-bot-api');

// Замените токен вашего бота
const token = '7355670727:AAGKQR4De9RK7UU0MAf1ug1Wx35WKUlrx4c';

// Создайте экземпляр бота
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Создайте клавиатуру с кнопкой для открытия вашего мини-приложения
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Хочу цитатку',
            web_app: { url: 'https://constantius-kos.github.io/mytestpage/' }, // Используйте web_app вместо url
          },
        ],
      ],
    },
  };

  // Отправьте сообщение с кнопкой
  bot.sendMessage(chatId, 'Хочешь цитатку?', options);
});

// Запустите бота
console.log('Бот запущен...');
