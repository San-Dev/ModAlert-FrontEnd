# ModAlert - FrontEnd
Симпатичные информационные окошки взамен стандартного alert

<img src="https://image.prntscr.com/image/KIYMQAbaS-CuVS-vAwbniw.png" />

Примеры использования:
```
modAlert.addAlert('Все сделано как надо', 'success');
modAlert.addAlert('Простое информационное сообщение', 'info');
modAlert.addAlert('Предупреждение или сообщение требующее внимания', 'warning');
modAlert.addAlert('Сообщение об ошибке', 'error');

modAlert.addAlert('Сообщение с ручным вводом заголовка<br/>По умолчанию прописаны 4 типа блока с заголовками: <b>success, info, warning и error</b><br/>Они же соответственно прописаны и в файле стилей', 'none', 'Свой заголовок');
```

Чтобы задать свой язык для стандартных заголовков можно использовать функцию:
```
modAlert.setLang({
    success: 'Done',
    info:    'Info',
    warning: 'Warning',
    error:   'Error',
});
```
