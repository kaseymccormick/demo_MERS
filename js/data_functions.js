
// /---------------------------------------
// Utility Functions
//---------------------------------------
//adds a space between words
function space(x) {
    return x.replace(/([a-z])([A-Z])/g, "$1 $2");
}
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
            out += "<li> <span>" + i.space + "</span> &nbsp; " + section[i].toLowerCase() + "</li>"
        }
    }
    return out
}

function analizeData(sourceOne, sourceTwo) {
    var sameData = [];
    var differentData = [];
    _.reduce(sourceOne, function (result, value, key) {
        if (_.isEqual(value, sourceTwo[key]) === true) {
            //put the key in an an array
                sameData.push(key)
        } else if(_.isEqual(value, sourceTwo[key]) === false) {
            differentData.push(key);
        }
    }, []);
    return [differentData, sameData]
}

function formatAllData([differentData, sameData],sourceOne, sourceTwo){
    var out ='';
    for (var i in differentData){

        out += "<li class='descrepancy red-text'> <span>" + differentData[i] + "</span> &nbsp;" + "<em class='tooltip' data-tip='HouseCanary'>" +  sourceOne[differentData[i]] +"</em>" + "&nbsp;&nbsp;|" + "<em class='tooltip' data-tip='LPS'>" + sourceTwo[differentData[i]] + " </em> </li>"
    }
    for (var i in sameData){
        out += "<li> <span>" + space(sameData[i]) + "</span> &nbsp;" + sourceOne[sameData[i]] + "</li>"
    }
    return out
}

function expandAllStandard() {
    var ids = ["generalInformation", "amortizationInformation", "mortgageInformation", "propertyInformation", "obligorInformation", "mortgageInsurance", "loanActivity", "servicerInformation", "assetDemand", "chargedOff", "loanModifications", "lostIndicator", "periodInformation", "stepLoans", "trialModificationInformation", "repaymentPlanInformation", "shortSalesInformation", "mitigationExitInformation", "foreclosureInformation", "relatedREOInformation", "lossesInformation", "insuranceClaimsInformation", "delinquentLoansInformation"];
    for (var i in ids) {
        document.getElementById(ids[i]).classList.add('expanded', 'margin-bottom-20');
    }
}
function contractAllStandard() {
    event.preventDefault();
    var ids = ["generalInformation", "amortizationInformation", "mortgageInformation", "propertyInformation", "obligorInformation", "mortgageInsurance", "loanActivity", "servicerInformation", "assetDemand", "chargedOff", "loanModifications", "lostIndicator", "periodInformation", "stepLoans", "trialModificationInformation", "repaymentPlanInformation", "shortSalesInformation", "mitigationExitInformation", "foreclosureInformation", "relatedREOInformation", "lossesInformation", "insuranceClaimsInformation", "delinquentLoansInformation"];
    for (var i in ids) {
        document.getElementById(ids[i]).classList.remove('expanded', 'margin-bottom-20');
    }
}

//---------------------------------------
// Trying to consolidate
//---------------------------------------
function numberInformation(keyword) {
    var section = regABform.assetNumbers;
    if (keyword == 'allData') {
        document.getElementById("assetNumbers").innerHTML = formatDataOnlyAnswers(section);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsNumbers").innerHTML = formatLabels(section);
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
    var sourceOne = regABform.chargedOffInformaiton;
    var sourceTwo = regABform2.chargedOffInformaiton;
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
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("shortSalesInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsShort").innerHTML = formatLabels(sourceOne);
    }
}
function mitigationExitInformation(keyword) {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("mitigationExitInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsMitigation").innerHTML = formatLabels(sourceOne);
    }
}
function foreclosureInformation(keyword) {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("foreclosureInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsForeclosure").innerHTML = formatLabels(sourceOne);
    }
}
function relatedToREOInformation(keyword) {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("relatedREOInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsRelated").innerHTML = formatLabels(sourceOne);
    }
}
function lossesInformation(keyword) {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("lossesInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsLosses").innerHTML = formatLabels(sourceOne);
    }
}
function insuranceClaimsInformation(keyword) {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("insuranceClaimsInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsInsuranceClaims").innerHTML = formatLabels(sourceOne);
    }
}
function delinquentLoansInformation(keyword) {
    var sourceOne = regABform.repaymentPlanInformation;
    var sourceTwo = regABform2.repaymentPlanInformation;
    if (keyword == 'allData') {
        document.getElementById("delinquentLoansInformation").innerHTML = formatAllData(analizeData(sourceOne, sourceTwo), sourceOne, sourceTwo);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsDelinquent").innerHTML = formatLabels(sourceOne);
    }
}



//TODO consolidate the rest of the default + labels

