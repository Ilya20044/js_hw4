//exersize 1
// {
//     arr = [1, 2, 3, 4,5];
//     for (let i = 0; i<= arr.length; i++){
//         console.log(arr[i]);
//     }
// }
//exersize 2
// {
//     arr = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > -10 && arr[i] < -3){
//             console.log(arr[i]);
//         }
//     }
// }
//exersize 3
// {
//     arr = [];
//     let result = 0;
//     for (let i = 23; i<=57; i++){
//         arr.push(i++);
//         console.log(arr);
//         result +=i
//         console.log(result); 
//     }
// }
// {
//     let a = 57;
//     arr = [];
//     while(a>=23){
//         arr.push(a--);
//         console.log(arr);
//     }
// }
//exersize 4
// {
//     arr = ['10','20','30','50','235','3000'];
//     console.log(arr);
//     arr.forEach((item) => {
//         if(item.startsWith('1')|| item.startsWith('2')|| item.startsWith('5')){
//             console.log(item);
//         }
//     });
// }
//exersize 5
// {
//     arr = ['пн','вт','ср','чт','пт','сб','вс']
//     for(let i = 0; i<arr.length - 2; i++){
//         document.write(arr[i]+' ');
//     }
//     document.write(`<b>${arr[5]}<b>`+' ');
//     document.write(`<b>${arr[6]}<b>`);
// }
//exersize 6
// {
//     arr = [1,2,3,4,5,6,1235];
//     let a = arr[arr.length - 1];
//     console.log(a);
// }
//exersize 7
// {
//     let arrsize = prompt('введите размер массива');
//     arr = [];
//     for (let i = 1; i<=arrsize; i++){
//         let num = +prompt('введите число')
//         if(isFinite(num)){
//             arr.push(num);
//             console.log(arr); 
//         }else{
//             alert('это не число');
//         }
//         arr.sort((a,b) => a-b);
//         console.log(arr);
//     }
    
// }
//exersize 8
// {
//     arr = [12, false, 'Текст', 4, 2, -5, 0];
//     arr.reverse();
//     console.log(arr);
// }
//exersize 9
// {

//     arr = [5, 9, 21, , , 9, 78, , , , 6];
//     let pusto = 0
//     console.log(arr);
//     for(let i = 0; i<arr.length; i++){
//         if (arr[i]===undefined){
//             pusto++;
//         }
//     }
//     console.log(pusto);
// }
//exersize 10
{
    arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
    let sum = 0;
    let start = arr.indexOf(0);
    let end = arr.lastIndexOf(0);
    for(let i = start; i < end; i++){
        sum+=arr[i];
    }
    console.log(sum);
}