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
            purpose: ' unknown',
            originator: ' unknown',
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
        recastPeriod: ' unknown',
        subsequent: ' unknown',
        negative: ' unknown',
        fixedPaymentPeriod: ' unknown',
        periodic: ' unknown',
        paymentCap: ' unknown',
        resetPeriod: ' unknown',
        paymentResetPeriod: ' unknown',
        minimumPayment: ' unknown'
    },
    propertyInformation: {
        geograpicLocation: '',
        occupancyStatus: '',
        mostRecentOccupancyStatus: '',
        propertyType: '',
        mostRecentPropertyValue: '$133,000',
        mostRecentPropertyValuationType: '',
        mostRecentPropertyValuationDate: '',
        mostRecentAvmModelName: '',
        mostRecentAVMConfidenceScore: '',
        originalCombinedLoanToValue: ''
    },
    obligorInformation: {

    },
    mortgageInsurance: {
        mortgageInsuraceCompanyName:'',
        mortgageInsuranceCoverage:'',
        poolInsuranceCompany:'',
        poolInsuranceStopLossPercent:'',
        mortgageInsuranceCoveragePlanType:''

    },
    loanActivity: {
        remainingTermToMaturity:'',
        modificationIndicatorReportingPeriod:'',
        nextPaymentDueDate:'',
        advancingMethod:'',
        servicingAdvanceMethodology:'',
        stopPrincipalAndInterestAdvanceDate:'',
        reportingPeriodBeginingLoanBalance:'',
        reportingPeriodBeginingShceduledLoanBalance:'',
        nextReportingPeriodPaymentAmountDue:'',
        reportingPeriodInterestRate:'',
        nextInterestRate:'',
        servicingFeePercentage:'',
        servicingFeeFlatFee:'',
        otherAssessedButUncollectedServicerFees:'',
        otherLoanLevelServicingFeesRetainedByTheServicer:'',
        scheduledInterestAmount:'',
        otherInterestAdjustments:'',
        ScheduledPrincipalAmount:'',
        otherPrincipalAdjustments:'',
        reportPeriodEndingActualBalance:'',
        reportingPeriodEndingScheduledBalance:'',
        reportingPeriodScheduledPaymentAmount:'',
        totalActualAmountPaid:'',
        actualInterestCollected:'',
        actualPrincipalCollected:'',
        actualOtherAmountsCollected:'',
        paidThroughDate:'',
        interestPaidThroughDate:'',
        paidInFullAmount:'',
        informationRelatedToServicerAdvances:'',
        servicerAdvancedAmountPrincipal:'',
        servicerAdvancedAmountsRepaidPrincipal:'',
        servicerAdvancesCumulativePrincipal:'',
        servicerAdvancedAmountInterest:'',
        servicerAdvancedAmountsRepaidInterest:'',
        servicerAdvancesCumulativeInterest:'',
        servicerAdvancedAmountTaxesAndInsurance:'',
        servicerAdvancedAmountRepaidTaxesAndInsurance:'',
        servicerAdvancesCumulativeTaxesAndInsurance:'',
        servicerAdvancedAmountCorporate:'',
        servicerAdvancedAmountRepaidCorporate:'',
        servicerAdvancesCumulativeCorporate:'',
        zeroBalanceLoans:'',
        zeroBalanceEffectiveDate:'',
        zeroBalanceCode:'',
        mostRecent12MonthPayHistory:'',
        numberOfPaymentsPastDue:'',
        informationRelatedToActivityOnArmLoans:'',
        rateAtNextReset:'',
        nextPaymentChangeDate:'',
        nextInterestRateChangeDate:'',
        paymentAtNextRest:'',
        exercisedArmConversionOptionIndicator:''
    },
    servicerInformation: {
        primaryServicer:'',
        mostRecentServicingTransferReceivedDate:'',
        masterServicer:'',
        specialServicer:'',
        subservicer:''
    },
    assetSubjectToDemand: {
        indicateSubjectOfDemand:'',
        statusOfAssetSubjectToDemand:'',
        repurchaseAmount:'',
        demandResolutionDate:'',
        repurchaser:'',
        repurchaseOrReplacementReason:''
    },
    chargedOffInformaiton: {
        chargedOffPrincipalAmount:'',
        chargedOffInterestAmount:''
    },
    lostIndicator: {
        indicateTypeOfLossMitigationServicerIsPursuingWithObligator:''
    },
    loanModificationsInformation: {
        mostRecentLoanModificationEventType:'',
        effectiveDateOfTheMostRecentLoanModification:'',
        postModificationMaturityDate:'',
        postModificationInterestRateType:'',
        postModificationAmortizationType:'',
        postModificationInterestRate:'',
        postModificationFirstPaymentDate:'',
        postModificationLoanBalance:'',
        postModificationPrincipalAndInterstPayment:'',
        totalCapitalizedAmount:'',
        incomeVerificationIndicatorAtModification:'',
        modificationFrontEndDTI:'',
        modificationBackEndDTI:'',
        totalDeferredAmount:'',
        forgivenPrincipalAmountCumulative:'',
        forgivenPrincipalAmountReportingPeriod:'',
        forgivenInterestAmountCumulative:'',
        forgivenInterestAmountReportingPeriod:'',
        actualEndingBalanceTotalDebtOwed:'',
        scheduledEndingBalanceTotalDebtOwed:'',
        informationRelatedToARMLoanModifications:'',
        informationRelatedToArmLoanModifications:'',
        posModificationArmIndicator:'',
        postModificatioArmIndex:'',
        postModificationMargin:'',
        postModificationInterestResetPeriodIfChanged:'',
        postModificationNextResetDate:'',
        postModificationIndexLookback:'',
        postModificationArmRoundIndicator:'',
        postModificationArmRoundPercentage:'',
        postModificationInitialMinimumPayment:'',
        postModificationNextPaymentAdjustmentDate:'',
        postModificationArmPaymentRecastFrequency:'',
        postModificationLifetimeRateFloor:'',
        postModificationLifetimeRateCeiling:'',
        postModificationInitialInterestRateIncrease:'',
        postModificationInitialInterestRateDecrease:'',
        postModificationSubsequentInterestRateIncrease:'',
        postModificationSubsequentInterestRateDecrease:'',
        postModificationPaymentCap:'',
        postModificationPaymentMethodAfterRecast:'',
        postModificationArmInterestRateTeaserPeriod:'',
        postModificationPaymentTeaserPeriod:'',
        postModificationArmNegativeAmortizationIndicator:'',
        postModificationArmNegativeAmortization:''
    },
    periodInformation: {
        postModificationInterestOnlyTerm:'',
        postModificationInterestOnlyLastPaymentDate:'',
        postModificationBalloonPaymentAmount:''
    },
    stepLoansInformation: {
        postModificationInterestRateStepIndicator:'',
        postModificationStepInterestRate:'',
        postModificationStepDate:'',
        postModificationStepPrincipalAndInterest:'',
        postModificationNumberOfSteps:'',
        postModificationMaximumFutureRateUnderStepAgreemnet:'',
        postModificationDateOfMaximumRateUnderStepAgreement:'',
        nonInterestBearingPrincipalDeferredAmountCumulative:'',
        nonInterestBearingPrincipalDeferredAmountReportingPeriod:'',
        recoveryOfDeferredPrincipalReportingPeriod:'',
        nonInterestBearingDeferredPaidInFullAmount:'',
        nonInterestBearingDeferredInterestAndFeesAmountReportingPeriod:'',
        nonInterestBearingDeferredInterestFeesAmountCumulative:'',
        recoveryOfDeferredInterestAndFeesReportingPeriod:''
    },
    modificationInformation: {
        mostRecentForebarancePlanOrTrialModificationStartDate:'',
        mostRecentForbearancePlanOrTrialModificationScheduledEndDate:'',
        mostRecentTrialModificationViolatedDate:''
    },
    repaymentPlanInformation: {
        mostRecentRepaymentPlanStartDate:'',
        mostRecentRepaymentPlanScheduledEndDate:'',
        mostRecentRepaymentPlanViolatedDate:''
    },
    shortSalesInformation: {
        shortSaleAcceptedOfferAmount: ''
    },
    mitigationExitInformation: {
        mostRecentLossMitigationExitDate:'',
        mostRecentLossMitigationExitCode:''
    },
    foreclosureInformation: {
        AttorneyReferalDate:'',
        foreclosureDelayReason:'',
        foreclosureExitDate:'',
        foreclosureExitReason:'',
        NOIDate:''
    },
    relatedToREOInformation: {
        mostRecentAcceptedREOOfferAmount:'',
        mostRecentAcceptedREOOfferDate:'',
        grossLiquidationProceeds:'',
        netSalesProceeds:'',
        reportingPeriodLossAmountPassedToIssuingEntity:'',
        cumulativeTotalLossAmountPassedToIssuingEntity:'',
        subsequentRecoveryAmount:'',
        evictionIndicator:'',
        REOExitDate:'',
        REOExitReason:''
    },
    lossesInformation: {
        UPBAtLiquidation:'',
        servicingFeesClaimed:'',
        servicerAdvancedAmountsReimbursePrincipal:'',
        servicerAdvancedAmountsReimbursedInterest:'',
        servicerAdvancedAmountReimbursedTaxesAndInsurance:'',
        servicerAdvancedAmountReimbursedCorporate:'',
        REOManagementFees:'',
        cashForKeysCashForDeed:'',
        performanceIncentiveFees:''
    },
    insuranceClaimsInformation: {
        MIClaimFiledDate:'',
        MIClaimAmount:'',
        MIClaimPaidDate:'',
        MIClaimPaidAmount:'',
        MIClaimDeniedRescindedDate:'',
        MarketableTitleTransferredDate:''
    },
    delinquentLoansInformation: {
        nonPayStatus: '',
        reportingActionCode: 'XZ8261'
    }
};

