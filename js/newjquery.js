$(document).ready(function(){
//evenement
//click
/*
click
mouseenter
mouseleave
keydown
keyup
change

*/
$("#calc").on("click",function(){
    var x= $("#valer").val() 
    alert(x)
})

//
// var e= $("#valeur").html("<input type='text' id='taile'>")
//  $("#valeur").text("bonjour")
// console.log(e)
//html / text 

//manipulation DOM
//attribut
//ajouter, supprimer
$("#valeur").attr("style","background:red")
$("#valeur img").attr("src")
// $("#valeur img").removeAttr("src")

$("#valeur img").addClass("toto")
$("#valeur img").removeClass("")

$("#valeur").before("<input type='text' id='taile'>")
$("#valeur").prepend("mimi")

$(".p3").parent().attr("style","background:blue")
$(".p3").parents(".p1").attr("id",'test')

$(".liste li").on("click",function(){
    $(".liste li").removeAttr("style")
    $(this).attr("style","background:red") 
})


$("#testo").on("change",function(){
    var x=$(this).val()
    $(".style").attr("style","background:"+x)
})

$(".nom").on("keyup",function(){
    var nom=$(this).val()
    $(".nomval span").text(nom)
})
    $(".prenom").on("keyup",function(){
        var prenom=$(this).val()
        $(".prenomval span").text(prenom)
    })





})
