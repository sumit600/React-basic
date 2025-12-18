var h1 = React.createElement('h1',null,"hi from React")
var h2 = React.createElement('h2',null,"this is h2")


var div = React.createElement('div',{id:'parents',class:'elem'},[h1,h2])



var Root = ReactDOM.createRoot(document.querySelector("#container"))


Root.render(div)