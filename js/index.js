

function calcular(){
    let notaA1 = document.getElementById('notaA1').value;
    let notaA2 = document.getElementById('notaA2').value;
    if(notaA1 == 0 || notaA2 < 5){
        console.log(`Suas notas não se enquadram as regras! Você está Reprovado`); 
    }else if(notaA1 > 0 && notaA2 >= 5 ){
        let notaFinalPonderada = (notaA1 * 0.4) + (notaA2 * 0.6);
        if(notaFinalPonderada >= 6){
            console.log(`Sua nota foi ${notaFinalPonderada.toFixed(2)}, você está Aprovado!`);
        }else{
            console.log(`Sua nota foi ${notaFinalPonderada.toFixed(2)}, você está Reprovado!`); 
        }  
    }       
}