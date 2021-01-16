var btnSubmit = document.getElementById('submit') as HTMLButtonElement;

var userRating = document.getElementById('rating') as HTMLInputElement;
var userName = document.getElementById('name') as HTMLInputElement;
var userCommit = document.getElementById('commit') as HTMLInputElement;

var template = document.getElementById('responseTemplate') as HTMLTemplateElement;
var insertionPoint = document.getElementById('responsePoint');

btnSubmit.addEventListener('click', (event)=> {
    console.log('Rating ' + userRating.value);
    console.log('Name ' + userName.value);
    console.log('Commit ' + userCommit.value);

    var template = getTemplateClone('responseTemplate');      
    insertionPoint?.appendChild(template.content);


});