var ids = ["originationInformation", "juniorLienInformation", "firstMortgageInformation", "amortizationInformation", "propertyInformation", "obligorInformation", "mortgageInsurance", "loanActivity", "servicerInformation", "assetDemand", "chargedOff", "lostIndicator", "loanModificationsInformation", "periodInformation", "stepLoans", "trialModificationInformation", "repaymentPlanInformation", "shortSalesInformation", "mitigationExitInformation", "foreclosureInformation", "relatedREOInformation", "lossesInformation", "insuranceClaimsInformation", "delinquentLoansInformation"];
var customIds = ["originationInformationS", "juniorLeinInformationS", "firstMortgagesInformationS", "amortizationInformationS", "propertyInformationS", "obligorInformationS", "mortgageInsuranceS", "loanActivityS", "servicerInformationS", "assetSubjectToDemandS", "chargedOffInformationS", "lostIndicatorS", "loanModificationsInformationS", "periodInformationS", "stepLoansInformationS", "trialModificationInformationS", "repaymentPlanInformationS", "shortSalesInformationS", "mitigationExitInformationS", "foreclosureInformationS", "relatedToREOInformationS", "lossesInformationS", "insuranceClaimsInformationS", "delinquentLoansInformationS"];
var labelIds = ["labelsOrigination", "labelsJuniorLien", "labelsfirstMortgage", "labelsAmortization", "labelsProperty", "labelsObligor", "labelsMortgageInsurance", "labelsLoanActivity", "labelsServicer", "labelsAsset", "labelsCharged", "labelsLost", "labelsLoanModifications", "labelsPeriod", "labelsStepLoans", "labelsTrial", "labelsRepayment", "labelsShort", "labelsMitigation", "labelsForeclosure", "labelsRelated", "labelsLosses", "labelsInsuranceClaims", "labelsDelinquent"];
// "generalInformation",
// /---------------------------------------
// Utility Functions
//---------------------------------------
//adds a space between words
function space(x) {
    return x.replace(/([a-z])([A-Z])/g, "$1 $2");
}
//used to show an hide child sections
function hideAndSeek(element, out) {
    //set element chain variable to the selector using passed in id dtat
    var elementChain = document.getElementById(element);

    //select the previous sibling and remove invisible from class list
    elementChain.previousElementSibling.classList.remove("invisible");
    //change innerhtml to content of out passed in
    elementChain.innerHTML = out;
    //add expanded and margin bottom to the class list of the element to show the section and data
    elementChain.classList.add("expanded", "margin-bottom-20");
}
function formatData(section) {
    var out = '';
    for (var i in section) {
        out += "<li class='no-list-style'> <span>" + space(i) + "</span> &nbsp; " + section[i].toLowerCase() + "</li>"
    }
    return out
}
function formatLabels(section) {
    var out = '';
    for (var i in section) {
        out += "<li>" + space(i) + "</li>"
    }
    return out
}
function formatDataOnlyAnswers(section) {
    var out = '';
    for (var i in section) {
        if (section[i].length !== 0) {
            out += "<li> <span>" + space(i) + "</span> &nbsp; " + section[i].toLowerCase() + "</li>"
        }
    }
    return out
}
//go through data1.section and data2.section and put keys in the right arrays
function analizeData(sourceOne, sourceTwo) {
    var sameData = [];
    var differentData = [];

    _.reduce(sourceOne, function (result, value, key) {
        //if the attributes are the exact same put key in same data array
        if (_.isEqual(value, sourceTwo[key]) === true) {
            sameData.push(key);

            //if the attributes are the different put key in different data array
        } else if (_.isEqual(value, sourceTwo[key]) === false) {
            differentData.push(key);

        }
    }, []);
    return [differentData, sameData]
}
//take the array differentData, sameData and object sourceOne sourceTwo to go through and show key and value to the user
function formatAllData([differentData, sameData], sourceOne, sourceTwo) {
    var out = '';
    for (var i in differentData) {

        out += "<li class='descrepancy-data red-text'> <span>" + space(differentData[i]) + "</span> &nbsp;" + "<em class='tooltip' data-tip='HouseCanary'>" + sourceOne[differentData[i]] + "</em>" + "&nbsp;&nbsp;|" + "<em class='tooltip' data-tip='LPS'>" + sourceTwo[differentData[i]] + " </em> </li>"
    }
    for (var i in sameData) {
        out += "<li class='consensus-data'> <span>" + space(sameData[i]) + "</span> &nbsp;" + sourceOne[sameData[i]] + "</li>"
    }
    return out
}

