const corBody = document.querySelector("#cor_body");
const corFonte = document.querySelector("#cor_fonte");
const corHeader = document.querySelector("#cor_header");

const menuCor = document.querySelector('.menu_cor');

const checkCor = document.querySelector('#ativa_menu_cor');

corBody.addEventListener('input', function () {mudaCor('--cor-do-body', corBody.value);})

corFonte.addEventListener('input',function () {mudaCor('--cor-da-fonte', corFonte.value);})

corHeader.addEventListener('input',function () {mudaCor('--cor-do-header', corHeader.value);})

function mudaCor(campo, cor){document.documentElement.style.setProperty(campo, cor);}

function corAuto(corHeader, corBody){
    if(checkCor.checked == "1"){
        document.documentElement.style.setProperty('--cor-do-body', corBody);
        document.documentElement.style.setProperty('--cor-do-header', corHeader);
    }
}

checkCor.addEventListener('click', function () { 
    if(checkCor.checked == "1"){
        menuCor.classList.add("oculta_obj");
        document.documentElement.style.setProperty('--cor-da-fonte', '#ffffff');
        if(count == 1){
            corAuto('#08052e',"#111340");
        }
        else if(count == 2){
            corAuto('#351212',"#480f0f");
        }
        else if(count == 0){
            corAuto('#632f6a',"#973899");
        }
    }
    else{
        menuCor.classList.remove("oculta_obj");
        if(count == 1){
            corHeader.value = '#08052e';
            corBody.value = '#111340';
        }
        else if(count == 2){
            corHeader.value = '#351212';
            corBody.value = '#480f0f';
        }
        else if(count == 0){
            corHeader.value = '#632f6a';
            corBody.value = '#973899';
        }
    }
})