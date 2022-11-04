
//  --------------------- TODO APP --------------
function del(element){
  element.parentNode.remove()
  console.log(element)
}
function generateElement(){
  var p = document.createElement('p');
  var text = "display"
  var txtNode = document.createTextNode(text)
  p.setAttribute('class','pera')

  // var inp = document.getElementById('inp')

  p.appendChild(txtNode)

  var btn = document.createElement('BUTTON')
  var btnText = "Delete"
  btnText = document.createTextNode(btnText)
  btn.appendChild(btnText)
  btn.setAttribute('onclick' , 'del(this)')
  p.appendChild(btn)

  console.log(p)
var parent = document.getElementById('parent')
parent.appendChild(p)
}

