// const circles = document.getElementsByClassName("circle")

// let circleNumber = 0;

// circles[circleNumber].classList.add("circle--red")

// function onClickNext() {
//     switch (circleNumber) {
//         case 0:
//             circles[circleNumber].classList.remove("circle--red")
//             break;

//         case 1:
//             circles[circleNumber].classList.remove("circle--yellow")
//             break;
//         case 2:
//             circles[circleNumber].classList.remove("circle--green")
//             break;

//         default:
//             break;
//     }

//     if(circleNumber === 2) {
//         circleNumber = 0
//     }
//     else{
//         circleNumber++
//     }

//     switch (circleNumber) {
//         case 0:
//             circles[circleNumber].classList.add("circle--red")
//             break;

//         case 1:
//             circles[circleNumber].classList.add("circle--yellow")
//             break;
//         case 2:
//             circles[circleNumber].classList.add("circle--green")
//             break;

//         default:
//             break;
//     }
// }


let clickNumber = 0;

const colors = document.getElementsByClassName("circle");
const modif = ["circle--red", "circle--yellow", "circle--green"];

colors[clickNumber].classList.add(modif[clickNumber]);

function onClickNext() {
    colors[clickNumber].classList.remove(modif[clickNumber]);
    if (clickNumber === 2) {
        clickNumber = 0;
    } else {
        clickNumber++
    }
    colors[clickNumber].classList.add(modif[clickNumber]);
}


