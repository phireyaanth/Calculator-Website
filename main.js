const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for(let key of keys){
    const value = key.dataset.key;
    key.addEventListener('click', () => {
        if (value == 'clear'){
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } 
        else if(value == "delete"){
            input = input.slice(0, -1);
            display_input.innerHTML = CleanInput(input);
        }
        else if (value == "="){
            let result = eval(input);


            display_output.innerHTML = CleanOutput(result);
        }  
        else if (value == "parentheses"){
            if(input.indexOf("(") == -1 || input.indexOf("(") != -1 && 
            input.indexOf(")") != -1 && input.lastIndexOf("(")< input.lastIndexOf(")")){
                input +="(";
            }
            else if(input.indexOf("(") != -1 && input.indexOf(")") == -1||
            input.indexOf("(") != -1 && input.indexOf(")") != -1 && 
            input.lastIndexOf("(") > input.lastIndexOf(")"))
            {
                input += ")";
            }
            display_input.innerHTML = CleanInput(input);
        }
        else {
            input += value;
            display_input.innerHTML = CleanInput(input);  
        } 
    })
}

function CleanInput(input){
    let input_array = input.split("");
    let input_array_length = input_array.length;

    for(let i = 0; i < input_array_length; i++){3
        if(input_array[i] == "*"){
            input_array[i] ='<span class="operator"> x </span>';
        }
        else if(input_array[i] == "/"){
            input_array[i] = '<span class= "operator"> ÷ </span>';
       }
    }
    return input_array.join("");
}


function CleanOutput(input){
    let input_str = input.toString();
    let dec = input_str.split(".")[1];
    let whole_num = input_str.split(".")[0];

    let output_arr = whole_num.split("").reverse();
    let output_array_length = output_arr.length;
    let result_arr = [];

    for(i = 0; i < output_array_length; i++){
        result_arr.push(output_arr[i]);
        if((i+1) % 3 === 0 && output_array_length - i > 1){
            result_arr.push(",");
        }
    }
    if(dec == null){
        return result_arr.reverse().join("")
    }
    else{
        return result_arr.reverse().join("") + "." + dec;
    }
}
     


