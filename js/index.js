

function calcular(){
    let notaA1 = document.getElementById('notaA1').value;
    let notaA2 = document.getElementById('notaA2').value;
    let resultado = document.getElementById('resultado');
    if(notaA1 == 0 || notaA2 < 5){
        resultadoFinal();
        // resultado.innerHTML = "<h4>" + `Suas notas não se enquadram as regras! Você está Reprovado` + "</h4>";
    }else if(notaA1 > 0 && notaA2 >= 5 ){
        let notaFinalPonderada = (notaA1 * 0.4) + (notaA2 * 0.6);  
        function resultadoFinal(){
            resultado.innerHTML = "<h4>" + `Sua nota foi ${notaFinalPonderada.toFixed(2)}, você está ${(notaFinalPonderada >= 6) ? "Aprovado" : "Reprovado"}` + "</h4>";
        }  
        resultadoFinal();  
    }
}   