function numberInformation() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li> <span>" + i + "</span>" + regABform.assetNumbers[i] + "</li>"
    }
    document.getElementById("assetNumbers").innerHTML = out;
}

function reportingInformation() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li> <span>" + i + "</span>" + regABform.reportingPeriod[i] + "</li>"
    }
    document.getElementById("reportingPeriod").innerHTML = out;
}

function amortizationInformation(){
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li> <span>" + i + "</span>" + regABform.negativeAmortization[i].toLowerCase() + "</li>"
    }
    document.getElementById("amortizationInformation").innerHTML = out;
}

function propertyInformation(){
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.propertyInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("propertyInformation").innerHTML = out;

}

function obligorInformation(){
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.obligorInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("obligorInformation").innerHTML = out;

}

function mortgageInsurance() {
    var out = '';
    for (var i in regABform.mortgageInsurance) {
        out += "<li> <span>" + i + "</span>" + regABform.mortgageInsurance[i].toLowerCase() + "</li>"
    }
    document.getElementById("mortgageInsurance").innerHTML = out;

}

function loanActivity() {
    var out = '';
    for (var i in regABform.loanActivity) {
        out += "<li> <span>" + i + "</span>" + regABform.loanActivity[i].toLowerCase() + "</li>"
    }
    document.getElementById("loanActivity").innerHTML = out;


}

