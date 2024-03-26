let answer = document.getElementById('Answer');
let result;
function EnterNumber(num)
{
    answer.value += num;
}
function EnterOperator(op)
{
    answer.value += op;
}
function EnterEqual()
{
    result = eval(answer.value);
    answer.value = result;
}
function EnterClear()
{
    answer.value = "";
}
