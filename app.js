var text= document.getElementById('input');
var list = document.getElementById('todolist');
var btn = document.getElementById('button');
btn.onclick = click;

listofactivity = [];

function click(){
    listofactivity.push(text.value);
    text.value="";
    showList();
}

function showList(){

    list.innerHTML=" ";

    listofactivity.forEach(function (n, i) {
        list.innerHTML +=
            "<li>"+
            n +
            "<a onclick='editItem("+
            i +
            ")'>Edit</a>" + 
            "<a onclick='deleteItem(" +
            i +
            ")'>&times | </a></li>";
    });
}

function deleteItem(i){
    listofactivity.splice(i,1)
    showList();
}

function editItem(i){
    var newvalue = prompt("please insert your new value");
    listofactivity.splice(i, 1 , newvalue);
    showList();
}


