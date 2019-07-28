food_list1 = data1.asianfood;

var food_data1 = "";

item_key = window.location.href.split('=')[1];

for(let i = 0; i < food_list1.length; i++){
    if (i == item_key){
        food_data1 = food_list1[i];
    }
}

// đổi tên Asian
document.getElementById("bsb").innerHTML = food_data1.name;  

// đổi ảnh Asian
document.getElementById("picture3").src = food_data1.img;

