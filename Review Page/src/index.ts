var btnSubmit = document.getElementById('submit') as HTMLButtonElement;

var userRating = document.getElementById('rating')as HTMLInputElement;
var userName = document.getElementById('name') as HTMLInputElement;
var userCommit = document.getElementById('commit') as HTMLInputElement;

var template = document.getElementById('responseTemplate') as HTMLTemplateElement;
var insertionPoint = document.getElementById('responsePoint');

var count = 1;
var averageArray: number[] = [];

btnSubmit.addEventListener('click', (event)=> {    
        if (Validation() == false)       
            return;
        
        
        var template = getTemplateClone('responseTemplate');       
        template.content.getElementById('userRating')!.innerHTML = userRating.value;       
        
        count = count + 1;
    
        var rate = parseInt(userRating.value);
        averageArray.push(rate);
        getAverage();
    
        template.content.getElementById('userName')!.innerHTML = userName.value;  
        template.content.getElementById('userReview')!.innerText = userCommit.value;  
        insertionPoint?.appendChild(template.content);

        //if you check this can you let me know why it refreshes I thought defer stopped that?
        event.preventDefault();
        document.querySelector('form')?.reset();
        
        
});
//first review joke
var sum = 5;

function getAverage()
{
    averageArray.forEach(element => {
        sum += element;
        averageArray.pop();
    });

    var average = sum / count;
    var roundAverage = Math.round(average*100)/100;
    return document.getElementById('averageRating')!.innerHTML = roundAverage.toString();
}

function Validation()
{    
    //required value check        
    if(userRating.value == "" || userName.value == "" || userCommit.value == "")
    {        
        return false;
    }     
    return true;
    
}

function getTemplateClone(templateID:string): HTMLTemplateElement
{
    return document.getElementById('responseTemplate')?.cloneNode(true) as HTMLTemplateElement;
}


