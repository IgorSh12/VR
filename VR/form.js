
let inputs = document.querySelectorAll('.input');
    inputs[5].addEventListener('click', (e) =>{
        e.preventDefault();
            document.querySelector('.fail').style.color = 'red'
        console.log(inputs[4].value )
        if(inputs[0].value == ''){
            document.querySelector('.fail').innerHTML = 'Вы забыли ввести имя'
        } else{
        if(inputs[1].value == '' || inputs[2].value == ''){
            document.querySelector('.fail').innerHTML = 'Ваш пол неизвестен'
        }else{
            if(inputs[3].value == ''){
            document.querySelector('.fail').innerHTML = 'Вы не указали возраст'
        }else{
             
        if(inputs[4].checked == false){
            document.querySelector('.fail').innerHTML = 'Будьте добры согласиться'
        }else{
            if(inputs[0].value == 'Рубль'){
                document.querySelector('.fail').innerHTML = 'Вы упали'
            }
        }
        }   
    }
    }  
    })