function servicerInformation() {
    var out = '';
    for (var i in regABform.servicerInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.servicerInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("servicerInformation").innerHTML = out;


}

function assetSubjectToDemand() {
    var out = '';
    for (var i in regABform.assetSubjectToDemand) {
        out += "<li> <span>" + i + "</span>" + regABform.assetSubjectToDemand[i].toLowerCase() + "</li>"
    }
    document.getElementById("assetDemand").innerHTML = out;


}

function chargedOffInformation() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += "<li> <span>" + i + "</span>" + regABform.chargedOffInformaiton[i].toLowerCase() + "</li>"
    }
    document.getElementById("chargedOff").innerHTML = out;


}

function lostIndicator() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li> <span>" + i + "</span>" + regABform.lostIndicator[i].toLowerCase() + "</li>"
    }
    document.getElementById("lostIndicator").innerHTML = out;


}

function loanModificationsInformation() {
    var out = '';
    for (var i in regABform.loanModificationsInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.loanModificationsInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("loanModificationsInformation").innerHTML = out;


}

function periodInformation() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.periodInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("periodInformation").innerHTML = out;


}

function stepLoansInformation() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.stepLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("stepLoans").innerHTML = out;


}

function trialModificationInformation() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.modificationInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("trialModificationInformation").innerHTML = out;


}

function repaymentPlanInformation() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.obligorInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("repaymentPlanInformation").innerHTML = out;


}

function shortSalesInformation() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.shortSalesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("shortSalesInformation").innerHTML = out;


}

function mitigationExitInformation () {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.mitigationExitInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("mitigationExitInformation").innerHTML = out;


}

function foreclosureInformation () {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.foreclosureInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("foreclosureInformation").innerHTML = out;


}

function relatedToREOInformation () {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.relatedToREOInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("relatedREOInformation").innerHTML = out;


}

function lossesInformation () {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.lossesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("lossesInformation").innerHTML = out;


}

function insuranceClaimsInformation () {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li> <b>" + i + "</b>" + regABform.insuranceClaimsInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("insuranceClaimsInformation").innerHTML = out;


}

function delinquentLoansInformation () {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.delinquentLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("delinquentLoansInformation").innerHTML = out;


}