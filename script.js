const h2= document.querySelector('.value')
const h3= document.querySelector('.result')
const button=document.querySelector('.button')
const button2=document.querySelector('.button2')

//pegando os inputs
const inicio= document.querySelector('.ini')
const final= document.querySelector('.fin')
const numero= document.querySelector('.number')

// função
const contador= (ini, fin, number)=>{

    try{
        ini= inicio.value
        fin= final.value
        number= numero.value
        if(number.toString().length> 1){
            h2.innerHTML= 'Digite apenas um algarismo'
        }
        else if(ini=='' && fin=='' && number==''){
            window.alert('Os campos estão vazios, por favor preencha-os')
        }
        else{
            const arr= [];
            const newArr=[]
            var contador=0;
            for(var i= ini; i<= fin; i++){
                arr.push(i.toString())
            }
            // percorrendo o array
            for(var j in arr){
                var valor= arr[j]
                // percorrendo o array dentro do array(mini array)
                for(var z in valor){
                    if (number.toString() === valor[z]){
                            newArr.push(valor)
                            contador++
                    }
                }
            }
            const noDuplicates= [... new Set(newArr)] //Tira a repetição do array
            h2.innerHTML= `[${noDuplicates}]`
            h3.innerHTML= (`O algarismo ${number} se repete ${contador} vezes`)
        }
    } catch{console.log('Deu ruim')} 
    
   
}

const resetar=()=>{
    h2.innerHTML='Numerais'
    h3.innerHTML='Resultado'
    inicio.value=''
    final.value=''
    numero.value=''
}

button.addEventListener('click', contador)
button2.addEventListener('click', resetar)


 //console.log(Array.from(valor)) //array.from mostra a string no formato array

