var btnSubmit = document.getElementById('submit') as HTMLButtonElement;

var userRating = document.getElementById('rating')as HTMLInputElement;
var userName = document.getElementById('name') as HTMLInputElement;
var userCommit = document.getElementById('commit') as HTMLInputElement;

var template = document.getElementById('responseTemplate') as HTMLTemplateElement;
var insertionPoint = document.getElementById('responsePoint');

var count = 1;
var average: number[] = [];

btnSubmit.addEventListener('click', (event)=> {
    var template = getTemplateClone('responseTemplate');       
    template.content.getElementById('userRating')!.innerHTML = userRating.value;       
    
    count = count + 1;      
    var rate = parseInt(userRating.value);
    average.push(rate);
    getAverage();
    template.content.getElementById('userName')!.innerHTML = userName.value;  
    template.content.getElementById('userReview')!.innerText = userCommit.value;  
    insertionPoint?.appendChild(template.content);


});
var sum = 5;
function getAverage()
{
average.forEach(element => {
    sum += element;
    console.log('Element is ' + element)
    console.log('Sum is ' + sum)
    average.pop();
});
console.log('the count is listed as ' + count)
var whatever = sum / count;
console.log('average is listed as ' + whatever)
return document.getElementById('averageRating')!.innerHTML = whatever.toString();
}
function getTemplateClone(templateID:string): HTMLTemplateElement
{
    return document.getElementById('responseTemplate')?.cloneNode(true) as HTMLTemplateElement;
}


