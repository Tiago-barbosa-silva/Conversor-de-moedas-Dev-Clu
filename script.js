
const conversor = document.querySelector('.button-converter')

const currencyConverted = document.querySelector('.currency-select-de')
const currencyConverting = document.querySelector ('.currency-select-para')
const valueEnd = document.querySelector('.currency-value')
const valueconverted = document.querySelector ('.currency-value-to-convert')

conversor.addEventListener('click', buttonConverted)



const dolarTodayReal = 6.27
const euroTodayReal = 6.5
const libraTodayReal = 7.9


const realTodayDolar = 6.27
const euroTodayDolar = 0.97
const libraTodayDolar = 0.79


const dolarTodayEuro = 1.04
const realTodayEuro = 6.5
const libraTodayEuro = 0.82


const dolarTodayLibra = 1.26
const euroTodayLibra = 1.21
const realTodayLibra = 7.89





function buttonConverted(){
let valueCurrency = document.querySelector('input').value

//REAL
if(currencyConverted.value == 'real' && currencyConverting.value == 'dolar'){
   valueEnd.innerHTML = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:'USD'
   }).format(valueCurrency / dolarTodayReal)

   valueconverted.innerHTML = new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'real' && currencyConverting.value == 'libra'){
   valueEnd.innerHTML = new Intl.NumberFormat('en-UK', {
      style:'currency',
      currency:'GBP'
   }).format(valueCurrency / libraTodayReal)

   valueconverted.innerHTML = new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'real' && currencyConverting.value == 'euro'){
   valueEnd.innerHTML = new Intl.NumberFormat('de-DE', {
      style:'currency',
      currency:'EUR'
   }).format(valueCurrency / euroTodayReal)

   valueconverted.innerHTML = new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'real' && currencyConverting.value == 'real'){
   valueEnd.innerHTML = new Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency:'BRL'
   }).format(valueCurrency )

   valueconverted.innerHTML = new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL'
   }).format(valueCurrency)
}

//DOLAR
if(currencyConverted.value == 'dolar' && currencyConverting.value == 'real'){
   valueEnd.innerHTML = new Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency:'BRL'
   }).format(valueCurrency * realTodayDolar)

   valueconverted.innerHTML = new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'dolar' && currencyConverting.value == 'libra'){
   valueEnd.innerHTML = new Intl.NumberFormat('en-UK', {
      style:'currency',
      currency:'GBP'
   }).format(valueCurrency * libraTodayDolar)

   valueconverted.innerHTML = new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'dolar' && currencyConverting.value == 'euro'){
   valueEnd.innerHTML = new Intl.NumberFormat('de-DE', {
      style:'currency',
      currency:'EUR'
   }).format(valueCurrency * euroTodayDolar)

   valueconverted.innerHTML = new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'dolar' && currencyConverting.value == 'dolar'){
   valueEnd.innerHTML = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:'USD'
   }).format(valueCurrency )

   valueconverted.innerHTML = new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
   }).format(valueCurrency)
}

