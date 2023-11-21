const numpad = document.querySelectorAll('.numpad');
const input = document.getElementById('input');
const egal = document.getElementById('egal')
const del = document.getElementById('delete')
const bac = document.getElementById('back')



for(let i=0 ; i<numpad.length; i++){
    numpad[i].addEventListener('click',function(){
       input.value = input.value + numpad[i].innerText
    }
    )
}

egal.addEventListener('click', function(){
    input.value = eval(input.value)
})

// const del = document.getElementById('delete')
del.addEventListener('click',()  =>{
    input.value = ''
    
})
bac.addEventListener('click',() =>{
    input.value = input.value.slice(0,-1)

})

const div = document.getElementById("division");
div.addEventListener('click', function () {
    input.value += '/'
})
const mult = document.getElementById('multiply');
mult.addEventListener('click',function () {
    input.value += '*'
})