//---------------------------------------
// Showing Descrepancies to Users
//---------------------------------------
//find which sections have Descrepancies
function whichSectionsHaveDescrepancies() {
    //create empty object
    var sectionDescrepancies = {};
    //check each of the id's
    for (i in ids) {
//each id identifies a section
        var section = ids[i];
        // if the countDescrepancy is greater than zero then put as an object, if not drop it
        //put in the object the section name/id as key and the descrepancy count as value [ go count with countDescrepancy function]
        sectionDescrepancies[section] = countDescrepancy(section);
    }
    //pass the sectionDescrepancies to show desc count
    return showDescrepancyCount(sectionDescrepancies);
}
function whichCustomSectionsHaveDescrepancies() {
    //create empty object
    console.log("customdesc");
    var sectionDescrepancies = {};
    //check each of the id's
    for (i in customIds) {
//each id identifies a section
        var section = customIds[i];
        // if the countDescrepancy is greater than zero then put as an object, if not drop it
        //put in the object the section name/id as key and the descrepancy count as value [ go count with countDescrepancy function]
        sectionDescrepancies[section] = countDescrepancy(section);
    }
    //pass the sectionDescrepancies to show desc count
    return showDescrepancyCount(sectionDescrepancies);
}


//count how many descrepancies in each section
function countDescrepancy(section) {
    //get the child nodes
    var childNodes = document.getElementById(section).childNodes;
    //start count at zero
    var count = 0;
    //go through each child node, see if descrepancy-data class exists for it

    for (var i = 0; i < childNodes.length; i++) {

        if (childNodes[i].className.indexOf('descrepancy-data') == 0)
            count++;
    }
    //return how many times a child node had descrepancy-data as a class
    return count
}
// show the descrepancy count in the correct div with class of descrepancies on the page
function showDescrepancyCount(sectionDescrepancies) {
// loop through and get the key
    for (var key in sectionDescrepancies) {
// with the key select the correct div to modify
        var selector = document.getElementById(key).parentNode.parentNode.previousSibling.previousSibling;
//remove invisible class so warnings are visible
        selector.classList.remove("invisible");
        if (sectionDescrepancies[key] > 0) {

// insert the count value into the innerhtml of the correct div ^
            selector.innerHTML = '<img src=\'images/icons/warning.png\'> <em class=\'red-text\'>' + sectionDescrepancies[key] + '<em>';
        }
    }
}

//---------------------------------------
// Checkboxes
//---------------------------------------
function selectAllCheckboxes(event) {
    inputs = document.getElementsByTagName("input");
    //since inputs include the submit button at the bottom, subtracting one from length
    for (var i = 0; i < inputs.length - 1; i++) {
        inputs[i].checked = true;
    }
    //change type say deselect all
    event.target.parentElement.innerHTML = "<a onclick='deselectAllCheckboxes(event)' class='blue-text'>Unselect All</a>";
}
function deselectAllCheckboxes(event) {
    inputs = document.getElementsByTagName("input");
    //since inputs include the submit button at the bottom, subtracting one from length

    for (var i = 0; i < inputs.length - 1; i++) {
        inputs[i].checked = false;
    }
    //change type to say select all
    event.target.parentElement.innerHTML = "<a onclick='selectAllCheckboxes(event)' class='blue-text'>Select All</a>";

}

