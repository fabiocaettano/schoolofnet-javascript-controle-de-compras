<h1>Controle de Compras</h1>
<h2>JavaScript Avançado</h2>
<h3>Curso School Of Net</h3>

<b>1. Realizar download do bootstrap versão 3.</b>

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

<b>2. Configuração do NavBar e Titulo da Página</b>

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

<b>3. Definindo a lógica do aplicativo</b>

A lista contpem quantidade e valor dos produtos.
A função getSoma retorna o total da lista.

Arquivo course > js > main.js:
``` js
var list = [
    {"desc":"rice","amount":"1","value":"5.40"},
    {"desc":"beer","amount":"12","value":"1.99"},
    {"desc":"meat","amount":"1","value":"15.00"}
];

function getTotal(list){
    var total = 0;
    for(var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}


console.log(getTotal(list));
```

No final da tag body incluir a referencia ao arquivo config.js:
``` html
<body>
    ...
    <script src="js/config.js"></script>
    <script src="js/main.js"></script>
</body>
```

<b>4. Listando os dados</b>

Código para popular a tabela:
``` js
function setList(list){    
    var table = '<thead><tr><td>Description</td><td>Amout</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(var  key in list){
        table += '<tr><td>'+ list[key].desc +'</td><td>'+ list[key].amount +'</td><td>'+ list[key].value +'</td><td> Edit | Delete </td></tr>'
    }    
    table += '</tbody>';    
    document.getElementById("listTable").innerHTML = table;
}
```

<br>
<b>5. Formatando String e Valores</b>

A função formatDesc configurar a primeira letra para Maisculo e as demais em minusuculas.
``` js
function formatDesc(desc){
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);    
    return str;
}
```

A função formatValeu configura para moeda.
``` js
function formatValue(value){
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".",",");
    str = "$ " + str;
    return str;
}
```