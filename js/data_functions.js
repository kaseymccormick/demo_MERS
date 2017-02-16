
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
}var sourceOne = regABform.negativeAmortization;
var sourceTwo = regABform2.negativeAmortization;

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

function formatAllData([differentData, sameData]){
    var sourceOne = regABform.negativeAmortization;
    var sourceTwo = regABform2.negativeAmortization;
    var out ='';

    for (var i in differentData){
        out += "<li class='descrepancy red-text'> <span>" + differentData[i] + "</span> &nbsp;" + sourceOne[differentData[i]] + "&nbsp;| &nbsp;" + sourceTwo[differentData[i]] + "</li>"
    }
    for (var i in sameData){
        out += "<li> <span>" + space(sameData[i]) + "</span> &nbsp;" + sourceOne[sameData[i]] + "</li>"

    }
    document.getElementById("amortizationInformation").innerHTML = out
}


function formatAnswersCompare(sourceOne, sourceTwo) {
    var out ='';
   if (_.isEqual(sourceOne, sourceTwo)) {
       for (var i in sourceOne) {
           if (sourceOne[i].length !== 0) {
               out += "<li> <span>" + space(i) + "</span> &nbsp; " + sourceOne[i].toLowerCase() + "</li>"
           }
       }
   }
    var descrepancies = _.reduce(sourceOne, function(result, value, key) {
          console.log(_.isEqual(value, sourceTwo[key]));

           return _.isEqual(value, sourceTwo[key])?
               result : result.concat(key);
       }, []);

       for (var i = 0; i < descrepancies.length; i ++) {
               out += "<li class='descrepancy red-text'> <span>" + space(descrepancies[i]) + "</span> &nbsp;" + sourceOne[descrepancies[i]] + "&nbsp;| &nbsp;" + sourceTwo[descrepancies[i]] + "</li>"
       }

return out
}
    // var out ='';
    // for (var i in sourceOne){
    //
    //
    // }
    // compare source one to source two
    // if it matches, show source sourceOne
    // if not matches, class descrepancy show source one


function openAllSections() {
//        get the right elements
//        remove invisble
//     console.log(document.getElementsByClassName("section"));
    console.log("open all sections");
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
function compareData() {

}
//---------------------------------------
// Trying to consolidate
//---------------------------------------
function numberInformation(keyword) {
    var section = regABform.assetNumbers;
    if (keyword == 'answers') {
        document.getElementById("assetNumbers").innerHTML = formatDataOnlyAnswers(section);
    }
    else if (keyword == 'label') {
        document.getElementById("labelsNumbers").innerHTML = formatLabels(section);
    }
    else if (keyword == 'discrepancies') {
    }
    else {
        document.getElementById("assetNumbers").innerHTML = formatData(section);
    }
}
// function amortizationInformation(keyword) {
//     var sourceOne = regABform.negativeAmortization;
//     var sourceTwo = regABform2.negativeAmortization;
//     if (keyword == 'answers') {
//         // document.getElementById("amortizationInformation").innerHTML = formatDataOnlyAnswers(section);
//         document.getElementById("amortizationInformation").innerHTML = formatAnswersCompare(sourceOne, sourceTwo);
//     }
//     else if (keyword == 'label') {
//         document.getElementById("labelsAmortization").innerHTML = formatLabels(section);
//     }
//     else if (keyword == 'discrepancies') {
//     }
//     else {
//         document.getElementById("amortizationInformation").innerHTML = formatData(section);
//     }
// }
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
function propertyInformation() {
    document.getElementById("propertyInformation").innerHTML = formatData(regABform.propertyInformation);
}
function obligorInformation() {
    document.getElementById("obligorInformation").innerHTML = formatData(regABform.obligorInformation);
}
function mortgageInsurance() {
    document.getElementById("mortgageInsurance").innerHTML = formatData(regABform.mortgageInsurance);
}
function loanActivity() {
    document.getElementById("loanActivity").innerHTML = formatData(regABform.loanActivity);
}
function servicerInformation() {
    document.getElementById("servicerInformation").innerHTML = formatData(regABform.servicerInformation);
}
function assetSubjectToDemand() {
    document.getElementById("assetDemand").innerHTML = formatData(regABform.assetSubjectToDemand);
}
function chargedOffInformation() {
    document.getElementById("chargedOff").innerHTML = formatData(regABform.chargedOffInformaiton);
}
function loanModificationsInformation() {
    document.getElementById("loanModifications").innerHTML = formatData(regABform.loanModificationsInformation);
}
function lostIndicator() {
    document.getElementById("lostIndicator").innerHTML = formatData(regABform.lostIndicator);
}
function periodInformation() {
    document.getElementById("periodInformation").innerHTML = formatData(regABform.periodInformation);
}
function stepLoansInformation() {
    document.getElementById("stepLoans").innerHTML = formatData(regABform.stepLoansInformation);
}
function trialModificationInformation() {
    document.getElementById("trialModificationInformation").innerHTML = formatData(regABform.modificationInformation);
}
function repaymentPlanInformation() {
    document.getElementById("repaymentPlanInformation").innerHTML = formatData(regABform.repaymentPlanInformation);
}
function shortSalesInformation() {
    document.getElementById("shortSalesInformation").innerHTML = formatData(regABform.shortSalesInformation);
}
function mitigationExitInformation() {
    document.getElementById("mitigationExitInformation").innerHTML = formatData(regABform.mitigationExitInformation);
}
function foreclosureInformation() {
    document.getElementById("foreclosureInformation").innerHTML = formatData(regABform.foreclosureInformation);
}
function relatedToREOInformation() {
    document.getElementById("relatedREOInformation").innerHTML = formatData(regABform.relatedToREOInformation);
}
function lossesInformation() {
    document.getElementById("lossesInformation").innerHTML = formatData(regABform.lossesInformation);
}
function insuranceClaimsInformation() {
    document.getElementById("insuranceClaimsInformation").innerHTML = formatData(regABform.insuranceClaimsInformation);
}
function delinquentLoansInformation() {
    document.getElementById("delinquentLoansInformation").innerHTML = formatData(regABform.delinquentLoansInformation);
}
//---------------------------------------
// Label Functions
//---------------------------------------
//     function labelsNumbers() {
//         var out = '';
//         for (var i in regABform.assetNumbers) {
//             out += "<li>" + space(i) + "</li>"
//         }
//         document.getElementById("labelsNumbers").innerHTML = out;
//     }

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

// function labelsAmortization() {
//     var out = '';
//     for (var i in regABform.negativeAmortization) {
//         out += "<li>" + space(i) + "</li>"
//     }
//     document.getElementById("labelsAmortization").innerHTML = out;
// }

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
