const buttonconverter = document.querySelector(".button-converter")


 buttonconverter.addEventListener ("click", convertvalues)

 

 function convertvalues () {
  const conversordemoedas = document.querySelector("input").value

 const dollartoday = 5.2
  const eurotoday = 6.2
  const libratoday = 7.2
  const realtoday = 1

  const valorconvertido = conversordemoedas / dollartoday
  const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
  const currencyvalueconverted= document.querySelector(".currency-value")
  
//   currencyvaluetoconvert.innerHTML= new Intl.NumberFormat("pt-BR", {
//    style:"currency",
//    currency:"BRL"
//   }).format(conversordemoedas)



   if(currencyselectpara.value == "dolar"){
    currencyvalueconverted.innerHTML= new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
       }).format(conversordemoedas/ dollartoday)

   }

   if(currencyselectpara.value == "euro"){
    currencyvalueconverted.innerHTML= new Intl.NumberFormat("de-DE", {
        style:"currency",
        currency:"EUR"
       }).format(conversordemoedas/ eurotoday)
    }

    if(currencyselectpara.value == "real"){
        currencyvalueconverted.innerHTML= new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
       }).format(conversordemoedas / realtoday)
    }

    if(currencyselectpara.value == "libra"){
        currencyvalueconverted.innerHTML= new Intl.NumberFormat("en-GB", {
         style:"currency",
         currency:"GBP"
       }).format(conversordemoedas / libratoday)
    }



    if(currencyselectde.value == "real-a"){
      currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
         style:"currency",
         currency:"BRL"
        }).format( conversordemoedas  )
        document.querySelector("input").placeholder= new Intl.NumberFormat("pt-BR", {
         style:"currency",
         currency:"BRL"
        }).format( conversordemoedas )
    }

    if(currencyselectde.value == "dolar-a"){
      currencyvaluetoconvert.innerHTML =  new Intl.NumberFormat("en-US", {
         style:"currency",
         currency:"USD"
        }).format( conversordemoedas )
        document.querySelector("input").placeholder =  new Intl.NumberFormat("en-US", {
         style:"currency",
         currency:"USD"
        }).format(conversordemoedas)
    }

    if(currencyselectde.value == "euro-a"){
      currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
         style:"currency",
         currency:"EUR"
        }).format( conversordemoedas )
        document.querySelector("input").placeholder = new Intl.NumberFormat("de-DE", {
         style:"currency",
         currency:"EUR"
        }).format(conversordemoedas)
    }

    if(currencyselectde.value == "libra-a"){
      currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-GB", {
         style:"currency",
         currency:"GBP"
       }).format( conversordemoedas )
       document.querySelector("input").placeholder=new Intl.NumberFormat("en-GB", {
         style:"currency",
         currency:"GBP"
       }).format(conversordemoedas)
      }
    

 }







 













function changeimage (){
 if(currencyselectpara.value == "euro"){
    imgconvertida.src = "./img/euro.png"
    currencyname.innerHTML = "€ Euro"
 }

 if(currencyselectpara.value == "dolar"){
    imgconvertida.src = "./img/USA.png"
    currencyname.innerHTML = "US$ Dólar americano"
 }

 if(currencyselectpara.value == "real"){
    imgconvertida.src = "./img/real.png"
    currencyname.innerHTML = "R$ Real brasileiro"
 }

 if(currencyselectpara.value == "libra"){
    imgconvertida.src = "./img/libra.png"
    currencyname.innerHTML = "£ Libra"
 }

 convertvalues ()

}

function changeimg(){
 

  if(currencyselectde.value == "real-a"){
   imgconvertendo.src = "./img/real.png"
    currencyconvertendo.innerHTML = "R$ Real brasileiro"
    document.querySelector("input").value= realtoday
  }

  if(currencyselectde.value == "dolar-a"){
   imgconvertendo.src = "./img/USA.png"
   currencyconvertendo.innerHTML = "US$ Dólar americano"
   
 }

 if(currencyselectde.value == "libra-a"){
   imgconvertendo.src = "./img/libra.png"
   currencyconvertendo.innerHTML = "£ Libra"
   
 }

 if(currencyselectde.value == "euro-a"){
   imgconvertendo.src = "./img/euro.png"
   currencyconvertendo.innerHTML = "€ Euro"
   
 }



 convertvalues ()


}



const currencyconvertendo = document.querySelector(".currency-convertendo")
const currencyselectde = document.querySelector (".currency-select-de")
const currencyname = document.getElementById("currency-name")
 const currencyselectpara = document.querySelector(".currency-select-para")
 const imgconvertendo = document.querySelector(".img-convertendo")
 const imgconvertida = document.querySelector(".img-converted")

 currencyselectpara.addEventListener("change", changeimage)
 currencyselectde .addEventListener ("change", changeimg )