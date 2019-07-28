var search = document.getElementById("search")
var btnsearch = document.getElementById("btns")
btnsearch.addEventListener("click", function(e){
    console.log(search.value);
    window.location.href = `search.html?search=${search.value}`

});

function home() {
    window.location.href = "index.html?search=huh";
}

console.log(window.location.href.split("=")[1]);