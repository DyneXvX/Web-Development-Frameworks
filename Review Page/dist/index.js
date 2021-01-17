"use strict";
var btnSubmit = document.getElementById('submit');
var userRating = document.getElementById('rating');
var userName = document.getElementById('name');
var userCommit = document.getElementById('commit');
var template = document.getElementById('responseTemplate');
var insertionPoint = document.getElementById('responsePoint');
var count = 1;
var average = [];
btnSubmit.addEventListener('click', function (event) {
    var template = getTemplateClone('responseTemplate');
    template.content.getElementById('userRating').innerHTML = userRating.value;
    count = count + 1;
    var rate = parseInt(userRating.value);
    average.push(rate);
    getAverage();
    template.content.getElementById('userName').innerHTML = userName.value;
    template.content.getElementById('userReview').innerText = userCommit.value;
    insertionPoint === null || insertionPoint === void 0 ? void 0 : insertionPoint.appendChild(template.content);
});
var sum = 5;
function getAverage() {
    average.forEach(function (element) {
        sum += element;
        console.log('Element is ' + element);
        console.log('Sum is ' + sum);
        average.pop();
    });
    console.log('the count is listed as ' + count);
    var whatever = sum / count;
    console.log('average is listed as ' + whatever);
    return document.getElementById('averageRating').innerHTML = whatever.toString();
}
function getTemplateClone(templateID) {
    var _a;
    return (_a = document.getElementById('responseTemplate')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
}
//# sourceMappingURL=index.js.map