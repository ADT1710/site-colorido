const imgs = document.querySelectorAll('.banner_imagem');
let count = 0;

setInterval(function mudaImg(){
    if(count == 0){
        alternaOculto(imgs[0], imgs[1]);
        corAuto('#08052e',"#111340");
        count++;
    }
    else if(count == 1){
        alternaOculto(imgs[1], imgs[2]);
        corAuto('#351212',"#480f0f");
        count++;
    }
    else if(count == 2){
        alternaOculto(imgs[2], imgs[0]);
        corAuto('#632f6a',"#973899");
        count = 0;
    }
}, 10000);

function alternaOculto(adicionar, remover){
    adicionar.classList.add('oculta_obj');
    remover.classList.remove('oculta_obj');
}