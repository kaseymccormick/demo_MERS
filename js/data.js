/**
 * Created by kasey.mccormick on 1/30/17.
 */
const regABform = {
    assetNumbers: {
        numberType: 'MERS',
        number: '44323',
        groupNumber: '4419873'
    },
    reportingPeriod: {
        begin: '09/26/2017',
        end: '11/31/2017'
    },
    generalInformation: {
        origination: {
            purpose: 'unknown',
            originator: 'unknown',
            amount: '$345,000',
            maturityDate: '11/36/2040'
        },
        juniorLiens: {
            balance: '$22,998'
        },
        firstMortgages: {
            loanAmount: '$340,000'
        }
    },
    negativeAmortization: {
        limit: '$20,000',
        recastPeriod: 'unknown',
        subsequent: 'unknown',
        negative: 'unknown',
        fixedPaymentPeriod: 'unknown',
        periodic: 'unknown',
        paymentCap: 'unknown',
        resetPeriod: 'unknown',
        paymentResetPeriod: 'unknown',
        minimumPayment: 'unknown'
    },
    propertyInformation: {
        geograpicLocation: '',
        occupancyStatus: '',
        mostRecentOccupancyStatus: '',
        propertyType: '',
        mostRecentPropertyValue: '',
        mostRecentPropertyValuationType: '',
        mostRecentPropertyValuationDate: '',
        mostRecentAvmModelName: '',
        mostRecentAVMConfidenceScore: '',
        originalCombinedLoanToValue: ''
    },
    obligorInformation: {},
    mortgageInsurance: {},
    loanActivity: {},
    servicerInformation: {},
    assetSubjectToDemand: {},
    chargedOffInformaiton: {},
    lostMitigationTypeIndicator: {},
    informationRelatedToLoanModifications: {},
    periodInformation: {},
    stepLoansInformation: {},
    modificationInformation: {},
    repaymentPlanInformation: {},
    shortSalesInformation: {
        offerAmount: ''
    },
    mitigationExitInformation: {
        exitDate: '',
        exitCode: ''
    },
    foreclosureProcessInformation: {
        date: ''
    },
    relatedToREOInformation: {
        amount: ''
    },
    lossesInformation: {
        thing: ''
    },
    insuranceClaimsInformation: {
        filedDate: '',
        claimAmount: '',
        paidDate: '',
        paidAmount: '',
        rescindedDate: '',
        transferredDate: ''
    },
    delinquentLoansInformation: {
        nonPayStatus: '',
        reportingActionCode: ''
    }
};

function numberInformation() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li> <b>" + i + "</b>" + regABform.assetNumbers[i] + "</li>"
    }
    document.getElementById("assetNumbers").innerHTML = out;
}

function reportingInformation() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li> <b>" + i + "</b>" + regABform.reportingPeriod[i] + "</li>"
    }
    document.getElementById("reportingPeriod").innerHTML = out;
}

function amortizationInformation(){
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li> <b>" + i + "</b>" + regABform.negativeAmortization[i].toLowerCase() + "</li>"
    }
    document.getElementById("amortizationInformation").innerHTML = out;
}
//lowercase everything then doing css to text transform capitalize