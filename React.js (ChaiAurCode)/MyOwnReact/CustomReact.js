function renderElement(ReactElement, targetDiv){
    const DOMelement = document.createElement(ReactElement.type)
    DOMelement.setAttribute("src", ReactElement.props.src)
    DOMelement.setAttribute("alt", ReactElement.props.alt)

    targetDiv.appendChild(DOMelement)
}


const ReactElement = {
    type : "img",
    props : {
        src : "./Picsart_24-03-28_18-08-55-618.png",

        alt : "Image"
    }

}

const targetDiv = document.querySelector("#root")


renderElement(ReactElement, targetDiv)