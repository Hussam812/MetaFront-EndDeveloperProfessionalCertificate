function listArrayItems(arr){
    for(i = 0; i < arr.length; i++){
        console.log(i+1, arr[i]);
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

function listArrayItemscondition(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] == 'red'){
            console.log(i*100, 'tomato!');
        }else{
            console.log(i*100, arr[i]);

        }
    }
}

listArrayItemscondition(colors);
