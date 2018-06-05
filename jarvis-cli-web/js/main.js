var root = 'http://slattaker.tgb.ninja:3000/#';
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);

var createCard = function(arr) {
  for (var x=0; x<arr.length; x++){
    var card = document.createElement('div')
    card.style.width = '25%'
    card.className = 'w3-card-4'

    var img = document.createElement('img')

    if(arr[x].name == 'Hulk'){
      img.src = '/assets/littlehulk.png'
    }
    else  if(arr[x].name == 'Captain America'){
      img.src = '/assets/captainamerica.png'
    }
    else  if(arr[x].name == 'Spider-Man'){
      img.src = '/assets/spiderman.png'
    }
    else  if(arr[x].name == 'Vision'){
      img.src = '/assets/vision.png'
    }
    else  if(arr[x].name == 'Thor'){
      img.src = '/assets/thorpic.png'
    }  

    card.append(img)

    var cardContainer = document.createElement('div')
    cardContainer.className = 'w3-container w3-center'
    card.append(cardContainer) 

    var note = document.createElement('p')
    note.innerHTML = arr[x].description
    cardContainer.append(note)

    content.append(card)
  }
}

var getAvengers = function() {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4){
      createCard(JSON.parse(this.responseText)) 
    }
  }
   
  req.open('Get', 'http://slattaker.tgb.ninja:4000')
  req.send()
}

 
router.on(function () {
  var content = document.getElementById('content')

  var button = document.createElement('button')
  button.onclick = getAvengers 
  button.innerHTML = 'Get Avengers'

  content.append(button)
}).resolve();
