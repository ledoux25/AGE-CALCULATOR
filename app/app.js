const inputs = document.getElementsByClassName('content')
const labels = document.getElementsByClassName('title')
const errors = document.getElementsByClassName('error-text')
const result = document.getElementsByClassName('error-text')
const bla = document.getElementsByClassName('bla')

var button = document.querySelector('.icon')
var isvalid = false
var isempty = true


button.addEventListener('click',function(){
    var day = inputs[0].value
    var month = inputs[1].value
    var year = inputs[2].value
    var j=0
    // alert(day)


    for(let i=0; i<inputs.length;i++){
        errors[i].style.display="none"
        if (inputs[i].value == '') {
            j = j+1
            Array.from(inputs).forEach(input => {
                input.classList.add('error-input')
            });
            errors[i].innerHTML ="This field is required"
            errors[i].style.display ='inline'
            Array.from(labels).forEach(label => {
                label.style.color="red"
            } )
        }else{
            if(j == 0){
                Array.from(inputs).forEach(input => {
                    input.classList.remove('error-input')
                });
                Array.from(labels).forEach(label => {
                    label.style.color="hsla(0, 1%, 44%, 0.917)"
                })
                isempty = false
            }
        }

        if(!isempty){
            if((inputs[0].value>31 ||(inputs[1].value== 2 && inputs[0].value>29))){
                Array.from(inputs).forEach(input => {
                    input.classList.add('error-input')
                })
                            Array.from(labels).forEach(label => {
                label.style.color="red"
            } )
                errors[0].innerHTML ="Must be a valid date"
                errors[0].style.display ='inline'


            }else if(inputs[1].value>12){
                errors[1].innerHTML ="Must be a valid month"
                errors[1].style.display ='inline'
                Array.from(inputs).forEach(input => {
                    input.classList.add('error-input')
                });
                Array.from(labels).forEach(label => {
                    label.style.color="red"
                } )
            }else if(inputs[2].value>(new Date()).getFullYear()){
                errors[2].innerHTML ="Must be the past"
                errors[2].style.display ='inline'
                Array.from(inputs).forEach(input => {
                    input.classList.add('error-input')
                });
                Array.from(labels).forEach(label => {
                    label.style.color="red"
                } )
            }else{
                isvalid = true
            }
        }
    }
    if(isvalid != false){
       var birth = new Date(parseInt(inputs[2].value,10),parseInt(inputs[1].value,10)-1,parseInt(inputs[0].value,10))
        age= new Date()
       var year = age.getFullYear() - birth.getFullYear()
       var month = age.getMonth() - birth.getMonth()
       var day = age.getDay() - birth.getDay()

       if (month<0) {
        month = 12+month
        year = year-1
       }
        if(0<day){
            month = month+1
        }else{
            day = day*-1
        }

        bla[0].innerHTML=year
        bla[1].innerHTML=month
        bla[2].innerHTML=day

    }
})

