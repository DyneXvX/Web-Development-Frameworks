"use strict";
var btnSubmit = document.getElementById('submit');
var userRating = document.getElementById('rating');
var userName = document.getElementById('name');
var userCommit = document.getElementById('commit');
var template = document.getElementById('responseTemplate');
var insertionPoint = document.getElementById('responsePoint');
var count = 1;
var averageArray = [];
btnSubmit.addEventListener('click', function (event) {
    var _a;
    if (Validation() == false)
        return;
    var template = getTemplateClone('responseTemplate');
    template.content.getElementById('userRating').innerHTML = userRating.value;
    count = count + 1;
    var rate = parseInt(userRating.value);
    averageArray.push(rate);
    getAverage();
    template.content.getElementById('userName').innerHTML = userName.value;
    template.content.getElementById('userReview').innerText = userCommit.value;
    insertionPoint === null || insertionPoint === void 0 ? void 0 : insertionPoint.appendChild(template.content);
    //if you check this can you let me know why it refreshes I thought defer stopped that?
    event.preventDefault();
    (_a = document.querySelector('form')) === null || _a === void 0 ? void 0 : _a.reset();
});
//first review joke
var sum = 5;
function getAverage() {
    averageArray.forEach(function (element) {
        sum += element;
        averageArray.pop();
    });
    var average = sum / count;
    var roundAverage = Math.round(average * 100) / 100;
    return document.getElementById('averageRating').innerHTML = roundAverage.toString();
}
function Validation() {
    //required value check        
    if (userRating.value == "" || userName.value == "" || userCommit.value == "") {
        return false;
    }
    return true;
}
function getTemplateClone(templateID) {
    var _a;
    return (_a = document.getElementById('responseTemplate')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
}
//# sourceMappingURL=index.js.map