//---------------------------------------
// Utility Functions
//---------------------------------------
//adds a space between words
function format(i){
    return "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; "
}
function space(i){
    return i.replace(/([a-z])([A-Z])/g, "$1 $2");
}
function hideAndSeek(element, out) {
    var elementChain = document.getElementById(element);
    elementChain.previousElementSibling.classList.remove("invisible");
    elementChain.innerHTML = out;
    elementChain.classList.add("expanded");
    elementChain.classList.add("margin-bottom-20");
}
function formatData(section){
    var out = '';
    for (var i in section) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + section[i].toLowerCase() + "</li>"
    }
    return out
}
// function lostIndicator() {
//     var out = '';
//     for (var i in regABform.lostIndicator) {
//         out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.lostIndicator[i].toLowerCase() + "</li>"
//     }
//     document.getElementById("lostIndicator").innerHTML = out;
// }
function openAllSections(){

//        get the right element
//        remove invisble
//     console.log(document.getElementsByClassName("section"));
    console.log("here");
}
//this checks if line item has no answer, if it doesn't don't show it
// function amortizationInformation() {
//     var out = '';
//     for (var i in regABform.negativeAmortization) {
//         //if line item has no answer, don't show the line item
//         if (regABform.negativeAmortization[i] != ' '){
//             out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.negativeAmortization[i].toLowerCase() + "</li>"
//         }
//     }
// }
//---------------------------------------
// Default Report Functions
//---------------------------------------
function numberInformation() {
    var out = formatData(regABform.assetNumbers);
    document.getElementById("assetNumbers").innerHTML = out;
}
function reportingInformation() {
    var out = formatData(regABform.reportingPeriod);
    document.getElementById("reportingPeriod").innerHTML = out;
}
function originationInformation() {
    var out = formatData(regABform.generalInformation.origination);
    document.getElementById("origination").innerHTML = out;
}
function juniorLienInformation() {
    var out = formatData(regABform.generalInformation.juniorLiens);
    document.getElementById("juniorLiens").innerHTML = out;
}

function mortgageInformation() {
    var out = formatData(regABform.generalInformation.firstMortgages);
    document.getElementById("mortgageInformation").innerHTML = out;
}

function amortizationInformation() {
    var out = formatData(regABform.negativeAmortization);
    document.getElementById("amortizationInformation").innerHTML = out;
}
function propertyInformation() {
    var out = formatData(regABform.propertyInformation);
    document.getElementById("propertyInformation").innerHTML = out;
}
function obligorInformation() {
    var out = formatData(regABform.obligorInformation);
    document.getElementById("obligorInformation").innerHTML = out;
}
function mortgageInsurance() {
    var out = formatData(regABform.mortgageInsurance);
    document.getElementById("mortgageInsurance").innerHTML = out;
}
function loanActivity() {
    var out = formatData(regABform.loanActivity);
    document.getElementById("loanActivity").innerHTML = out;
}
function servicerInformation() {
    var out = formatData(regABform.servicerInformation);
    document.getElementById("servicerInformation").innerHTML = out;
}
function assetSubjectToDemand() {
    var out = formatData(regABform.assetSubjectToDemand);
    document.getElementById("assetDemand").innerHTML = out;
}
function chargedOffInformation() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += format(i) + regABform.chargedOffInformaiton[i].toLowerCase() + "</li>"
    }
    document.getElementById("chargedOff").innerHTML = out;
}
function loanModificationsInformation(){
        var out = '';
        for (var i in regABform.loanModificationsInformation) {
            out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.loanModificationsInformation[i].toLowerCase() + "</li>"
        }
        document.getElementById("loanModifications").innerHTML = out;
    }
