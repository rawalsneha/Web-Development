import {add,sub,mul,div} from './calc.js'

const $num1 = $('#num1')
const $num2 = $('#num2')

const $operator = $('#symbol')

const $result_display = $('#result')
$("#add_btn").click(()=>$operator.val('+'))
$("#sub_btn").click(()=>$operator.val('-'))
$("#mul_btn").click(()=>$operator.val('*'))
$("#div_btn").click(()=>$operator.val('/'))


$("#result_btn").click(()=>{
    let x = parseInt($num1.val())
    let y = parseInt($num2.val())
    
    if(!x && x!=0)  {
        alert("Please enter first number")
        return
    }
    if(!y && y!=0)  {
        alert("Please enter second number")
        return
    }
    if (!$operator.val()){
        alert("Please select operation")
        return
    }
    switch($operator.val()){
        case '+': $result_display.val(add(x,y))
            break;
        case '-': $result_display.val(sub(x,y))
            break
        case '*': $result_display.val(mul(x,y))
            break;
        case '/': $result_display.val(div(x,y))
            break;
        default: $result_display.val("INTERNAL ERROR OCCURED!")
    
    }
    $result_display.css({
        "background-color":"rgb(211, 211, 211)",
        
    })



})