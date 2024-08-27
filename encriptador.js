function encriptar(traduccion){
    document.querySelector("#warning").style.fontSize = "12px";
    var tt = document.querySelector("#texto");
    const tex = tt.value;
    if (tex != ""){
        var out = ""
        for(var i=0; i < tex.length; i++){
            if((tex[i] < 'a') || (tex[i] > 'z')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            if(tex[i] == 'a'){
                out += traduccion["a"] ;}
            else if(tex[i] == 'e'){
                out += traduccion["e"];}
            else if(tex[i] == 'i'){
                out += traduccion["i"]; }
            else if(tex[i] == 'o'){
                out += traduccion["o"];} 
            else if(tex[i] == 'u'){
                out += traduccion["u"];} 
            else{
                out += tex[i];}
        }

        var aread = document.querySelector("#default");
        var arear = document.querySelector("#result");
        var textoout = document.querySelector("#texto_out");
        aread.classList.add("invisible");
        arear.classList.remove("invisible");
        textoout.innerHTML = out;
    }

    return;

}

function desencriptar(traduccion){
    document.querySelector("#warning").style.fontSize = "12px";
    var ttarea = document.querySelector("#texto");
    var texto = ttarea.value;
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if((texto[i] < 'a') || (texto[i] > 'z')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
        }
        var areadefault = document.querySelector("#default");
        var arearesult = document.querySelector("#result");
        var textoout = document.querySelector("#texto_out");
        areadefault.classList.add("invisible");
        arearesult.classList.remove("invisible");
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
        textoout.innerHTML = texto;
    }
    return;
}

function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );