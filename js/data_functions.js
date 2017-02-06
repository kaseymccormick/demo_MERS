//---------------------------------------
// Utility Functions
//---------------------------------------
//adds a space between words
function space(i){
   return i.replace(/([a-z])([A-Z])/g, "$1 $2")
}
//---------------------------------------
// Default Report Functions
//---------------------------------------

function numberInformation() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " +regABform.assetNumbers[i] + "</li>"
    }
    document.getElementById("assetNumbers").innerHTML = out;
}
function reportingInformation() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.reportingPeriod[i] + "</li>"
    }
    document.getElementById("reportingPeriod").innerHTML = out;
}
function originationInformation() {
    var out = '';
    for (var i in regABform.generalInformation.origination) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.generalInformation.origination[i].toLowerCase() + "</li>"
    }
    document.getElementById("origination").innerHTML = out;
}
function juniorLienInformation() {
    var out = '';
    for (var i in regABform.generalInformation.juniorLiens) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.generalInformation.juniorLiens[i].toLowerCase() + "</li>"
    }
    document.getElementById("juniorLiens").innerHTML = out;
}

function mortgageInformation() {
    var out = '';
    for (var i in regABform.generalInformation.firstMortgages) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.generalInformation.firstMortgages[i].toLowerCase() + "</li>"
    }
    document.getElementById("mortgageInformation").innerHTML = out;
}
function amortizationInformation() {
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.negativeAmortization[i].toLowerCase() + "</li>"
    }
    document.getElementById("amortizationInformation").innerHTML = out;
}
function propertyInformation() {
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.propertyInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("propertyInformation").innerHTML = out;

}
function obligorInformation() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.obligorInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("obligorInformation").innerHTML = out;
}

function mortgageInsurance() {
    var out = '';
    for (var i in regABform.mortgageInsurance) {
        out += "<li> <span>" + space(i) + "</span> &nbsp; " + regABform.mortgageInsurance[i].toLowerCase() + "</li>"
    }
    document.getElementById("mortgageInsurance").innerHTML = out;
}
function loanActivity() {
    var out = '';
    for (var i in regABform.loanActivity) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.loanActivity[i].toLowerCase() + "</li>"
    }
    document.getElementById("loanActivity").innerHTML = out;
}
function servicerInformation() {
    var out = '';
    for (var i in regABform.servicerInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.servicerInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("servicerInformation").innerHTML = out;
}
function assetSubjectToDemand() {
    var out = '';
    for (var i in regABform.assetSubjectToDemand) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.assetSubjectToDemand[i].toLowerCase() + "</li>"
    }
    document.getElementById("assetDemand").innerHTML = out;
}
function chargedOffInformation() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.chargedOffInformaiton[i].toLowerCase() + "</li>"
    }
    document.getElementById("chargedOff").innerHTML = out;
}
function lostIndicator() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.lostIndicator[i].toLowerCase() + "</li>"
    }
    document.getElementById("lostIndicator").innerHTML = out;
}
function periodInformation() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.periodInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("periodInformation").innerHTML = out;
}
function stepLoansInformation() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.stepLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("stepLoans").innerHTML = out;
}
function trialModificationInformation() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.modificationInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("trialModificationInformation").innerHTML = out;
}
function repaymentPlanInformation() {
    var out = '';
    for (var i in regABform.repaymentPlanInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.repaymentPlanInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("repaymentPlanInformation").innerHTML = out;
}
function shortSalesInformation() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.shortSalesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("shortSalesInformation").innerHTML = out;
}
function mitigationExitInformation() {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.mitigationExitInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("mitigationExitInformation").innerHTML = out;
}
function foreclosureInformation() {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.foreclosureInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("foreclosureInformation").innerHTML = out;
}
function relatedToREOInformation() {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.relatedToREOInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("relatedREOInformation").innerHTML = out;
}
function lossesInformation() {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.lossesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("lossesInformation").innerHTML = out;
}
function insuranceClaimsInformation() {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.insuranceClaimsInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("insuranceClaimsInformation").innerHTML = out;
}
function delinquentLoansInformation() {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.delinquentLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("delinquentLoansInformation").innerHTML = out;
}



//---------------------------------------
// Label Functions
//---------------------------------------
function labelsNumbers() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsNumbers").innerHTML = out;
}
function labelsReporting() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsReporting").innerHTML = out;
}
function labelsOrigination() {
    var out = '';
    for (var i in regABform.generalInformation.origination) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsOrigination").innerHTML = out;
}
function labelsJuniorLien() {
    var out = '';
    for (var i in regABform.generalInformation.juniorLiens) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsJuniorLien").innerHTML = out;
}
function labelsMortgage() {
    var out = '';
    for (var i in regABform.generalInformation.firstMortgages) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsMortgage").innerHTML = out;
}
function labelsAmortization() {
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsAmortization").innerHTML = out;
}
function labelsProperty() {
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsProperty").innerHTML = out;

}
function labelsObligor() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsObligor").innerHTML = out;
}
function labelsMortgageInsurance() {
    var out = '';
    for (var i in regABform.mortgageInsurance) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsMortgageInsurance").innerHTML = out;
}
function labelsLoanActivity() {
    var out = '';
    for (var i in regABform.loanActivity) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLoanActivity").innerHTML = out;
}
function labelsServicer() {
    var out = '';
    for (var i in regABform.servicerInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsServicer").innerHTML = out;
}
function labelsAsset() {
    var out = '';
    for (var i in regABform.assetSubjectToDemand) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsAsset").innerHTML = out;
}
function labelsCharged() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsCharged").innerHTML = out;
}
function labelsLost() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLost").innerHTML = out;
}
function labelsLoanModifications() {
    var out = '';
    for (var i in regABform.loanModificationsInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLoanModifications").innerHTML = out;

}
function labelsPeriod() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsPeriod").innerHTML = out;
}
function labelsStepLoans() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsStepLoans").innerHTML = out;
}
function labelsTrial() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsTrial").innerHTML = out;
}
function labelsRepayment() {
    var out = '';
    for (var i in regABform.repaymentPlanInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsRepayment").innerHTML = out;
}
function labelsShort() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsShort").innerHTML = out;
}
function labelsMitigation() {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsMitigation").innerHTML = out;
}
function labelsForeclosure() {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsForeclosure").innerHTML = out;
}
function labelsRelated() {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsRelated").innerHTML = out;
}
function labelsLosses() {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLosses").innerHTML = out;
}
function labelInsuranceClaims() {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsInsuranceClaims").innerHTML = out;
}
function labelsDelinquent() {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsDelinquent").innerHTML = out;
}




//---------------------------------------
// Custom Report Functions
//---------------------------------------
function amortizationInformationS() {
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.negativeAmortization[i].toLowerCase() + "</li>"
    }
    document.getElementById("amortizationInformationS").innerHTML = out;
}
function propertyInformationS() {
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.propertyInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("propertyInformationS").innerHTML = out;
}
function obligorInformationS() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span> &nbsp; " + regABform.obligorInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("obligorInformationS").innerHTML = out;
}