//---------------------------------------
// filter(s) descrepancies or expanding
//---------------------------------------
function descrepanciesOnly(event) {
    //shows only descrepancies to the user if it's not Asset Number or Reporting Period information
    var myElements = document.querySelectorAll(".consensus-data");

    for (var i = 0; i < myElements.length; i++) {
        if (myElements[i].parentElement.id != "assetNumbers")
            if (myElements[i].parentElement.id != "reportingPeriod")
            //for one reason or another cant get the != to be one line with OR operator
                myElements[i].style.display = "none";
    }
//    also go into the inner html of the link clicked and change it to say show all and have a function of showAll

    event.target.parentElement.innerHTML = "<a onclick='showAll(event)' class='green-text'>Show All Datapoints</a>";
}
function showAll(event) {
    var myElements = document.querySelectorAll(".consensus-data");

    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.display = "block";
    }
    event.target.parentElement.innerHTML = "<a onclick='descrepanciesOnly(event)' class='green-text'>Show Descrepancies Only</a>";
}
//expand all sections on default report
function expandAllStandard() {
    for (var i in ids) {
        document.getElementById(ids[i]).classList.add('expanded', 'margin-bottom-20');
    }
    event.target.parentElement.innerHTML = "<a onclick='contractAllStandard()' class='green-text'>Contract All Sections</a>";
}
//contract all sections on default report
function contractAllStandard() {
    event.preventDefault();
    for (var i in ids) {

        document.getElementById(ids[i]).classList.remove('expanded', 'margin-bottom-20');
        document.getElementById(ids[i]).parentNode.classList.remove('padding-bottom-30');
    }
    event.target.parentElement.innerHTML = "<a onclick='expandAllStandard()' class='green-text'>Expand All Sections</a>";
}
//expand all sections on custiomization checkboxes
function expandAllCustomize() {
    for (var i in labelIds) {
        document.getElementById(labelIds[i]).classList.add('expanded', 'margin-bottom-20');
    }
    event.target.parentElement.innerHTML = "<a onclick='contractAllCustomize()' class='green-text'>Contract All Sections</a>";
}
//contract all sections on custiomization checkboxes
function contractAllCustomize() {
    event.preventDefault();
    for (var i in labelIds) {
        document.getElementById(labelIds[i]).classList.remove('expanded', 'margin-bottom-20');
    }
    event.target.parentElement.innerHTML = "<a onclick='expandAllCustomize()' class='green-text'>Expand All Sections</a>";
}
//expand all sections on view custom report
function expandAllCustom() {
    for (var i in customIds) {
        document.getElementById(customIds[i]).classList.add('expanded', 'margin-bottom-20');
    }
    event.target.parentElement.innerHTML = "<a onclick='contractAllCustom()' class='green-text'>Contract All Sections</a>";
}
//contract all sections on view custom report
function contractAllCustom() {
    event.preventDefault();
    for (var i in labelIds) {

        document.getElementById(customIds[i]).classList.remove('expanded', 'margin-bottom-20');
        document.getElementById(customIds[i]).parentNode.classList.remove('padding-bottom-30');
    }
    event.target.parentElement.innerHTML = "<a onclick='expandAllCustom()' class='green-text'>Expand All Sections</a>";
}