//---------------------------------------
// Default Report Functions
//---------------------------------------
function reportingInformation() {
    document.getElementById("reportingPeriod").innerHTML = formatData(regABform.reportingPeriod);
}
function originationInformation() {
    document.getElementById("origination").innerHTML = formatData(regABform.generalInformation.origination);
}
function juniorLienInformation() {
    document.getElementById("juniorLiens").innerHTML = formatData(regABform.generalInformation.juniorLiens);
}
function mortgageInformation() {
    document.getElementById("mortgageInformation").innerHTML = formatData(regABform.generalInformation.firstMortgages);
}
//---------------------------------------
// Label Functions
//---------------------------------------
function labelsOrigination() {
    var out = '';
    for (var i in regABform.generalInformation.origination) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsOrigination").innerHTML = out;
}
function labelsJuniorLien() {
    var out = '';
    for (var i in regABform.generalInformation.juniorLiens) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsJuniorLien").innerHTML = out;
}
function labelsMortgage() {
    var out = '';
    for (var i in regABform.generalInformation.firstMortgages) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsMortgage").innerHTML = out;
}

//---------------------------------------
// Custom generated Report Functions Custom Checkbox name functions
//---------------------------------------
function numberInformationS() {
    document.getElementById("assetNumbersS").innerHTML = formatData(regABform.assetNumbers);
}
function reportingInformationS() {
    document.getElementById("reportingPeriodS").innerHTML = formatData(regABform.reportingPeriod);
}
function generalInformationS() {
    var out = formatData(regABform.generalInformation.origination);
    var element = "originationS";
    document.getElementById("generalHeader").classList.remove("invisible");
    document.getElementById(element).parentNode.classList.add("expanded");
    thisIsaHack();
    thisIsAnotherHack();
    return hideAndSeek(element, out);
}
function thisIsaHack() {
    var out = formatData(regABform.generalInformation.juniorLiens);
    var element = "juniorLiensS";
    return hideAndSeek(element, out);
}
function thisIsAnotherHack() {
    var out = formatData(regABform.generalInformation.firstMortgages);
    var element = "mortgageInformationS";
    return hideAndSeek(element, out);
}
function amortizationInformationS() {
    var out = formatData(regABform.negativeAmortization);
    var element = "amortizationInformationS";
    return hideAndSeek(element, out);
}
function propertyInformationS() {
    var out = formatData(regABform.propertyInformation);
    var element = "propertyInformationS";
    return hideAndSeek(element, out);
}
function obligorInformationS() {
    var out = formatData(regABform.obligorInformation);
    var element = "obligorInformationS";
    return hideAndSeek(element, out);
}
function mortgageInsuranceS() {
    var out = formatData(regABform.mortgageInsurance);
    var element = "mortgageInsuranceS";
    return hideAndSeek(element, out);
}
function loanActivityS() {
    var out = formatData(regABform.loanActivity);
    var element = "loanActivitiyS";
    return hideAndSeek(element, out);
}
function servicerInformationS() {
    var out = formatData(regABform.servicerInformation);
    var element = "servicerInformationSS";
    return hideAndSeek(element, out);
}
function assetSubjectToDemandS() {
    var out = formatData(regABform.assetSubjectToDemand);
    var element = "assetDemandS";
    return hideAndSeek(element, out);
}
function chargedOffInformationS() {
    var out = formatData(regABform.chargedOffInformaiton);
    var element = "chargedOffS";
    return hideAndSeek(element, out);
}
function lostIndicatorS() {
    var out = formatData(regABform.lostIndicator);
    var element = "lostIndicatorS";
    return hideAndSeek(element, out);
}
function loanModificationsInformationS() {
    var out = formatData(regABform.loanModificationsInformation);
    var element = "loanModificationS";
    return hideAndSeek(element, out);
}
function periodInformationS() {
    var out = formatData(regABform.periodInformation);
    var element = "periodInformationS";
    return hideAndSeek(element, out);
}
function stepLoansInformationS() {
    var out = formatData(regABform.stepLoansInformation);
    var element = "stepLoanS";
    return hideAndSeek(element, out);
}
function trialModificationInformationS() {
    var out = formatData(regABform.modificationInformation);
    var element = "trialModifcationInformationS";
    return hideAndSeek(element, out);
}
function repaymentPlanInformationS() {
    var out = formatData(regABform.repaymentPlanInformation);
    var element = "repaymentPlanInformationS";
    return hideAndSeek(element, out);
}
function shortSalesInformationS() {
    var out = formatData(regABform.shortSalesInformation);
    var element = "shortSalesInformationS";
    return hideAndSeek(element, out);
}
function mitigationExitInformationS() {
    var out = formatData(regABform.mitigationExitInformation);
    var element = "mitigationExitInformationS";
    return hideAndSeek(element, out);
}
function foreclosureInformationS() {
    var out = formatData(regABform.foreclosureInformation);
    var element = "foreclosureInformationS";
    return hideAndSeek(element, out);
}
function relatedToREOInformationS() {
    var out = formatData(regABform.relatedToREOInformation);
    var element = "relatedREOInformationS";
    return hideAndSeek(element, out);
}
function lossesInformationS() {
    var out = formatData(regABform.lossesInformation);
    var element = "lossesInfroamtionS";
    return hideAndSeek(element, out);
}
function insuranceClaimsInformationS() {
    var out = formatData(regABform.insuranceClaimsInformation);
    var element = "insuranceClaimsInformationS";
    return hideAndSeek(element, out);
}
function delinquentLoansInformationS() {
    var out = formatData(regABform.delinquentLoansInformation);
    var element = "delinquentLoansInformationS";
    return hideAndSeek(element, out);
}
