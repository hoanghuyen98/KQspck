// console.log(window.location.href.split("=")[1]);

var searchContent = window.location.href.split("=")[1];

var data_list = [];

var list1 = data1.asianfood;
var list2 = data2.europeanfood;


for(let i = 0; i < list1.length; i++){
    if(list1[i]['name'].toLowerCase().includes(searchContent.toLowerCase())){
        data_list.push(list1[i]);
    }
    // console.log(list1[i]['name']);

}

for(let i = 0; i < list2.length; i++){
    if(list2[i]['name'].toLowerCase().includes(searchContent.toLowerCase())){
        data_list.push(list2[i]);
    }
}

// var test = 'Braised Beef';
// console.log(test.toLowerCase());
// console.log(searchContent.toLowerCase());
// if(test.toLowerCase().includes(searchContent.toLowerCase())){
//     console.log('match');
// }


// console.log(data_list[0].img);
// console.log(data_list[0].name);

// console.log(data_list);
// document.getElementById("choose").insertAdjacentHTML( 'beforeend', 
//     `<img class="list-img1" id = "test" name='keya' value='0' src="key1.jpg" alt="">`
// );


// showdata

for( let i = 0; i < data_list.length; i++){
    
    if ( 'keya' in data_list[i]){
        document.getElementById("choose").insertAdjacentHTML( 'beforeend', 
            `<img class="list-img1" id = "test" name='keya' value=${data_list[i]['keya']} src=${data_list[i]['img']} alt="">`
        );
    }else if ( 'keye' in data_list[i]){
        document.getElementById("choose").insertAdjacentHTML( 'beforeend', 
            `<img class="list-img1" id = "test" name='keye' value=${data_list[i]['keye']} src=${data_list[i]['img']} alt="">`
        );
    }
    
}

// showdetail

list_imgs = document.getElementsByClassName('list-img1');
for( let i = 0; i < list_imgs.length; i++){
    list_imgs[i].addEventListener('click', function(){
        if(list_imgs[i].getAttribute("name") == "keya"){
            window.location.href = `spckfood1.html?keya=${list_imgs[i].getAttribute('value')}`;
        }else if (list_imgs[i].getAttribute("name") == "keye"){
            window.location.href = `spckfood2.html?keye=${list_imgs[i].getAttribute('value')}`;
        }
    });
}