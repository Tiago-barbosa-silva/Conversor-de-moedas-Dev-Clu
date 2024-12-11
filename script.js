
const conversor = document.querySelector('.button-converter')

const currencyConverted = document.querySelector('.currency-select-de')
const currencyConverting = document.querySelector ('.currency-select-para')
const valueEnd = document.querySelector('.currency-value')

conversor.addEventListener('click', buttonConverted)

const CURRENCY_OPTIONS = {
   DOLAR: 6.05,
   EURO: 6.37,
   LIBRA: 7.72,
   REAL: 0.17
}




function buttonConverted(){
const valueCurrency = document.querySelector('input').value

   if(currencyConverted.value == 'real' && currencyConverting.value == 'dolar'){
      valueEnd.innerHTML = valueCurrency / CURRENCY_OPTIONS.DOLAR
   }else if (currencyConverted.value == 'real' && currencyConverting.value == 'euro'){
      valueEnd.innerHTML = valueCurrency / CURRENCY_OPTIONS.EURO
   }else if (currencyConverted.value == 'real' && currencyConverting.value == 'libra'){
      valueEnd.innerHTML = valueCurrency / CURRENCY_OPTIONS.LIBRA
   }else{
      valueEnd.innerHTML = valueCurrency
   }

   if(currencyConverted.value == 'dolar' && currencyConverting.value == 'real'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.REAL
   }else if (currencyConverted.value == 'dolar' && currencyConverting.value == 'libra'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.LIBRA
   }else if (currencyConverted.value == 'dolar' && currencyConverting.value == 'euro'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.EURO
   }

   if(currencyConverted.value == 'libra' && currencyConverting.value == 'real'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.REAL
   }else if (currencyConverted.value == 'libra' && currencyConverting.value == 'dolar'){
      valueEnd.innerHTML = valueCurrency / CURRENCY_OPTIONS.DOLAR
   }else if (currencyConverted.value == 'libra' && currencyConverting.value == 'euro'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.EURO
   }

   if(currencyConverted.value == 'euro' && currencyConverting.value == 'real'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.REAL
   }else if (currencyConverted.value == 'euro' && currencyConverting.value == 'dolar'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.DOLAR
   }else if (currencyConverted.value == 'euro' && currencyConverting.value == 'libra'){
      valueEnd.innerHTML = valueCurrency * CURRENCY_OPTIONS.LIBRA
   }



   if(currencyConverting.value == 'real'){
    valueEnd.innerHTML = new Intl.NumberFormat('pt-BR', {
              style:'currency',
              currency:'BRL'
             }).format(valueCurrency )
   }
      if(currencyConverting.value == "dolar"){
      valueEnd.innerHTML= new Intl.NumberFormat("en-US", {
           style:"currency",
           currency:"USD"
          }).format(valueCurrency )
   
      }
      if(currencyConverting.value == "libra"){
         valueEnd.innerHTML= new Intl.NumberFormat("en-GB", {
              style:"currency",
              currency:"GBP"
             }).format(valueCurrency )
      
         }
         if(currencyConverting.value == "euro"){
            valueEnd.innerHTML= new Intl.NumberFormat("de-DE", {
                 style:"currency",
                 currency:"EUR"
                }).format(valueCurrency )
         
            }
}


























































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