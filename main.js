let son1 = +prompt("1-son kiriting")
let son2 = +prompt("2-son kiriting")


let amal = prompt(`
    Amal tanlang 
    1)qoshish
    2)ayirish
    3)bolish
    4)kopaytirish
`)

if (amal =="1"){
    alert(son1 + son2)
}else if (amal == '2'){
    alert(son1 - son2)
}else if (amal == '3'){
    alert(son1 / son2)
}else if (amal == '4'){
    alert(son1 * son2)
}else{
    alert('bunday son mavjud emas')
}