//---------------------------------------
// Labels only (label) and Labels with analyzed content (all data)
//---------------------------------------
function numberInformation(keyword) {
    var sourceOne = regABform.assetNumbers;
    var sourceTwo = regABform2.assetNumbers;
    if (keyword == 'allData') {
        document.getElementById("assetNumbers").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsNumbers").innerHTML = formatLabels(sourceOne);
    }
    else {
        document.getElementById("assetNumbers").innerHTML = formatDataOnlyAnswers(sourceOne);

    }
}
function reportingInformation(keyword) {
    var sourceOne = regABform.reportingPeriod;
    var sourceTwo = regABform2.reportingPeriod;
    if (keyword == 'allData') {
        document.getElementById("reportingPeriod").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsReporting").innerHTML = formatLabels(sourceOne);
    }
    else if (keyword == 'dataOnly') {
        document.getElementById("reportingPeriod").innerHTML = formatDataOnlyAnswers(sourceOne);
    }
}
function originationInformation(keyword) {
    var sourceOne = regABform.generalInformation.origination;
    var sourceTwo = regABform2.generalInformation.origination;
    if (keyword == 'allData') {
        document.getElementById("originationInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsOrigination").innerHTML = formatLabels(sourceOne);
    }
    else if (keyword == 'dataOnly') {
        document.getElementById("originationInformation").innerHTML = formatDataOnlyAnswers(sourceOne);
    }
}
function juniorLienInformation(keyword) {
    var sourceOne = regABform.generalInformation.juniorLiens;
    var sourceTwo = regABform2.generalInformation.juniorLiens;
    if (keyword == 'allData') {
        document.getElementById("juniorLienInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsJuniorLien").innerHTML = formatLabels(sourceOne);
    }
    else if (keyword == 'dataOnly') {
        document.getElementById("juniorLienInformation").innerHTML = formatDataOnlyAnswers(sourceOne);
    }
}
function mortgageInformation(keyword) {
    var sourceOne = regABform.generalInformation.firstMortgages;
    var sourceTwo = regABform2.generalInformation.firstMortgages;
    if (keyword == 'allData') {
        document.getElementById("firstMortgageInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsfirstMortgage").innerHTML = formatLabels(sourceOne);
    }
    else if (keyword == 'dataOnly') {
        document.getElementById("firstMortgageInformation").innerHTML = formatDataOnlyAnswers(sourceOne);
    }
}
function amortizationInformation(keyword) {
    var sourceOne = regABform.negativeAmortization;
    var sourceTwo = regABform2.negativeAmortization;
    if (keyword == 'allData') {
        document.getElementById("amortizationInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsAmortization").innerHTML = formatLabels(sourceOne);
    }
    else if (keyword == 'dataOnly') {
        document.getElementById("amortizationInformation").innerHTML = formatDataOnlyAnswers(sourceOne);
    }
}
function propertyInformation(keyword) {
    var sourceOne = regABform.propertyInformation;
    var sourceTwo = regABform2.propertyInformation;
    if (keyword == 'allData') {
        document.getElementById("propertyInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsProperty").innerHTML = formatLabels(sourceOne);
    }
}
function obligorInformation(keyword) {
    var sourceOne = regABform.obligorInformation;
    var sourceTwo = regABform2.obligorInformation;
    if (keyword == 'allData') {
        document.getElementById("obligorInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsObligor").innerHTML = formatLabels(sourceOne);
    }
}
function mortgageInsuranceInformation(keyword) {
    var sourceOne = regABform.mortgageInsurance;
    var sourceTwo = regABform2.mortgageInsurance;
    if (keyword == 'allData') {
        document.getElementById("mortgageInsurance").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsMortgageInsurance").innerHTML = formatLabels(sourceOne);
    }
}
function loanActivityInformation(keyword) {
    var sourceOne = regABform.loanActivity;
    var sourceTwo = regABform2.loanActivity;
    if (keyword == 'allData') {
        document.getElementById("loanActivity").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsLoanActivity").innerHTML = formatLabels(sourceOne);
    }
}
function servicerInformation(keyword) {
    var sourceOne = regABform.servicerInformation;
    var sourceTwo = regABform2.servicerInformation;
    if (keyword == 'allData') {
        document.getElementById("servicerInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsServicer").innerHTML = formatLabels(sourceOne);
    }
}
function assetSubjectToDemandInformation(keyword) {
    var sourceOne = regABform.assetSubjectToDemand;
    var sourceTwo = regABform2.assetSubjectToDemand;
    if (keyword == 'allData') {
        document.getElementById("assetDemand").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsAsset").innerHTML = formatLabels(sourceOne);
    }
}
function chargedOffInformation(keyword) {
    var sourceOne = regABform.chargedOffInformation;
    var sourceTwo = regABform2.chargedOffInformation;
    if (keyword == 'allData') {
        document.getElementById("chargedOff").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsCharged").innerHTML = formatLabels(sourceOne);
    }
}
function lostIndicatorInformation(keyword) {
    var sourceOne = regABform.lostIndicator;
    var sourceTwo = regABform2.lostIndicator;
    if (keyword == 'allData') {
        document.getElementById("lostIndicator").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsLost").innerHTML = formatLabels(sourceOne);
    }
}
function loanModificationsInformation(keyword) {
    var sourceOne = regABform.loanModificationsInformation;
    var sourceTwo = regABform2.loanModificationsInformation;
    if (keyword == 'allData') {
        document.getElementById("loanModificationsInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsLoanModifications").innerHTML = formatLabels(sourceOne);
    }
}
function periodInformation(keyword) {
    var sourceOne = regABform.periodInformation;
    var sourceTwo = regABform2.periodInformation;
    if (keyword == 'allData') {
        document.getElementById("periodInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsPeriod").innerHTML = formatLabels(sourceOne);
    }
}
function stepLoansInformation(keyword) {
    var sourceOne = regABform.stepLoansInformation;
    var sourceTwo = regABform2.stepLoansInformation;
    if (keyword == 'allData') {
        document.getElementById("stepLoans").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsStepLoans").innerHTML = formatLabels(sourceOne);
    }
}
function trialModificationInformation(keyword) {
    var sourceOne = regABform.modificationInformation;
    var sourceTwo = regABform2.modificationInformation;
    if (keyword == 'allData') {
        document.getElementById("trialModificationInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsTrial").innerHTML = formatLabels(sourceOne);
    }
}
function repaymentPlanInformation(keyword) {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("repaymentPlanInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsRepayment").innerHTML = formatLabels(sourceOne);
    }
}
function shortSalesInformation(keyword) {
    var sourceOne = regABform.shortSalesInformation;
    var sourceTwo = regABform2.shortSalesInformation;
    if (keyword == 'allData') {
        document.getElementById("shortSalesInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsShort").innerHTML = formatLabels(sourceOne);
    }
}
function mitigationExitInformation(keyword) {
    var sourceOne = regABform.mitigationExitInformation;
    var sourceTwo = regABform2.mitigationExitInformation;
    if (keyword == 'allData') {
        document.getElementById("mitigationExitInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsMitigation").innerHTML = formatLabels(sourceOne);
    }
}
function foreclosureInformation(keyword) {
    var sourceOne = regABform.foreclosureInformation;
    var sourceTwo = regABform2.foreclosureInformation;
    if (keyword == 'allData') {
        document.getElementById("foreclosureInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsForeclosure").innerHTML = formatLabels(sourceOne);
    }
}
function relatedToREOInformation(keyword) {
    var sourceOne = regABform.relatedToREOInformation;
    var sourceTwo = regABform2.relatedToREOInformation;
    if (keyword == 'allData') {
        document.getElementById("relatedREOInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsRelated").innerHTML = formatLabels(sourceOne);
    }
}
function lossesInformation(keyword) {
    var sourceOne = regABform.lossesInformation;
    var sourceTwo = regABform2.lossesInformation;
    if (keyword == 'allData') {
        document.getElementById("lossesInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsLosses").innerHTML = formatLabels(sourceOne);
    }
}
function insuranceClaimsInformation(keyword) {
    var sourceOne = regABform.insuranceClaimsInformation;
    var sourceTwo = regABform2.insuranceClaimsInformation;
    if (keyword == 'allData') {
        document.getElementById("insuranceClaimsInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsInsuranceClaims").innerHTML = formatLabels(sourceOne);
    }
}
function delinquentLoansInformation(keyword) {
    var sourceOne = regABform.delinquentLoansInformation;
    var sourceTwo = regABform2.delinquentLoansInformation;
    if (keyword == 'allData') {
        document.getElementById("delinquentLoansInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsDelinquent").innerHTML = formatLabels(sourceOne);
    }
}

