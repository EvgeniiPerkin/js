setTimeout(changeDocument, 3000);
// отображение сообщения о скидке через 3 секунды
function changeDocument(){
    var p = document.getElementById("prf");
    p.innerHTML = "<strong>267!!!</strong>";
    p.setAttribute("class", "redtext");
}