function lostIndicator() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.lostIndicator[i].toLowerCase() + "</li>"
    }
    document.getElementById("lostIndicator").innerHTML = out;
}
function periodInformation() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.periodInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("periodInformation").innerHTML = out;
}
function stepLoansInformation() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.stepLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("stepLoans").innerHTML = out;
}
function trialModificationInformation() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.modificationInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("trialModificationInformation").innerHTML = out;
}
function repaymentPlanInformation() {
    var out = '';
    for (var i in regABform.repaymentPlanInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.repaymentPlanInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("repaymentPlanInformation").innerHTML = out;
}
function shortSalesInformation() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.shortSalesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("shortSalesInformation").innerHTML = out;
}
function mitigationExitInformation() {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.mitigationExitInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("mitigationExitInformation").innerHTML = out;
}
function foreclosureInformation() {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.foreclosureInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("foreclosureInformation").innerHTML = out;
}
function relatedToREOInformation() {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.relatedToREOInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("relatedREOInformation").innerHTML = out;
}
function lossesInformation() {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.lossesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("lossesInformation").innerHTML = out;
}
function insuranceClaimsInformation() {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.insuranceClaimsInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("insuranceClaimsInformation").innerHTML = out;
}
function delinquentLoansInformation() {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.delinquentLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("delinquentLoansInformation").innerHTML = out;
}



//---------------------------------------
// Label Functions
//---------------------------------------
function labelsNumbers() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsNumbers").innerHTML = out;
}
function labelsReporting() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsReporting").innerHTML = out;
}
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
function labelsAmortization() {
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsAmortization").innerHTML = out;
}
function labelsProperty() {
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsProperty").innerHTML = out;

}
function labelsObligor() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsObligor").innerHTML = out;
}
function labelsMortgageInsurance() {
    var out = '';
    for (var i in regABform.mortgageInsurance) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsMortgageInsurance").innerHTML = out;
}
function labelsLoanActivity() {
    var out = '';
    for (var i in regABform.loanActivity) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsLoanActivity").innerHTML = out;
}
function labelsServicer() {
    var out = '';
    for (var i in regABform.servicerInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsServicer").innerHTML = out;
}
function labelsAsset() {
    var out = '';
    for (var i in regABform.assetSubjectToDemand) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsAsset").innerHTML = out;
}
function labelsCharged() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsCharged").innerHTML = out;
}
function labelsLost() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsLost").innerHTML = out;
}
function labelsLoanModifications() {
    var out = '';
    for (var i in regABform.loanModificationsInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsLoanModifications").innerHTML = out;

}
function labelsPeriod() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsPeriod").innerHTML = out;
}
function labelsStepLoans() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsStepLoans").innerHTML = out;
}
function labelsTrial() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsTrial").innerHTML = out;
}
function labelsRepayment() {
    var out = '';
    for (var i in regABform.repaymentPlanInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsRepayment").innerHTML = out;
}
function labelsShort() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsShort").innerHTML = out;
}
function labelsMitigation() {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsMitigation").innerHTML = out;
}
function labelsForeclosure() {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsForeclosure").innerHTML = out;
}
function labelsRelated() {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsRelated").innerHTML = out;
}
function labelsLosses() {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsLosses").innerHTML = out;
}
function labelsInsuranceClaims() {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsInsuranceClaims").innerHTML = out;
}
function labelsDelinquent() {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li>" + space(i) + "</li>"
    }
    document.getElementById("labelsDelinquent").innerHTML = out;
}




//---------------------------------------
// Custom Report Functions
//---------------------------------------

function numberInformationS() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " +regABform.assetNumbers[i] + "</li>"
    }
    document.getElementById("assetNumbersS").innerHTML = out;
}
function reportingInformationS() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.reportingPeriod[i] + "</li>"
    }
    document.getElementById("reportingPeriodS").innerHTML = out;
}