//---------------------------------------
// Custom generated Report Functions Custom Checkbox name functions
//---------------------------------------
function numberInformationS() {
    var sourceOne = regABform.assetNumbers;
    var sourceTwo = regABform2.assetNumbers;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "assetNumbersS";
    return hideAndSeek(element, out);
}
function reportingInformationS() {
    var sourceOne = regABform.reportingPeriod;
    var sourceTwo = regABform2.reportingPeriod;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "reportingPeriodS";
    return hideAndSeek(element, out);
}
function originationInformationS() {
    var sourceOne = regABform.generalInformation.origination;
    var sourceTwo = regABform2.generalInformation.origination;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "originationInformationS";
    return hideAndSeek(element, out);
}
function juniorLeinInformationS() {
    var sourceOne = regABform.generalInformation.juniorLiens;
    var sourceTwo = regABform2.generalInformation.juniorLiens;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "juniorLeinInformationS";
    return hideAndSeek(element, out);
}
function firstMortgagesInformationS() {
    var sourceOne = regABform.generalInformation.firstMortgages;
    var sourceTwo = regABform2.generalInformation.firstMortgages;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "firstMortgagesInformationS";
    return hideAndSeek(element, out);
}
function amortizationInformationS() {
    var sourceOne = regABform.negativeAmortization;
    var sourceTwo = regABform2.negativeAmortization;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "amortizationInformationS";
    return hideAndSeek(element, out);
}
function propertyInformationS() {
    var sourceOne = regABform.propertyInformation;
    var sourceTwo = regABform2.propertyInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "propertyInformationS";
    return hideAndSeek(element, out);
}
function obligorInformationS() {
    var sourceOne = regABform.obligorInformation;
    var sourceTwo = regABform2.obligorInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "obligorInformationS";
    return hideAndSeek(element, out);
}
function mortgageInsuranceS() {
    var sourceOne = regABform.mortgageInsurance;
    var sourceTwo = regABform2.mortgageInsurance;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "mortgageInsuranceS";
    return hideAndSeek(element, out);
}
function loanActivityS() {
    var sourceOne = regABform.loanActivity;
    var sourceTwo = regABform2.loanActivity;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "loanActivityS";
    return hideAndSeek(element, out);
}
function servicerInformationS() {
    var sourceOne = regABform.servicerInformation;
    var sourceTwo = regABform2.servicerInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "servicerInformationS";
    return hideAndSeek(element, out);
}
function assetSubjectToDemandS() {
    var sourceOne = regABform.assetSubjectToDemand;
    var sourceTwo = regABform2.assetSubjectToDemand;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "assetSubjectToDemandS";
    return hideAndSeek(element, out);
}
function chargedOffInformationS() {
    var sourceOne = regABform.chargedOffInformation;
    var sourceTwo = regABform2.chargedOffInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "chargedOffInformationS";
    return hideAndSeek(element, out);
}
function lostIndicatorS() {
    var sourceOne = regABform.lostIndicator;
    var sourceTwo = regABform2.lostIndicator;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "lostIndicatorS";
    return hideAndSeek(element, out);
}
function loanModificationsInformationS() {
    var sourceOne = regABform.loanModificationsInformation;
    var sourceTwo = regABform2.loanModificationsInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "loanModificationsInformationS";
    return hideAndSeek(element, out);
}
function periodInformationS() {
    var sourceOne = regABform.periodInformation;
    var sourceTwo = regABform2.periodInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "periodInformationS";
    return hideAndSeek(element, out);
}
function stepLoansInformationS() {
    var sourceOne = regABform.stepLoansInformation;
    var sourceTwo = regABform2.stepLoansInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "stepLoansInformationS";
    return hideAndSeek(element, out);
}
function trialModificationInformationS() {
    var sourceOne = regABform.modificationInformation;
    var sourceTwo = regABform2.modificationInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "trialModificationInformationS";
    return hideAndSeek(element, out);
}
function repaymentPlanInformationS() {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "repaymentPlanInformationS";
    return hideAndSeek(element, out);
}
function shortSalesInformationS() {
    var sourceOne = regABform.shortSalesInformation;
    var sourceTwo = regABform2.shortSalesInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "shortSalesInformationS";
    return hideAndSeek(element, out);
}
function mitigationExitInformationS() {
    var sourceOne = regABform.mitigationExitInformation;
    var sourceTwo = regABform2.mitigationExitInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "mitigationExitInformationS";
    return hideAndSeek(element, out);
}
function foreclosureInformationS() {
    var sourceOne = regABform.foreclosureInformation;
    var sourceTwo = regABform2.foreclosureInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "foreclosureInformationS";
    return hideAndSeek(element, out);
}
function relatedToREOInformationS() {
    var sourceOne = regABform.relatedToREOInformation;
    var sourceTwo = regABform2.relatedToREOInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "relatedToREOInformationS";
    return hideAndSeek(element, out);
}
function lossesInformationS() {
    var sourceOne = regABform.lossesInformation;
    var sourceTwo = regABform2.lossesInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);

    var element = "lossesInformationS";
    return hideAndSeek(element, out);
}
function insuranceClaimsInformationS() {
    var sourceOne = regABform.insuranceClaimsInformation;
    var sourceTwo = regABform2.insuranceClaimsInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "insuranceClaimsInformationS";
    return hideAndSeek(element, out);
}
function delinquentLoansInformationS() {
    var sourceOne = regABform.delinquentLoansInformation;
    var sourceTwo = regABform2.delinquentLoansInformation;
    var out = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    var element = "delinquentLoansInformationS";
    return hideAndSeek(element, out);
}
