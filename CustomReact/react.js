
function customRender(createEle , mainContainer){
    const domEle = document.createElement(createEle.type)
    domEle.innerHTML = createEle.Children
    domEle.setAttribute('href',createEle.props.href)
    domEle.setAttribute('target',createEle.props.target)
    mainContainer.appendChild(domEle);
}
const createEle={
    type :'a',
    props:{
        href :'https://google.com',
        target:'_blank'
    },
    Children :'Click me to get more details'
}
const mainContainer = document.getElementById("root");
customRender(createEle, mainContainer);