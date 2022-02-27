<h1>Controle de Compras</h1>
<h2>JavaScript Avançado</h2>
<h3>Curso School Of Net</h3>

<br>
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

<br>
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

<br>
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

<br>
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

<br>
<b>6. Adicionando novos registros</b>

Trecho do form:
``` html
<div class="form-inline">
    <div class="form-group"> 
        <input type="text" class="form-control" id="desc" placeholder="Description"/>
    </div>
    <div class="form-group"> 
        <input type="text" class="form-control" id="amount" placeholder="Amount"/>
    </div>
    <div class="form-group"> 
        <input type="text" class="form-control" id="value" placeholder="Value"/>
    </div>
    <button onclick="addData();" class="btn btn-default">Add</button>
</div>
```

Função que adiciona registros na lista:
``` js
function addData(){
    var desc =  document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    
    list.unshift({"desc":desc,"amount":amount,"value":value});
    setList(list);

}
```
<br>
<b> 7. Editando registros </b>

Trecho do formulário:
``` html
<span id="btnUpdate" style="display: none;">
    <span id="inputIDUpdate">              
    </span>
    <button onclick="updateData()" class="btn btn-default">Save</button>
    <button onclick="resetForm()" class="btn btn-default">Cancel</button>
</span>
```

Função que atualiza as listas:
``` js
function updateData(){
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value =  document.getElementById("value").value;

    list[id] = {"desc":desc, "amount":amount, "value":value};

    resetForm();
    setList(list);
}
```

<br>
<b>8. Excluindo registros</b>

Excluindo itens da lista:
``` js
function deleteData(key){
    if (confirm("Delete this item ?")){
        if(key === list.length -1){
            //exclui o ultimo registro do list
            list.pop();
        }else if(key === 0){
            //exclui o primeiro registro do list
            list.shift();
        }else{
            //exclui demais registros
            var arrAuxIni = list.slice(0,key);
            var arrAuxEnd = list.slice(key + 1);
            list = arrAuxIni.concat(arrAuxEnd);
        }
        setList(list);
    }
}
```

<br>
<b>9. Validação</b>

A validação irá retornzar 0 se identificar algo incorreto, do contrário, retorna 1.
``` js
function validation(){
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";

    if (desc === ""){
        errors += '<p>Fill out description</p>';
    }

    if (amount === ""){
        errors += '<p>Fill out amount</p>';        
    }else if (amount != parseInt(amount)){
        errors += '<p>Fill out a valid amount</p>';
    }

    if (value === ""){
        errors += '<p>Fill out amount</p>';        
    }else if (value != parseFloat(value)){
        errors += '<p>Fill out a valid value</p>';
    }

    if (errors != ""){
        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "rgba(85,85,85,0.3)";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10px";
        document.getElementById("errors").style.borderRadius = "13px";
        document.getElementById("errors").innerHTML = "<h3>Error:</h3>" + errors;
        return 0;
    }else{ 
        document.getElementById("errors").style.display = "none";
        return 1;
    }
}
```
<br>
<b>10. Get Total</b>

Nab bar:
``` html
<nav class="navbar navbar-default navbar-fixed-bottom"> 
    <div class="container">
     <h4 class="text-center text-sucess">Total: <span id="totalValue">$ 0,00</span></h4>
    </div>
</nav>
```

Totalizador:
``` js
function getTotal(list){
    var total = 0;
    for(var key in list){
        total += list[key].value * list[key].amount;
    }
    document.getElementById("totalValue").innerHTML = formatValue(total);
}
```

<br>
<b>11. LocalStorage </b>

Quanto utilizar a função setList a função saveListStorage será acionada.
Entoa a função saveListStorage ficará dentro da função setList.
``` js
function saveListStorage(list){
    var jsonStr = JSON.stringify(list);
    localStorage.setItem("list",jsonStr);
}
```

A função de inicialização do local stoarge:
``` js
function initListStorage(){
    var testList = localStorage.getItem("list");
    if(testList){
        list = JSON.parse(testList);
    }
    setList(list);
}
```

A função initListStorage subsitui a setList no final do arquivo:
``` js
initListStorage();

//setList(list);
```

No Browser Edge para visualizar o LocalStorage, clicar com o botão direito no browser e utilizar a opção Inspecionar >>  Depois o botão "More Tabs" >> Aplicativo >> Armazenamento Local.
