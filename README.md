# business-sector-test

Тестовое задание на позицию junior Node.js разработчик в компанию Сектор Бизнеса

Задание: https://docs.google.com/document/d/e/2PACX-1vRgZIZ1ynK03JTvyKTzPby0pium0yufQjnNzu2UiAN8-UqO6ja0HiGgHd8DidKUe3vO_fWkI8Q_AiDo/pub

Файл дампа БД: Dump20220622.sql

Эндпоинты:

Регистрация пользователя (POST /user/register)<br>
- Запрос multipart/form-data<br>
- Принимает параметры: name, email, password. Все параметры обязательные<br>

Авторизация пользователя (POST /user/login)<br>
- Запрос multipart/form-data<br>
- Принимает параметы: email, password. Все параметры обязательные<br>

Редактирование пользователя (PUT /profile/[id])<br>
- Доступно только авторизованному пользователю. Редактировать можно только параметры того пользователя, который отправляет запрос<br>
- Запрос multipart/form-data<br>
- Принимает параметры: name, surname, email, gender(Male или Female), photo(файл .jpg или .png размером до 10 МБ)<br>
- Все параметры опциональные<br>
  
Получение пользователя (GET /profile/[id])<br>
- Доступно только авторизованному пользователю. Запросить можно только параметры того пользователя, который отправляет запрос<br>
  
Получение всех пользователей с пагинацией (GET /profiles?page=1, 10 на страницу)<br>
- Параметр запроса page обязательный<br>
- Доступно только авторизованному пользователю<br>
