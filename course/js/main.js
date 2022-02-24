var list = [
    {"desc":"rice","amount":"1","value":"4.4"},
    {"desc":"beer","amount":"12","value":"1.99"},
    {"desc":"meat","amount":"1","value":"16.0"}
];

function getTotal(list){
    var total = 0;
    for(var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){    
    var table = '<thead><tr><td>Description</td><td>Amout</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(var  key in list){
        table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td><button onclick="setUpdate('+key+')">Edit</button><button onclick="deleteData('+key+')">Delete</button></td></tr>'
    }    
    table += '</tbody>';    
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc){
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);    
    return str;
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".",",");
    str = "$ " + str;
    return str;
}

function addData(){
    var desc =  document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    
    list.unshift({"desc":desc,"amount":amount,"value":value});
    setList(list);
}

function setUpdate(id){    
    var obj = list[id];
    document.getElementById("desc").value =  obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'"></input>'
}

function resetForm(){        
    document.getElementById("desc").value =  "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
    document.getElementById("inputIDUpdate").innerHTML = "";
}

function updateData(){
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value =  document.getElementById("value").value;

    list[id] = {"desc":desc, "amount":amount, "value":value};

    resetForm();
    setList(list);
}

function deleteData(key){
    if (confirm("Delete this item ?")){
        if(key === list.length -1){
            //exclui o ultimo registro do list
            list.pop();
        }else if(key === 0){
            //exclui o primeiro registro do list
            list.shift();
        }else{
            var arrAuxIni = list.slice(0,key);
            var arrAuxEnd = list.slice(key + 1);
            list = arrAuxIni.concat(arrAuxEnd);
        }

        setList(list);
    }

}

setList(list);

//console.log(getTotal(list));