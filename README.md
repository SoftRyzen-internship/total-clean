# sharp-pages
[maket](https://www.figma.com/file/YZxaGBYHrSUHKsUXyEXasj/Design--Landing-Total-Clean?node-id=0-1)
## Запуск збірки

Інсталяція залежностей

```
npm i
```

Збірка запускається командою

```
npm start
```

## Структура проекту

### У збірці використовується шаблонизатор nunjuks

> https://mozilla.github.io/nunjucks/templating.html.

- Сторінки проекта зберігаються в папці **pages**

- Секційні фрагменти зберігаються в папці **partials**

- Щоб підключити на сторінку фрагмент, який зберігається в **_partials_**

```
{% включають 'sidebar.html' %}
```

- Можна викликати змінні за допомогою токенів

```
Тут будет {{ Title }}
```

- Записати значення змінної для поточного шаблону

```
{% set title = "Заголовок" %}
```
