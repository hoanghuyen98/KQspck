var list_img2 = document.getElementsByClassName("list-img2")
for(let i = 0; i < list_img2.length; i++){
    list_img2[i].addEventListener('click',() => {
        window.location.href = `spckfood2.html?keye=${list_img2[i].getAttribute('value')}`
    })
}

function choose2() {
    window.location.href = "choose2.html";
}          