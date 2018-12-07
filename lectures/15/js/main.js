var account=
    {

    AccountTitle: "Ghulam Hussain",
    AvailableBalance: 56200,
    AccountCurrency: "PKRS",
    IBAN:"GHL1F16BSCS0272",


    Deposit:function (e,v)
    {
        if(e.keyCode==13)
        {
            if (!isNaN(v)) {
                document.getElementById("balance").innerHTML = account.AvailableBalance += parseInt(v);
                document.getElementById("deposit").value =" ";
                document.getElementById("deposit-msg").innerHTML=" ";

                TransactionHistory(v,"Deposit");
            }
            else
            {
                document.getElementById("deposit").value =" ";
                document.getElementById("deposit-msg").innerHTML="Enter valid Amount";
            }
        }
    },

        Withdraw:function (e,v)
        {
            if(e.keyCode==13)
            {
                if (!isNaN(v)) {
                    if(v<account.AvailableBalance)
                    {
                        document.getElementById("balance").innerHTML = account.AvailableBalance -= parseInt(v);
                        document.getElementById("withdraw").value = " ";
                        document.getElementById("withdraw-msg").innerHTML = " ";
                        TransactionHistory(v,"Withdraw");
                    }
                    else
                    {
                        document.getElementById("withdraw").value = " ";
                        document.getElementById("withdraw-msg").innerHTML = "Don't sufficient Amount in Account";
                    }
                }
                else
                {
                    document.getElementById("withdraw").value =" ";
                    document.getElementById("withdraw-msg").innerHTML="Enter valid Amount";
                }
            }
        }



}

document.getElementById("title").innerHTML=account.AccountTitle;
document.getElementById("balance").innerHTML=account.AvailableBalance;
document.getElementById("currency").innerHTML=account.AccountCurrency;
document.getElementById("IBAN").innerHTML=account.IBAN;


function TransactionHistory(v,msg) {

document.getElementById("transaction-table").innerHTML+="<tr><td>"+new Date()+"</td><td>"+msg+"</td><td>"+v+"</td> </tr>";
}