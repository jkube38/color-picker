function rSlider(val) {
    colorR = val
    let getHexOne = val / 16
    let firstHex = Math.floor(getHexOne)
    let secondHex = (getHexOne - Math.floor(getHexOne))*16
    hexR = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
    if(colorA > .999){
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}`
        rgbValue.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`
    } else {
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
        rgbValue.innerHTML = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`
    }    
    displayColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB}, ${colorA})`

}

function gSlider(val) {
    colorG = val
    let getHexOne = val / 16
    let firstHex = Math.floor(getHexOne)
    let secondHex = (getHexOne - Math.floor(getHexOne))*16
    hexG = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])

    if(colorA > .999){
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}`
        rgbValue.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`
    } else {
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
        rgbValue.innerHTML = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`
    }
    displayColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB}, ${colorA})`

}

function bSlider(val) {
    colorB = val
    let getHexOne = val / 16
    let firstHex = Math.floor(getHexOne)
    let secondHex = (getHexOne - Math.floor(getHexOne))*16
    hexB = ('' + hexDictionary[firstHex] + hexDictionary[secondHex])
    if(colorA > .999){
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}`
        rgbValue.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`
    } else {
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
        rgbValue.innerHTML = `rgba(${colorR}, ${colorG}, ${colorB}, ${colorA})`
    }
    displayColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB}, ${colorA})`
}

// transparency config for hex
    colorA = val
    colorA2 = val
    if(colorA > .999){
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}`
        rgbValue.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`
    } else {
        hVal.innerHTML = `HEX: #${hexR}${hexG}${hexB}${hexA1}${hexA2}`
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