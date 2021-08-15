let displayColor = document.getElementById('colorBlock')
let rgbTitle = document.getElementById('rgbTitle')
let rVal = document.getElementById('rVal')
let gVal = document.getElementById('gVal')
let bVal = document.getElementById('bVal')
let aVal = document.getElementById('aVal')
let hVal = document.getElementById('hVal')

let colorR = 0
let colorG = 0
let colorB = 0
let colorA = 1

let hexR = '00'
let hexG = '00'
let hexB = '00'
let hexA = '00'
let hexA1 = '0'
let hexA2 = '0'

let hexDictionary={
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
}

function rSlider(val) {
    colorR = val
    rVal.innerHTML = val
    let getHexOne = val / 16
    let firstHex = Math.floor(getHexOne)
    let secondHex = (getHexOne - Math.floor(getHexOne))*16
    hexR = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
    if(colorA > .999){
        rgbTitle.innerHTML = 'RGB: '
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}`
    } else {
        rgbTitle.innerHTML = 'RGBA: '
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
    }    
    displayColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB}, ${colorA})`

}

function gSlider(val) {
    colorG = val
    gVal.innerHTML = val
    let getHexOne = val / 16
    let firstHex = Math.floor(getHexOne)
    let secondHex = (getHexOne - Math.floor(getHexOne))*16
    hexG = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])

    if(colorA > .999){
        rgbTitle.innerHTML = 'RGB: '
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}`
    } else {
        rgbTitle.innerHTML = 'RGBA: '
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
    }
    displayColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB}, ${colorA})`

}

function bSlider(val) {
    colorB = val
    bVal.innerHTML = val
    let getHexOne = val / 16
    let firstHex = Math.floor(getHexOne)
    let secondHex = (getHexOne - Math.floor(getHexOne))*16
    hexB = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
    if(colorA > .999){
        rgbTitle.innerHTML = 'RGB: '
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}`
    } else {
        rgbTitle.innerHTML = 'RGBA: '
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
    }    
    displayColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB}, ${colorA})`

}

function aSlider(val) {
    colorA = val
    colorA2 = val
    if(colorA > .999){
        aVal.innerHTML = ''
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}`
        rgbTitle.innerHTML = 'RGB: '
    } else {
        aVal.innerHTML = `, ${colorA}`
        hVal.innerHTML = ` #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
        rgbTitle.innerHTML = 'RGBA: '
    }

    let hexValA = (colorA2 * 1000) / 62.5
    if (hexValA - Math.floor(hexValA) === 0){
        hexA1 = hexDictionary[hexValA - 1]
        hexA2 = '0'
        console.log(hexA1 + hexA2)
    } else {
        let hexRemainder = hexValA - Math.floor(hexValA)
        hexA1 = hexDictionary[(hexValA - hexRemainder)]
        let hexValB = (hexRemainder * 1000) / 62.5
        hexA2 = hexDictionary[Math.floor(hexValB)]
    }
    displayColor.style.backgroundColor = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`

}
