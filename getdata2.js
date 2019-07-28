food_list2 = data2.europeanfood;

var food_data2 = "";

item_key2 = window.location.href.split('=')[1];

for(let i = 0; i < food_list2.length; i++){
    if (i == item_key2){
        food_data2 = food_list2[i];
    }
}

// đổi tên Asian
document.getElementById("bsb2").innerHTML = food_data2.name;  
console.log("hkjhdjk"+food_data2.name)

// đổi ảnh Asian
document.getElementById("picture32").src = food_data2.img;

// Special
document.getElementById()