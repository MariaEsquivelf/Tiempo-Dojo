function showAlert(){
    alert("This page says Loading wheather report..")
}
//funcion para eliminar el padre del elemento
function remove(element){ 
    let parent = element.parentNode;
    if (parent) {
        console.log(parent)
        parent.remove();
        }
        }
        