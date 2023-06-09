function calculateTip(event){
    event.preventDefault();
    document.getElementById('account').style.display="none";
    let bill = document.getElementById('bill').value;
    let servqual = document.getElementById('servqual').value;
    let people = document.getElementById('people').value;

    if(people == " " || people <= 0){
        alert('Porfavor preencha os campos vazios.');
    }

    if(people == ""||people <= 0){
        people = 1;
        document.getElementById('each').style.display= "block";
        return;
    }else{
        document.getElementById('each').style.display = "block";
    }

    if (servqual > 0){
        document.getElementById('account').style.display="none";
        let aux= bill/people
        aux = Number(aux).toFixed(2);
        let total= (bill*servqual)/people 
        total = Number(total).toFixed(2);
        document.getElementById('tip').innerHTML=total
        document.getElementById('accountt').innerHTML=aux;
        document.getElementById('totalTips').style.display="block"  
    } else if (servqual == 0){
        document.getElementById('totalTips').style.display="none"
        let ui= bill/people
        aux = Number(ui).toFixed(2);
        document.getElementById('accountp').innerHTML=ui;
        document.getElementById('account').style.display="block"
    }
}

document.getElementById('totalTips').style.display="none";
document.getElementById('each').style.display="none";
document.getElementById('account').style.display="none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip)