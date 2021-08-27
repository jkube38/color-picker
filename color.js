let displayColor = document.getElementById('colorBlock')
let backgroundOne = document.getElementById('colorBlockWhite')
let backgroundTwo = document.getElementById('colorBlockBlack')

let rgbValue = document.getElementById('rgbValues')
let hVal = document.getElementById('hVal')

let rgbValueB1 = document.getElementById('rgbValuesB1')
let hValB1 = document.getElementById('hValB1')

let rgbValueB2 = document.getElementById('rgbValuesB2')
let hValB2 = document.getElementById('hValB2')

let colorR = 0
let colorG = 0
let colorB = 0
let colorA = 1

let colorRB1 = 0
let colorGB1 = 0
let colorBB1 = 0
let colorAB1 = 1

let colorRB2 = 0
let colorGB2 = 0
let colorBB2 = 0
let colorAB2 = 1

let hexR = '00'
let hexG = '00'
let hexB = '00'
let hexA = '00'
let hexA1 = '0'
let hexA2 = '0'

let hexRB1 = '00'
let hexGB1 = '00'
let hexBB1 = '00'
let hexAB1 = '00'
let hexA1B1 = '0'
let hexA2B1 = '0'

let hexRB2 = '00'
let hexGB2 = '00'
let hexBB2 = '00'
let hexAB2 = '00'
let hexA1B2 = '0'
let hexA2B2 = '0'

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


// takes in all slider actions and delegates the changes
function sliders(val, id) {

    let currentSlider = id.charAt(id.length - 1)

// if the slider ends in 1 than it changes the background 1 colors and color codes
    if (currentSlider === '1') {
        if (id === 'rSliderB1'){
            colorRB1 = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexRB1 = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        } else if (id === 'gSliderB1'){
            colorGB1 = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexGB1 = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        } else if (id === 'bSliderB1'){
            colorBB1 = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexBB1 = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        }

        if(colorAB1 > .999){
            hValB1.innerHTML = `#${hexRB1}${hexGB1}${hexBB1}`
            rgbValueB1.innerHTML = `rgb(${colorRB1}, ${colorGB1}, ${colorBB1})`
        } else {
            hValB1.innerHTML = `#${hexRB1}${hexGB1}${hexBB1}${hexA1B1}${hexA2B1}`
            rgbValueB1.innerHTML = `rgba(${colorRB1}, ${colorGB1}, ${colorBB1}, ${colorAB1})`
        }

// if the slider set ends in 2 changes the background 2 colors and color codes
    } else if (currentSlider === '2') {
        if (id === 'rSliderB2'){
            colorRB2 = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexRB2 = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        } else if (id === 'gSliderB2'){
            colorGB2 = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexGB2 = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        } else if (id === 'bSliderB2'){
            colorBB2 = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexBB2 = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        }

        if(colorA > .999){
            hValB2.innerHTML = `#${hexRB2}${hexGB2}${hexBB2}`
            rgbValueB2.innerHTML = `rgb(${colorRB2}, ${colorGB2}, ${colorBB2})`
        } else {
            hValB2.innerHTML = `#${hexRB2}${hexGB2}${hexBB2}${hexA1B2}${hexA2B2}`
            rgbValueB2.innerHTML = `rgba(${colorRB2}, ${colorGB2}, ${colorBB2}, ${colorAB2})`
        }

// changes the foreground color and color codes
    } else {
        if (id === 'rSlider'){
            colorR = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexR = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        } else if (id === 'gSlider'){
            colorG = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexG = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        } else if (id === 'bSlider'){
            colorB = val
            let getHexOne = val / 16
            let firstHex = Math.floor(getHexOne)
            let secondHex = (getHexOne - Math.floor(getHexOne))*16
            hexB = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
        }

        if(colorA > .999){
            hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}`
            rgbValue.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`
        } else {
            hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
            rgbValue.innerHTML = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`
        }

    }

    displayColor.style.backgroundColor = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`
    backgroundOne.style.backgroundColor = `rgba(${colorRB1}, ${colorGB1}, ${colorBB1}, ${colorAB1})`
    backgroundTwo.style.backgroundColor = `rgba(${colorRB2}, ${colorGB2}, ${colorBB2}, ${colorAB2})`

}

// calculates the hex value for the alpha channel

function aSlider(val, id) {
    let currentASlider = id.charAt(id.length - 1)
    console.log(currentASlider)
    if (currentASlider === '1'){
        colorAB1 = val
        colorA2B1 = val
        if(colorAB1 > .999){
            hValB1.innerHTML = `#${hexRB1}${hexGB1}${hexBB1}`
            rgbValueB1.innerHTML = `rgb(${colorRB1}, ${colorGB1}, ${colorBB1})`
        } else {
            hValB1.innerHTML = `#${hexRB1}${hexGB1}${hexBB1}${hexA1B1}${hexA2B1}`
            rgbValueB1.innerHTML = `rgba(${colorRB1}, ${colorGB1}, ${colorBB1}, ${colorAB1})`
        }

        let hexValA = (colorA2B1 * 1000) / 62.5
        if (hexValA - Math.floor(hexValA) === 0){
            hexA1B1 = hexDictionary[hexValA - 1]
            hexA2B1 = '0'
        } else {
            let hexRemainder = hexValA - Math.floor(hexValA)
            hexA1B1 = hexDictionary[(hexValA - hexRemainder)]
            let hexValB = (hexRemainder * 1000) / 62.5
            hexA2B1 = hexDictionary[Math.floor(hexValB)]
        }

    } else if (currentASlider === '2'){
        colorAB2 = val
        colorA2B2 = val
        if(colorAB2 > .999){
            hValB2.innerHTML = `#${hexRB2}${hexGB2}${hexBB2}`
            rgbValueB2.innerHTML = `rgb(${colorRB2}, ${colorGB2}, ${colorBB2})`
        } else {
            hValB2.innerHTML = `#${hexRB2}${hexGB2}${hexBB2}${hexA1B2}${hexA2B2}`
            rgbValueB2.innerHTML = `rgba(${colorRB2}, ${colorGB2}, ${colorBB2}, ${colorAB2})`
        }

        let hexValA = (colorA2B2 * 1000) / 62.5
        if (hexValA - Math.floor(hexValA) === 0){
            hexA1B2 = hexDictionary[hexValA - 1]
            hexA2B2 = '0'
        } else {
            let hexRemainder = hexValA - Math.floor(hexValA)
            hexA1B2 = hexDictionary[(hexValA - hexRemainder)]
            let hexValB = (hexRemainder * 1000) / 62.5
            hexA2B2 = hexDictionary[Math.floor(hexValB)]
        }
    } else {
        colorA = val
        colorA2 = val
        if(colorA > .999){
            hVal.innerHTML = `#${hexR}${hexG}${hexB}`
            rgbValue.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`
        } else {
            hVal.innerHTML = `#${hexR}${hexG}${hexB}${hexA1}${hexA2}`
            rgbValue.innerHTML = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`
        }

        let hexValA = (colorA2 * 1000) / 62.5
        if (hexValA - Math.floor(hexValA) === 0){
            hexA1 = hexDictionary[hexValA - 1]
            hexA2 = '0'
        } else {
            let hexRemainder = hexValA - Math.floor(hexValA)
            hexA1 = hexDictionary[(hexValA - hexRemainder)]
            let hexValB = (hexRemainder * 1000) / 62.5
            hexA2 = hexDictionary[Math.floor(hexValB)]
        }
    }
    
    displayColor.style.backgroundColor = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`
    backgroundOne.style.backgroundColor = `rgba(${colorRB1}, ${colorGB1}, ${colorBB1}, ${colorAB1})`
    backgroundTwo.style.backgroundColor = `rgba(${colorRB2}, ${colorGB2}, ${colorBB2}, ${colorAB2})`

}



copyDictionary = {
    'rgbCopyB1': 'rgbValuesB1',
    'hexCopyB1': 'hValB1',
    'rgbCopy': 'rgbValues',
    'hexCopy': 'hVal',
    'rgbCopyB2': 'rgbValuesB2',
    'hexCopyB2': 'hValB2'
}

// Copy functions found on https://www.arclab.com/en/kb/htmlcss/how-to-copy-text-from-html-element-to-clipboard.html
function copyHex (id) {
    let r = document.createRange()
    r.selectNode(document.getElementById(copyDictionary[id]))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(r)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
}

function copyRGB(id) {
    let r = document.createRange()
    r.selectNode(document.getElementById(copyDictionary[id]))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(r)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
}
