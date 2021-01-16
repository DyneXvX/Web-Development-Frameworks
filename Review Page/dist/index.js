"use strict";
var btnSubmit = document.getElementById('submit');
var userRating = document.getElementById('rating');
var userName = document.getElementById('name');
var userCommit = document.getElementById('commit');
var template = document.getElementById('responseTemplate');
var insertionPoint = document.getElementById('responsePoint');
btnSubmit.addEventListener('click', function (event) {
    console.log('Rating ' + userRating.value);
    console.log('Name ' + userName.value);
    console.log('Commit ' + userCommit.value);
    var template = getTemplateClone('responseTemplate');
    insertionPoint === null || insertionPoint === void 0 ? void 0 : insertionPoint.appendChild(template.content);
});
//# sourceMappingURL=index.js.map