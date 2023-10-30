function Play (){
    setTimeout(()=>{
        let elementsPlay = document.querySelectorAll('[data-title-no-tooltip="Play"]');
        for (let elementPlay of elementsPlay) {
            if (elementPlay) {
                elementPlay.click()
                break
            }
        }
      },1000)
}
function scriptSkipAds (){
    // console.log('ชื่อของเว็บที่กำลังเปิด: ' + window.location.hostname)
    if (window.location.hostname == 'www.youtube.com'){
        let elements = document.querySelectorAll('*')
        for (let element of elements) {
            var divElement = element.querySelector('div')
            if (divElement){
                if (divElement.innerHTML.indexOf('Skip Ad') !== -1){
                    // console.log('>>>>>',divElement.innerHTML)
                    divElement.click()
                    Play ()
                }
            }
        }
    }
}

setInterval( ()=> 
    scriptSkipAds()
, 1000);