//LIBRA
if(currencyConverted.value == 'libra' && currencyConverting.value == 'real'){
   valueEnd.innerHTML = new Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency:'BRL'
   }).format(valueCurrency * realTodayLibra)

   valueconverted.innerHTML = new Intl.NumberFormat('en-UK',{
      style: 'currency',
      currency: 'GBP'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'libra' && currencyConverting.value == 'dolar'){
   valueEnd.innerHTML = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:'USD'
   }).format(valueCurrency * dolarTodayLibra)

   valueconverted.innerHTML = new Intl.NumberFormat('en-UK',{
      style: 'currency',
      currency: 'GBP'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'libra' && currencyConverting.value == 'euro'){
   valueEnd.innerHTML = new Intl.NumberFormat('de-DE', {
      style:'currency',
      currency:'EUR'
   }).format(valueCurrency * euroTodayLibra)

   valueconverted.innerHTML = new Intl.NumberFormat('en-UK',{
      style: 'currency',
      currency: 'GBP'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'libra' && currencyConverting.value == 'libra'){
  valueEnd.innerHTML = new Intl.NumberFormat('en-UK',{
      style: 'currency',
      currency: 'GBP'
   }).format(valueCurrency)

   valueconverted.innerHTML = new Intl.NumberFormat('en-UK',{
      style: 'currency',
      currency: 'GBP'
   }).format(valueCurrency)
   
}

//EURO
if(currencyConverted.value == 'euro' && currencyConverting.value == 'real'){
   valueEnd.innerHTML = new Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency:'BRL'
   }).format(valueCurrency * realTodayEuro)

   valueconverted.innerHTML = new Intl.NumberFormat('de-DE',{
      style: 'currency',
      currency: 'EUR'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'euro' && currencyConverting.value == 'dolar'){
   valueEnd.innerHTML = new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:'USD'
   }).format(valueCurrency * dolarTodayEuro)

   valueconverted.innerHTML = new Intl.NumberFormat('de-DE',{
      style: 'currency',
      currency: 'EUR'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'euro' && currencyConverting.value == 'libra'){
   valueEnd.innerHTML = new Intl.NumberFormat('en-UK', {
      style:'currency',
      currency:'GBP'
   }).format(valueCurrency * libraTodayEuro)

   valueconverted.innerHTML = new Intl.NumberFormat('de-DE',{
      style: 'currency',
      currency: 'EUR'
   }).format(valueCurrency)
  
}else if(currencyConverted.value == 'euro' && currencyConverting.value == 'euro'){
  valueEnd.innerHTML = new Intl.NumberFormat('de-DE',{
      style: 'currency',
      currency: 'EUR'
   }).format(valueCurrency)

   valueconverted.innerHTML = new Intl.NumberFormat('de-DE',{
      style: 'currency',
      currency: 'EUR'
   }).format(valueCurrency)
}




}

const imageConverting = document.querySelector ('.img-convertendo')
const imageconverted = document.querySelector ('.img-converted')
const nameCurrency = document.querySelector('.currency-convertendo')
const nameCurrencyConverted = document.querySelector ('.currency')

function changeImageconverting(){
   let valuetoconverting = document.querySelector('input')

   if(currencyConverted.value == 'dolar'){
     imageConverting.src = './img/USA.png'
     nameCurrency.innerHTML = '$ Dolar Americano '
     valuetoconverting.placeholder  = '$ 0,00'
     

   }else if(currencyConverted.value == 'euro'){
      imageConverting.src = './img/euro.png'
      nameCurrency.innerHTML = '€ Euro '
      valuetoconverting.placeholder  = '€ 0,00'

   }else if(currencyConverted.value == 'libra'){
      imageConverting.src = './img/libra.png'
      nameCurrency.innerHTML = '£ Libra '
      valuetoconverting.placeholder  = '£ 0,00'

   }else if(currencyConverted.value == 'real'){
   imageConverting.src = './img/real.png'
   nameCurrency.innerHTML = 'R$ Real Brasileiro '
   valuetoconverting.placeholder  = 'R$ 0,00'

}

buttonConverted()
}

function changeImageConverted(){
console.log('mudou')
   if(currencyConverting.value == 'real'){
    imageconverted.src = './img/real.png'
    nameCurrencyConverted.innerHTML = 'R$ Real Brasileiro '

   }else if(currencyConverting.value == 'dolar'){
      imageconverted.src = './img/USA.png'
      nameCurrencyConverted.innerHTML = '$ Dolar Americano '

   }else if(currencyConverting.value == 'libra'){
      imageconverted.src = './img/libra.png'
      nameCurrencyConverted.innerHTML = '£ Libra '

   }else if(currencyConverting.value == 'euro'){
      imageconverted.src = './img/euro.png'
      nameCurrencyConverted.innerHTML = '€ Euro '
   }

   buttonConverted()
}


currencyConverted.addEventListener('change', changeImageconverting)

currencyConverting.addEventListener('change', changeImageConverted )
























































// const buttonconverter = document.querySelector(".button-converter")


//  buttonconverter.addEventListener ("click", convertvalues)

//  const dollartoday = 5.2
//   const eurotoday = 6.2
//   const libratoday = 7.2
//   const realtoday = 1

//  function convertvalues () {
//  let conversordemoedas = document.querySelector("input").value

 

//   // const valorconvertido = conversordemoedas / dollartoday
//   let currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
//   let currencyvalueconverted= document.querySelector(".currency-value")
  
// // if(currencyselectde.value == "dolar-a" && currencyselectpara.value == "real"){
// //    conversordemoedas * 5.8
// // }



//    if(currencyselectpara.value == "dolar"){
//     currencyvalueconverted.innerHTML= new Intl.NumberFormat("en-US", {
//         style:"currency",
//         currency:"USD"
//        }).format(conversordemoedas / dollartoday)

//    }

//    if(currencyselectpara.value == "euro"){
//     currencyvalueconverted.innerHTML= new Intl.NumberFormat("de-DE", {
//         style:"currency",
//         currency:"EUR"
//        }).format(conversordemoedas / eurotoday)
//     }

//     if(currencyselectpara.value == "real"){
//         currencyvalueconverted.innerHTML= new Intl.NumberFormat("pt-BR", {
//         style:"currency",
//         currency:"BRL"
//        }).format(conversordemoedas / realtoday)
//     }

//     if(currencyselectpara.value == "libra"){
//         currencyvalueconverted.innerHTML= new Intl.NumberFormat("en-GB", {
//          style:"currency",
//          currency:"GBP"
//        }).format(conversordemoedas / libratoday)
//     }



//     if(currencyselectde.value == "real-a"){
//       currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
//          style:"currency",
//          currency:"BRL"
//         }).format( conversordemoedas  )
//         document.querySelector("input").placeholder= new Intl.NumberFormat("pt-BR", {
//          style:"currency",
//          currency:"BRL"
//         }).format( conversordemoedas )

        
//     }

//     if(currencyselectde.value == "dolar-a"){
//       currencyvaluetoconvert.innerHTML =  new Intl.NumberFormat("en-US", {
//          style:"currency",
//          currency:"USD"
//         }).format( conversordemoedas  )
//         document.querySelector("input").placeholder =  new Intl.NumberFormat("en-US", {
//          style:"currency",
//          currency:"USD"
//         }).format(conversordemoedas )
       
      
//     }

//     if(currencyselectde.value == "euro-a"){
//       currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
//          style:"currency",
//          currency:"EUR"
//         }).format( conversordemoedas  )
//         document.querySelector("input").placeholder = new Intl.NumberFormat("de-DE", {
//          style:"currency",
//          currency:"EUR"
//         }).format(conversordemoedas )

       

        
//        }
//     if(currencyselectde.value == "libra-a"){
//       currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-GB", {
//          style:"currency",
//          currency:"GBP"
//        }).format( conversordemoedas )
//        document.querySelector("input").placeholder=new Intl.NumberFormat("en-GB", {
//          style:"currency",
//          currency:"GBP"
//        }).format(conversordemoedas  )

       
 
//       }

    
   
 

 
// }







 













// function changeimage (){
//  if(currencyselectpara.value == "euro"){
//     imgconvertida.src = "./img/euro.png"
//     currencyname.innerHTML = "€ Euro"
//  }

//  if(currencyselectpara.value == "dolar"){
//     imgconvertida.src = "./img/USA.png"
//     currencyname.innerHTML = "US$ Dólar americano"
    
//  }

//  if(currencyselectpara.value == "real"){
//     imgconvertida.src = "./img/real.png"
//     currencyname.innerHTML = "R$ Real brasileiro"
//  }

//  if(currencyselectpara.value == "libra"){
//     imgconvertida.src = "./img/libra.png"
//     currencyname.innerHTML = "£ Libra"
//  }

//  convertvalues ()

// }

// function changeimg(){
//   const conversordemoedas = document.querySelector("input").value

//   if(currencyselectde.value == "real-a"){
//    imgconvertendo.src = "./img/real.png"
//     currencyconvertendo.innerHTML = "R$ Real brasileiro"
    
    
//   }

//   if(currencyselectde.value == "dolar-a"){
//    imgconvertendo.src = "./img/USA.png"
//    currencyconvertendo.innerHTML = "US$ Dólar americano"
   
//  }

//  if(currencyselectde.value == "libra-a"){
//    imgconvertendo.src = "./img/libra.png"
//    currencyconvertendo.innerHTML = "£ Libra"
  
   
//  }

//  if(currencyselectde.value == "euro-a"){
//    imgconvertendo.src = "./img/euro.png"
//    currencyconvertendo.innerHTML = "€ Euro"
   
//  }



//  convertvalues ()


// }


// let currencyconvertendo = document.querySelector(".currency-convertendo")
// let currencyselectde = document.querySelector (".currency-select-de")
// let currencyname = document.getElementById("currency-name")
// let currencyselectpara = document.querySelector(".currency-select-para")
// let imgconvertendo = document.querySelector(".img-convertendo")
// let imgconvertida = document.querySelector(".img-converted")

//  currencyselectpara.addEventListener("change", changeimage)
//  currencyselectde .addEventListener ("change", changeimg )