function generalInformationS() {
    var out = '';
    for (var i in regABform.generalInformation.origination) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.generalInformation.origination[i].toLowerCase() + "</li>"
    }
    var element = "originationS";
    document.getElementById("generalHeader").classList.remove("invisible");
    document.getElementById(element).parentNode.classList.add("expanded");
    thisIsaHack();
    thisIsAnotherHack();
    return hideAndSeek(element, out);
}
function thisIsaHack() {
    var out = '';
    for (var i in regABform.generalInformation.juniorLiens) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.generalInformation.juniorLiens[i].toLowerCase() + "</li>"
    }
    var element = "juniorLiensS";
    return hideAndSeek(element, out);
}
    function thisIsAnotherHack(){
    var out = '';
    for (var i in regABform.generalInformation.firstMortgages) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.generalInformation.firstMortgages[i].toLowerCase() + "</li>"
    }
    var element = "mortgageInformationS";
    return hideAndSeek(element, out);
}
function amortizationInformationS() {
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.negativeAmortization[i].toLowerCase() + "</li>"
    }
    var element = "amortizationInformationS";
    return hideAndSeek(element, out);
}
function propertyInformationS() {
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.propertyInformation[i].toLowerCase() + "</li>"
    }
    var element = "propertyInformationS";
    return hideAndSeek(element, out);
}
function obligorInformationS() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.obligorInformation[i].toLowerCase() + "</li>"
    }
    var element = "obligorInformationS";
    return hideAndSeek(element, out);

}
function mortgageInsuranceS() {
    var out = '';
    for (var i in regABform.mortgageInsurance) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.mortgageInsurance[i].toLowerCase() + "</li>"
    }
    var element = "mortgageInsuranceS";
    return hideAndSeek(element, out);
}
function loanActivityS() {
    var out = '';
    for (var i in regABform.loanActivity) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.loanActivity[i].toLowerCase() + "</li>"
    }
    var element = "loanActivitiyS";
    return hideAndSeek(element, out);
}
function servicerInformationS() {
    var out = '';
    for (var i in regABform.servicerInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.servicerInformation[i].toLowerCase() + "</li>"
    }
    var element = "servicerInformationSS";
    return hideAndSeek(element, out);

}
function assetSubjectToDemandS() {
    var out = '';
    for (var i in regABform.assetSubjectToDemand) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.assetSubjectToDemand[i].toLowerCase() + "</li>"
    }
    var element = "assetDemandS";
    return hideAndSeek(element, out);

}
function chargedOffInformationS() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.chargedOffInformaiton[i].toLowerCase() + "</li>"
    }
    var element = "chargedOffS";
    return hideAndSeek(element, out);

}
function lostIndicatorS() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.lostIndicator[i].toLowerCase() + "</li>"
    }
    var element = "lostIndicatorS";
    return hideAndSeek(element, out);

}
function loanModificationsInformationS(){
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.loanModificationsInformation[i].toLowerCase() + "</li>"
    }
    var element = "loanModificationS";
    return hideAndSeek(element, out);

}
function periodInformationS() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.periodInformation[i].toLowerCase() + "</li>"
    }
    var element = "periodInformationS";
    return hideAndSeek(element, out);

}
function stepLoansInformationS() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.stepLoansInformation[i].toLowerCase() + "</li>"
    }
    var element = "stepLoanS";
    return hideAndSeek(element, out);

}
function trialModificationInformationS() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.modificationInformation[i].toLowerCase() + "</li>"
    }
    var element = "trialModifcationInformationS";
    return hideAndSeek(element, out);
}
function repaymentPlanInformationS() {
    var out = '';
    for (var i in regABform.repaymentPlanInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.repaymentPlanInformation[i].toLowerCase() + "</li>"
    }
    var element = "repaymentPlanInformationS";
    return hideAndSeek(element, out);

}
function shortSalesInformationS() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.shortSalesInformation[i].toLowerCase() + "</li>"
    }
    var element = "shortSalesInformationS";
    return hideAndSeek(element, out);
}
function mitigationExitInformationS() {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.mitigationExitInformation[i].toLowerCase() + "</li>"
    }
    var element = "mitigationExitInformationS";
    return hideAndSeek(element, out);
}
function foreclosureInformationS() {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.foreclosureInformation[i].toLowerCase() + "</li>"
    }
    var element = "foreclosureInformationS";
    return hideAndSeek(element, out);
}
function relatedToREOInformationS() {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.relatedToREOInformation[i].toLowerCase() + "</li>"
    }
    var element = "relatedREOInformationS";
    return hideAndSeek(element, out);
}
function lossesInformationS() {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.lossesInformation[i].toLowerCase() + "</li>"
    }
    var element = "lossesInfroamtionS";
    return hideAndSeek(element, out);
}
function insuranceClaimsInformationS() {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.insuranceClaimsInformation[i].toLowerCase() + "</li>"
    }
    var element = "insuranceClaimsInformationS";
    return hideAndSeek(element, out);
}
function delinquentLoansInformationS() {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.delinquentLoansInformation[i].toLowerCase() + "</li>"
    }
    var element = "delinquentLoansInformationS";
    return hideAndSeek(element, out);
}