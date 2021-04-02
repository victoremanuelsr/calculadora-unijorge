function calcular(){
    let notaA1 = document.getElementById('notaA1').value;
    let notaA2 = document.getElementById('notaA2').value;
    let resultadoDiv = document.getElementById('resultado');
    function resultadoFinal(){
        if(notaA1 > 0 && notaA2 >= 5 ){
            let notaFinalPonderada = (notaA1 * 0.4) + (notaA2 * 0.6);    
            resultadoDiv.innerHTML = `<h4>Sua nota foi ${notaFinalPonderada.toFixed(2)}, você está ${(notaFinalPonderada >= 6) ? "Aprovado" : "Reprovado"}</h4>`;
        }else{
            resultadoDiv.innerHTML = `<h4>Sua nota não atende aos critérios, você está Reprovado </h4>`;
        }
    }
    resultadoFinal();         
}   