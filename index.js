

function changeImg() {
    const prevImg = document.getElementById('img-1')
    prevImg.style.display = 'none'
    const newImg = document.getElementById('img-2')
    newImg.style.display = 'block'

    const newImg1 = document.getElementById('img-3')
    setTimeout(() => {
        newImg.style.display = 'none'
        newImg1.style.display = 'block'

        setTimeout(() => {
            newImg.style.display = 'block'
            newImg1.style.display = 'none'

            setTimeout(() => {
                newImg.style.display = 'none'
                newImg1.style.display = 'block'
            }, 2000);

        }, 2000);

    }, 2000);

    const prevText = document.getElementById('prev-text')
    prevText.style.display = 'none'
    const newText = document.getElementById('new-text')
    newText.style.display = 'block'
}

function syrC() {
    const inputH = document.getElementById('in-txt')
    inputH.style.display = 'none'
    const SyrC = document.getElementById('syrCT')
    SyrC.style.display = 'block'
    const hideBtn = document.getElementById('syrBtn')
    hideBtn.style.display = 'none'

    let name = inputH.value
    console.log(name)

}