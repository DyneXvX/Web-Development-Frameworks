"use strict";
var btnSubmit = document.getElementById('btnSubmit');
var txtUserName = document.getElementById('txtUserName');
var dtDob = document.getElementById('dtDOB');
var template = document.getElementById('responseTemplate');
var insertionPoint = document.getElementById('responsePoint');
btnSubmit.addEventListener('click', function (event) {
    console.log('Name ' + txtUserName.value);
    console.log('Date of Birth ' + dtDob.value);
    var currentDate = new Date();
    var enteredDate = new Date(dtDob.value);
    console.log(currentDate);
    console.log(enteredDate);
    var template = getTemplateClone('responseTemplate');
    var age = currentDate.getFullYear() - enteredDate.getFullYear();
    template.content.getElementById('ageOfCurrentUser').innerText = age.toString();
    insertionPoint === null || insertionPoint === void 0 ? void 0 : insertionPoint.appendChild(template.content);
});
function getTemplateClone(templateID) {
    var _a;
    return (_a = document.getElementById('responseTemplate')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
}
//# sourceMappingURL=index.js.map