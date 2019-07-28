var list_img1 = document.getElementsByClassName("list-img1")
for(let i = 0; i < list_img1.length; i++){
    list_img1[i].addEventListener('click',() => {
        window.location.href = `spckfood1.html?keya=${list_img1[i].getAttribute('value')}`
    })
}

function choose1() {
    window.location.href = 'choose1.html';
}

function SF1() {
    window.location.assign("file:///C:/Users/MINH%20KHOI%20KHTN/Desktop/C4T14/spck/spckfood1.html?keya=0")
}

function SF2() {
    window.location.assign("file:///C:/Users/MINH%20KHOI%20KHTN/Desktop/C4T14/spck/spckfood2.html?keye=0")
}

function SF3() {
    window.location.assign("file:///C:/Users/MINH%20KHOI%20KHTN/Desktop/C4T14/spck/spckfood1.html?keya=1")
}






