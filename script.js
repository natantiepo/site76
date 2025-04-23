document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;
    const alternaContraste = document.getElementById('alterna-contraste')
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    
    aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    
    })
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    
    diminuirFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
})
    })