# ModAlert - FrontEnd
Симпатичные информационные окошки взамен стандартного alert

<img src="https://image.prntscr.com/image/KIYMQAbaS-CuVS-vAwbniw.png" />

Примеры использования:
```
	ModAlert.addAlert({
		type: 'success',
		text: 'Сообщение об успехе',
	});
	ModAlert.addAlert({
		type: 'info',
		text: 'Информация о чем либо, просто для сведения',
	});
	ModAlert.addAlert({
		type: 'warning',
		text: 'Не ошибка, но требует обратить на себя внимание',
	});
	ModAlert.addAlert({
		type: 'error',
		text: 'Тут произошла ошибка...',
	});

	ModAlert.addAlert({
		title: 'Свой заголовок',
		text: 'Сообщение с ручным вводом заголовка<br/>По умолчанию прописаны 4 типа блока с заголовками: <b>success, info, warning и error</b><br/>Они же соответственно прописаны и в файле стилей',
	});
```

Перечень принимаемых параметров:
```
	type: '',        //тип блока, по умолчанию в стилях прописаны: success, info, warning и error
	title: '',       //заголовок. Если заголовок не указан, но указан тип, заголовок будет взят от типа
	text: '',        //текст сообщения
	timeout: 3000,   //время показа блока
	autohide: true,  //автоматически скрывать блок по истечению времени
	showicon: true,  //показывать иконку
```


Демо: https://sandev.pro/demo/ModAlert.html
