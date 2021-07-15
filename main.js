const sub = document.querySelector('#submit-button')
const textInput = document.querySelector('input[type=text]');
let resultPush = document.querySelector('#results')
let textValue = (textInput.value)



sub.addEventListener('click', function () {

     const checkedRadio = document.querySelector('input[type=radio]:checked');
   
    if (checkedRadio.value === 'encode'){
        console.log('radio button value = encode')
        console.log('textInput.value =', textInput.value)
        console.log('encode function applied to textInput.value = ',encode(textInput.value))
        

        resultPush.innerText = encode(textInput.value)
        
    } else  if (checkedRadio.value === 'translate'){
        console.log('radio button value = translate')
        console.log('textInput.value =', textInput.value)
        console.log('translate function applied to textInput.value = ',translate(textInput.value))

        resultPush.innerText = translate(textInput.value)

     } else  if (checkedRadio.value === 'madlib'){
        console.log('radio button value = madlib')
        console.log('textInput.value =', textInput.value)
        console.log('madlib function applied to textInput.value = ',madlib(textInput.value))

        resultPush.innerText = madlib(textInput.value)

     }  else  if (checkedRadio.value === 'search'){
        let p = document.createElement('p');
        let searchFunction = search(textInput.value)
        console.log('radio button value = search')
        console.log('textInput.value =', textInput.value)
        console.log('search function applied to textInput.value = ',search(textInput.value))

        resultPush.innerText = ''
        console.log("search")
        console.log("resultPush in search if statement ",resultPush)
        let resultArray = []
        for (i=0; i < searchFunction.length; i++){
            resultArray.push(searchFunction[i].symbol)
        }

        p.innerText = resultArray
        resultPush.appendChild(p)

     } else  if (checkedRadio.value === 'random'){
        let randomNum = Math.random() * 100;
        console.log(randomNum)

        if (randomNum <= 20){
            checkedRadio.value = 'encode'
            //resultPush.innerText = encode(textInput.value)
            console.log(checkedRadio.value)
            alert('ENCODE')
        }
        if (randomNum >= 21 && randomNum <= 40){
            checkedRadio.value = 'translate'
            //resultPush.innerText = translate(textInput.value)
            console.log(checkedRadio.value)
            alert("TRANSLATE")
        }
        if (randomNum >= 41 && randomNum <= 60){
            checkedRadio.value = 'madlib'
            //resultPush.innerText = madlib(textInput.value)
            console.log(checkedRadio.value)
            alert('MADLIB')
        }
        if (randomNum >= 61){
            checkedRadio.value = 'search'
            console.log(checkedRadio.value)
            alert('SEARCH')
            
        }


        

     }




   
   
});