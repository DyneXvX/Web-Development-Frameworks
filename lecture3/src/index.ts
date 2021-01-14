var btnSubmit = document.getElementById('btnSubmit') as HTMLButtonElement;
var txtUserName = document.getElementById('txtUserName') as HTMLInputElement;
var dtDob = document.getElementById('dtDOB') as HTMLInputElement;

var template = document.getElementById('responseTemplate') as HTMLTemplateElement;
var insertionPoint = document.getElementById('responsePoint');

btnSubmit.addEventListener('click', (event)=> {
    console.log('Name ' + txtUserName.value);
    console.log('Date of Birth ' + dtDob.value);

    var currentDate = new Date();
    var enteredDate = new Date(dtDob.value);

    console.log(currentDate);
    console.log(enteredDate);


    var template = getTemplateClone('responseTemplate');
    let age = currentDate.getFullYear() - enteredDate.getFullYear();
    template.content.getElementById('ageOfCurrentUser')!.innerText = age.toString();
    insertionPoint?.appendChild(template.content);


});
                                                                   

function getTemplateClone(templateID:string): HTMLTemplateElement
{
    return document.getElementById('responseTemplate')?.cloneNode(true) as HTMLTemplateElement;
}