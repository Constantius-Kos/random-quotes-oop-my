# Random Quotes OOP with API

Welcome to the Random Quotes app!
This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app.

## Running the App in Development Mode

### Run server

1. Navigate to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependencies by running the following command:
   `npm install`
5. Run server in the development mode with hot reload feature:
   `npm run dev`
6. Server will be running at the http://localhost:3000

### Run client

1. Open new terminal window in the root of the project
2. Run client in the development mode with hot reload:
   `npx live-server client`
3. Client will be running at the http://localhost:8080

## Running the App in Production Mode

### Run server

1. Navigate to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependencies by running the following command:
   `npm install`
5. Run server in the production mode:
   `npm start`
6. Configure hosting server where you run application to forward all requests to the http://localhost:3000
7. Get assigned by the hosting provider URL for your backend API server.
   For example https://random-quotes-api.com

### Run client

1. There is no need to build the client as it already contains HTML, CSS and JS files
2. In the `client/config.js` replace http://localhost:3000 with URL assigned to the server API in the step 7. in the previous section. For example https://random-quotes-api.com
   Note: You could make this change directly on the hosting server or in the project source files (less preferrable)
3. Host all client files from the `client` subfolder on the public web server
4. Get assigned by the hosting provider URL for you client frontend application.
   For example https://random-quotes-frontend.com
5. Open https://random-quotes-frontend.com in the web browser

################################################

# Случайные цитаты ООП с API

Добро пожаловать в приложение Случайные цитаты!
Этот проект состоит из клиентского приложения Vanilla JavaScript и серверного приложения Express Node.js.

## Запуск приложения в режиме разработки

### Запуск сервера

1. Перейдите в корневой каталог проекта.
2. Откройте новое окно терминала.
3. Измените каталог на подпапку сервера:
   `cd server`
4. Установите зависимости сервера, выполнив следующую команду:
   `npm install`
5. Запустите сервер в режиме разработки с функцией горячей перезагрузки:
   `npm run dev`
6. Сервер будет запущен по адресу http://localhost:3000

### Запустите клиент

1. Откройте новое окно терминала в корне проекта
2. Запустите клиент в режиме разработки с функцией горячей перезагрузки:
   `npx live-server client`
3. Клиент будет запущен по адресу http://localhost:8080

## Запуск приложения в режиме производства

### Запустите сервер

1. Перейдите в корневой каталог проекта.
2. Откройте новое окно терминала.
3. Смените каталог на подпапку сервера:
   `cd server`
4. Установите зависимости сервера, выполнив следующую команду:
   `npm install`
5. Запустите сервер в режиме производства:
   `npm start`
6. Настройте сервер хостинга, на котором вы запускаете приложение, для пересылки всех запросов на http://localhost:3000
7. Получите от хостинг-провайдера URL-адрес для вашего сервера API бэкэнда.
   Например, https://random-quotes-api.com

### Запустите клиент

1. Нет необходимости собирать клиент, так как он уже содержит файлы HTML, CSS и JS
2. В `client/config.js` замените http://localhost:3000 на URL-адрес, назначенный API сервера на шаге 7 в предыдущем разделе. Например https://random-quotes-api.com
   Примечание: вы можете сделать это изменение непосредственно на сервере хостинга или в исходных файлах проекта (менее предпочтительно)
3. Разместите все клиентские файлы из подпапки `client` на общедоступном веб-сервере
4. Получите от хостинг-провайдера URL-адрес для вашего клиентского приложения frontend.
   Например https://random-quotes-frontend.com
5. Откройте https://random-quotes-frontend.com в веб-браузере
