//1.Ans
// function largerThanNumber(array, number) {
//     let result = []
    
//     for (let element of array) {
//         if (element > number) {
//             result.push(element);
//         }
       
//     }
//     return result;
// }


//ex2 AC Ans
let arr  = [8,9,10,1,2,3,4,5,6,7];
let num = 5;
//element larger then a number num
function getElements(arr,num) {
    for (let i=0; i< arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr,num); //call


