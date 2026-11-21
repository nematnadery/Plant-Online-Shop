let backBtn = document.getElementById('back-btn')
let mainPlantContaner = document.getElementById('detail')
let notFoundMassege = document.getElementById('not-found')
let plantImg = document.getElementById('img')
let plantLabel = document.querySelector('.detail-label')
let plantName = document.getElementById('detail-name')
let plantPrice = document.getElementById('detail-price')
let plantDesc = document.getElementById('detail-desc')

backBtn.addEventListener('click', function(){
  history.back()
})

let locationParams = new URLSearchParams(location.search)
let mainPlantID = locationParams.get('id')


let mainPlant = plants.find(function(plant){
    return plant.id == mainPlantID
})

if (mainPlant){
    plantImg.setAttribute('src', mainPlant.img)
    mainPlantContaner.setAttribute('style', '--accent: ' + mainPlant.color)
    plantName.textContent = mainPlant.name
    plantPrice.textContent = '$' + mainPlant.price
    plantDesc.textContent = mainPlant.desc
    plantLabel.textContent = mainPlant.label
    
}else{
    mainPlantContaner.classList.add('hidden')
    notFoundMassege.classList.remove('hidden')
}
