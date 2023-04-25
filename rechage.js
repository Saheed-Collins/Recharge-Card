
// let mtn = document.getElementById("mtn")
// let airtel = document.getElementById("airtel")
// let NineMo = document.getElementById("9mobile")
// let glo = document.getElementById("glo")
// let fifty = document.getElementById("50")
// let hund = document.getElementById("100")
// let twoHund = document.getElementById("200")
// let fiveHund = document.getElementById("500")
// let oneThou = document.getElementById("1000")


let generatePin = document.getElementById("generatePin")

let body=document.getElementById("body")
let conte = [];

let network = document.getElementById('network');

let amount = document.getElementById ('amount')

let CardPin = '';

let show = document.getElementById ('show')

let today = new Date ()
let dd = today.getDate()
let mm = today.getMonth()
let yy = today.getFullYear();

let modalBox = document.getElementById('modalBox')
let modalText = document.getElementById('modaText')


// console.log(network.value);
// console.log(amount.value);

// to generate the pin while clearing the former
function generateCardpin() {
let CardPin = ''
	for (let index = 0; index < 11; index++) {
		CardPin += Math.floor(Math.random() * 10);
	}
// console.log(CardPin);
	return CardPin;
    
}

// to generate pin
function GenerateP() {
    // let printStar;

    if (network.value === 'MTN NG' || amount.value === ['50', '100', '200', '500', '1000'] ) {
        generatePin.value  = generateCardpin()
        printStar = `*555*${generatePin.value}# `
    } 
    
    else if (network.value === 'Airtel NG' || amount.value === ['50', '100', '200', '500', '1000'] ){ 
    generatePin.value  = generateCardpin()
    printStar = `*222*${generatePin.value}# `
    } 
    
    else if (network.value === '9 Mobile' || amount.value === ['50', '100', '200', '500', '1000'] ) {
        generatePin.value  = generateCardpin()
        printStar = `*123*${generatePin.value}# `
    }
    
    else if (network.value === 'Glo' || amount.value === ['50', '100', '200', '500', '1000'] ) {
        generatePin.value  = generateCardpin()
        printStar = `*127*${generatePin.value}# `
    }

    
    let downData = {netw:network.value, amoun:amount.value, printStar:printStar, date: (dd +'/'+mm+'/'+yy), stats: false };
    conte.push (downData);

}

// for modal
 function displayModal(message, status) {
        scroll (0,0)
    
        modalBox.style.display = 'flex'
    
        if (status) {
            modalText.style.background = 'green'
            
        } else  {
            modalText.style.background = 'red'
        }
        
    }
    function setBackDropToHidden(){
        modalBox.style.display = 'none'
      
       }

// to push into table
function PushPinInfo() {


//  displayModal('Pin Saved', true)

    body.innerHTML = ''
    conte.forEach(function(element, index) {
    body.innerHTML += 
    `<tr class="w-100">
        <td>${index+1} </td>
        <td>${element.netw}</td>
        <td>${element.date} </td>
        <td>${element.amoun} </td>
        <td>${element.printStar} </td>
        <td>${element.stats ? `<span>USED</span>`: `<span>UNUSED</span>`} </td>
        <td class="bg-danger">
        <button onclick="delet (${index})" class="px-2 mt-0 border border-0 text-white bg-danger"> Delete </button>
        </td>
        
    </tr>
    `   
    // body.innerHTML = ''
    display.value = element.printStar;
    generatePin.value = ''
    amount.value = ''

    
    })
}
function delet(index) {
    conte.splice(index, 1)
    PushPinInfo(); 
}


// for recharge card

// function recharge() {
    

//     // conte.forEach(i=>{
//     //     console.log(i);

//     //     if (display.value == i.printStar) {
//     //         alert('Recharge Successful')
          
//     //         display.value = ''
//     //          } 
//     //         else if (display.value == i.printStar) {
//     //              alert ('pin Used')  
//     //         } return;
//     // })
//     let seen = false;
//     conte.forEach(i=>{
//         console.log(i);

//         if (display.value == i.printStar) {
//             alert('Recharge Successful')
//             seen = true
            
//             conte.forEach ((i)=>{
//                 i.stats = 'Used'
//                 PushPinInfo()
//                 seen = true
//                 display.value = ''
//             } ) 

//         } if (seen) {
//             alert ('pin Used')  
//         } else  {
//                  alert ('pin Used')  
//                 //  display.value = ''    
//             } 
//     })

   
// }
function recharge() {

    let find =conte.find((a)=>a.printStar===display.value)
    if (!find) {
        displayModal('invalid pin', false)
    }
    if (find.status) {
        displayModal('Pin Used', false)
        return
    }
   
    let seen = false;
    conte.forEach(i=>{
        // console.log(i);

        if (display.value == i.printStar) {

            // recharge.onclick = function() {
            //     modalM.style.display = "block"
            // }
            
            seen = true
            displayModal('Pin Recharged', true)
            conte.forEach ((i)=>{
                i.stats = 'Used'
                PushPinInfo()
                seen = true
                display.value = ''
            } ) 

        } if (seen) {
            alert ('pin Used')  
        } else  {
                 alert ('pin Used')  
                //  display.value = ''    
            } 
    })

    
}


// to show modal
// function recharge() {
//     let pop = document.querySelector ('modal')
//     let closePopUp = document.querySelector ('closePopUp')

//     recharge.onclick = function (){
//         pop.style.display = 'block'
//     }

// }







//     if (network.value = amount.value) {
//         let nums = Math.floor( 123 + Math.random() * 90000000000) 
//     generatePin.value = display.value = nums;
//    console.log(nums); 
//     }
  


// function PushPinInfo() {
//     // body.innerHTML = ''

//     body.innerHTML += 
//     `
//     <tr>
//     <td>${index+1} </td>
//         <td>${network.innerHTML}</td>
//         <td>${VarDate} </td>
//         <td>${amount.innerHTM} </td>
//         <td>${display.value} </td>
//     </tr>
//     `
    
// }