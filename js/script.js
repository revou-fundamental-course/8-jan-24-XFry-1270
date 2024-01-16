let keliling = document.querySelector(".inputklg");

document.querySelector('.hk').addEventListener('click',function(){
    if(keliling.value == ""){
        alert("Harap isi Nilai sisi !")
        document.querySelector(".klg").innerHTML='Hasil';
    }else{
    var show = keliling.value * 4;
    document.querySelector(".klg").innerHTML=show;
    }
})
document.querySelector(".rk").addEventListener('click',function(){
    document.querySelector(".klg").innerHTML='Hasil';
    keliling.value="";
})

let luas = document.querySelector(".inputL");

document.querySelector('.kl').addEventListener("click",function(){
    if(luas.value == ""){
        alert("Harap isi Nilai sisi !")
        document.querySelector(".ls").innerHTML="Hasil";
    }
    var show = luas.value*luas.value;
    document.querySelector(".ls").innerHTML=show;
})

document.querySelector(".rl").addEventListener('click',function(){
    document.querySelector(".ls").innerHTML='Hasil';
    luas.value="";
})