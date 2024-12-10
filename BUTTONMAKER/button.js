let backgroundElement=document.getElementById('background')
let fontcolorElement=document.getElementById('fontcolor')
let fontsizeElement=document.getElementById('fontsize')
let fontweightElement=document.getElementById('fontweight')
let paddingElement=document.getElementById('padding')
let borderradiusElement=document.getElementById('borderradius')

let resultButton=document.getElementById('resultButton')

function onButton() {

    resultButton.style.backgroundColor=backgroundElement.value
    resultButton.style.color=fontcolorElement.value
    resultButton.style.fontSize=fontsizeElement.value
    resultButton.style.fontWeight=fontweightElement.value
    resultButton.style.padding=paddingElement.value
    resultButton.style.borderRadius=borderradiusElement.value
}