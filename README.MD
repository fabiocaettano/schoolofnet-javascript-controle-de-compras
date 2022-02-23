<h1>Controle de Compras</h1>
<h2>JavaScript Avançado</h2>
<h3>Curso School Of Net</h3>

1. Realizar download do bootstrap versão 3.

Acessar o site https://getbootstrap.com/

O download deve ser customizado somente com os componentes do BootStrap e CSS, será desmarcado as referências do JavaScript e Jquery. Selecionar a versão e utilizar o botão "Customize", desmarcar as opções do JavaScript e Jquery e clicar no botão "Compile Download".

Descompactar o arquivo, e copiar somente o arquivo bootstap.min.css. Salve este arquivo na pasta course/css.

Configurar o bootstap.min.css na página index.html:
``` html
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

```

2. Configuração do NavBar e Titulo da Página

Arquivo course > js > config.js:

``` js
function setConfig(){    
    var texts = {
        "title" : "Shopping Control"
    };    
    document.title = texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;
}

setConfig();
```

No final da tag body incluir a referencia ao arquivo config.js:
``` html
<body>
    ...
    <script src="js/config.js"></script>
</body>
```
