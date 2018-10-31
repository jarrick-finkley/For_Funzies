
var budget, output, expenses

budget = document.getElementById('budget');
output = document.getElementById('output');
expenses = document.getElementById('expenses');

budget.onsubmit = function(){
    event.preventDefault();

    output.style.visibility = 'visible';
    var net_pay = Number(document.getElementById('net_pay').value);

    expenses.onsubmit = function(){
        var streaming = Number(document.getElementById('streaming').value);
        var internet = Number(document.getElementById('internet').value)
        var phone = Number(document.getElementById('phone').value)
        var mortgage = Number(document.getElementById('mortgage').value)
        var utilities = Number(document.getElementById('utilities').value)
        var credit = Number(document.getElementById('credit').value)
        var misc = Number(document.getElementById('misc').value)
        var car = Number(document.getElementById('car').value)
        var church = Number(document.getElementById('church').value)
        var food = Number(document.getElementById('food').value)


        var ex = streaming + internet + phone + mortgage + utilities + credit + misc + car + church + food



        var money = net_pay - ex
        
        alert('You can save $' + money + '!')
        
        

        

    }

}

