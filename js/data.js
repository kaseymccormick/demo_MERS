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
            OriginalLoanPurpose: '',
            Originator: '',
            OriginatorLoanAmount: '',
            OriginalLoanMaturityDate: '',
            OriginalAmortizationTerm: '',
            OriginalInterestRate: '',
            AccrualType: '',
            OriginalInterestRateType: '',
            OriginalInterestOnlyTerm: '',
            UnderwritingIndicator: '',
            OriginalLienPosition: ''
        },
        juniorLiens: {
            mostRecentJuniorLoanBalance: '',
            dateOfMostRecentJuniorLoanBalance: ''
        },
        firstMortgages: {
            MostRecentSeniorLoanAmount: '',
            DateOfMostRecentSeniorLoanAmount: '',
            LoanTypeOfMostSeniorLien: '',
            HybridPeriodOfMostSeniorLien: '',
            NegativeAmortizationLimitOfMostSeniorLien: '',
            OriginationDateOfMostSeniorLien: '',
            PrepaymentPenaltyIndicator: '',
            NegativeAmortizationIndicator: '',
            ModificationIndicator: '',
            NumberOfModifications: '',
            MortgageInsuranceRequirementIndicator: '',
            BalloonIndicator: '',
            CoveredHighCostLoanIndicator: '',
            ServicerPlacedHazardInsurance: '',
            RefinanceCashOutAmount: '',
            TotalOriginationAndDiscountPoints: '',
            Broker: '',
            Channel: '',
            NMLSCompanNumber: '',
            BuyDownPeriod: '',
            loanDelinquencyAdvanceDaysCount: ''
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
        originalNumberOfObligors: '',
        originalObligorCreditScore: '',
        originalObligorCreditScoreType: '',
        mostRecentObligorCreditScore: '',
        mostRecentObligorCreditScoreType: '',
        dateOfMostRecentObligorCreditScore: '',
        obligorIncomeVerificationLevel: '',
        fourThousandFiveHundredAndSixTIndicator: '',
        originatorFrontEdnDebtToIncome: '',
        orignitaroBackEndDti: '',
        obligorEmployementVerification: '',
        lengthOfEmploymentObligor: '',
        obligorAssetVerification: '',
        originalPlegedAssetsqualificationMethod: ''
    },
    mortgageInsurance: {
        mortgageInsuraceCompanyName: '',
        mortgageInsuranceCoverage: '',
        poolInsuranceCompany: '',
        poolInsuranceStopLossPercent: '',
        mortgageInsuranceCoveragePlanType: ''

    },
    loanActivity: {
        remainingTermToMaturity: '',
        modificationIndicatorReportingPeriod: '',
        nextPaymentDueDate: '',
        advancingMethod: '',
        servicingAdvanceMethodology: '',
        stopPrincipalAndInterestAdvanceDate: '',
        reportingPeriodBeginingLoanBalance: '',
        reportingPeriodBeginingShceduledLoanBalance: '',
        nextReportingPeriodPaymentAmountDue: '',
        reportingPeriodInterestRate: '',
        nextInterestRate: '',
        servicingFeePercentage: '',
        servicingFeeFlatFee: '',
        otherAssessedButUncollectedServicerFees: '',
        otherLoanLevelServicingFeesRetainedByTheServicer: '',
        scheduledInterestAmount: '',
        otherInterestAdjustments: '',
        ScheduledPrincipalAmount: '',
        otherPrincipalAdjustments: '',
        reportPeriodEndingActualBalance: '',
        reportingPeriodEndingScheduledBalance: '',
        reportingPeriodScheduledPaymentAmount: '',
        totalActualAmountPaid: '',
        actualInterestCollected: '',
        actualPrincipalCollected: '',
        actualOtherAmountsCollected: '',
        paidThroughDate: '',
        interestPaidThroughDate: '',
        paidInFullAmount: '',
        informationRelatedToServicerAdvances: '',
        servicerAdvancedAmountPrincipal: '',
        servicerAdvancedAmountsRepaidPrincipal: '',
        servicerAdvancesCumulativePrincipal: '',
        servicerAdvancedAmountInterest: '',
        servicerAdvancedAmountsRepaidInterest: '',
        servicerAdvancesCumulativeInterest: '',
        servicerAdvancedAmountTaxesAndInsurance: '',
        servicerAdvancedAmountRepaidTaxesAndInsurance: '',
        servicerAdvancesCumulativeTaxesAndInsurance: '',
        servicerAdvancedAmountCorporate: '',
        servicerAdvancedAmountRepaidCorporate: '',
        servicerAdvancesCumulativeCorporate: '',
        zeroBalanceLoans: '',
        zeroBalanceEffectiveDate: '',
        zeroBalanceCode: '',
        mostRecent12MonthPayHistory: '',
        numberOfPaymentsPastDue: '',
        informationRelatedToActivityOnArmLoans: '',
        rateAtNextReset: '',
        nextPaymentChangeDate: '',
        nextInterestRateChangeDate: '',
        paymentAtNextRest: '',
        exercisedArmConversionOptionIndicator: ''
    },
    servicerInformation: {
        primaryServicer: '',
        mostRecentServicingTransferReceivedDate: '',
        masterServicer: '',
        specialServicer: '',
        subservicer: ''
    },
    assetSubjectToDemand: {
        indicateSubjectOfDemand: '',
        statusOfAssetSubjectToDemand: '',
        repurchaseAmount: '',
        demandResolutionDate: '',
        repurchaser: '',
        repurchaseOrReplacementReason: ''
    },
    chargedOffInformaiton: {
        chargedOffPrincipalAmount: ' something new here',
        chargedOffInterestAmount: ''
    },
    lostIndicator: {
        indicateTypeOfLossMitigationServicerIsPursuingWithObligator: ''
    },
    loanModificationsInformation: {
        mostRecentLoanModificationEventType: '',
        effectiveDateOfTheMostRecentLoanModification: '',
        postModificationMaturityDate: '',
        postModificationInterestRateType: '',
        postModificationAmortizationType: '',
        postModificationInterestRate: '',
        postModificationFirstPaymentDate: '',
        postModificationLoanBalance: '',
        postModificationPrincipalAndInterstPayment: '',
        totalCapitalizedAmount: '',
        incomeVerificationIndicatorAtModification: '',
        modificationFrontEndDTI: '',
        modificationBackEndDTI: '',
        totalDeferredAmount: '',
        forgivenPrincipalAmountCumulative: '',
        forgivenPrincipalAmountReportingPeriod: '',
        forgivenInterestAmountCumulative: '',
        forgivenInterestAmountReportingPeriod: '',
        actualEndingBalanceTotalDebtOwed: '',
        scheduledEndingBalanceTotalDebtOwed: '',
        informationRelatedToARMLoanModifications: '',
        informationRelatedToArmLoanModifications: '',
        posModificationArmIndicator: '',
        postModificatioArmIndex: '',
        postModificationMargin: '',
        postModificationInterestResetPeriodIfChanged: '',
        postModificationNextResetDate: '',
        postModificationIndexLookback: '',
        postModificationArmRoundIndicator: '',
        postModificationArmRoundPercentage: '',
        postModificationInitialMinimumPayment: '',
        postModificationNextPaymentAdjustmentDate: '',
        postModificationArmPaymentRecastFrequency: '',
        postModificationLifetimeRateFloor: '',
        postModificationLifetimeRateCeiling: '',
        postModificationInitialInterestRateIncrease: '',
        postModificationInitialInterestRateDecrease: '',
        postModificationSubsequentInterestRateIncrease: '',
        postModificationSubsequentInterestRateDecrease: '',
        postModificationPaymentCap: '',
        postModificationPaymentMethodAfterRecast: '',
        postModificationArmInterestRateTeaserPeriod: '',
        postModificationPaymentTeaserPeriod: '',
        postModificationArmNegativeAmortizationIndicator: '',
        postModificationArmNegativeAmortization: ''
    },
    periodInformation: {
        postModificationInterestOnlyTerm: '',
        postModificationInterestOnlyLastPaymentDate: '',
        postModificationBalloonPaymentAmount: ''
    },
    stepLoansInformation: {
        postModificationInterestRateStepIndicator: '',
        postModificationStepInterestRate: '',
        postModificationStepDate: '',
        postModificationStepPrincipalAndInterest: '',
        postModificationNumberOfSteps: '',
        postModificationMaximumFutureRateUnderStepAgreemnet: '',
        postModificationDateOfMaximumRateUnderStepAgreement: '',
        nonInterestBearingPrincipalDeferredAmountCumulative: '',
        nonInterestBearingPrincipalDeferredAmountReportingPeriod: '',
        recoveryOfDeferredPrincipalReportingPeriod: '',
        nonInterestBearingDeferredPaidInFullAmount: '',
        nonInterestBearingDeferredInterestAndFeesAmountReportingPeriod: '',
        nonInterestBearingDeferredInterestFeesAmountCumulative: '',
        recoveryOfDeferredInterestAndFeesReportingPeriod: ''
    },
    modificationInformation: {
        mostRecentForebarancePlanOrTrialModificationStartDate: '',
        mostRecentForbearancePlanOrTrialModificationScheduledEndDate: '',
        mostRecentTrialModificationViolatedDate: ''
    },
    repaymentPlanInformation: {
        mostRecentRepaymentPlanStartDate: '',
        mostRecentRepaymentPlanScheduledEndDate: '',
        mostRecentRepaymentPlanViolatedDate: ''
    },
    shortSalesInformation: {
        shortSaleAcceptedOfferAmount: ''
    },
    mitigationExitInformation: {
        mostRecentLossMitigationExitDate: '',
        mostRecentLossMitigationExitCode: ''
    },
    foreclosureInformation: {
        AttorneyReferalDate: '',
        foreclosureDelayReason: '',
        foreclosureExitDate: '',
        foreclosureExitReason: '',
        NOIDate: ''
    },
    relatedToREOInformation: {
        mostRecentAcceptedREOOfferAmount: '',
        mostRecentAcceptedREOOfferDate: '',
        grossLiquidationProceeds: '',
        netSalesProceeds: '',
        reportingPeriodLossAmountPassedToIssuingEntity: '',
        cumulativeTotalLossAmountPassedToIssuingEntity: '',
        subsequentRecoveryAmount: '',
        evictionIndicator: '',
        REOExitDate: '',
        REOExitReason: ''
    },
    lossesInformation: {
        UPBAtLiquidation: '',
        servicingFeesClaimed: '',
        servicerAdvancedAmountsReimbursePrincipal: '',
        servicerAdvancedAmountsReimbursedInterest: '',
        servicerAdvancedAmountReimbursedTaxesAndInsurance: '',
        servicerAdvancedAmountReimbursedCorporate: '',
        REOManagementFees: '',
        cashForKeysCashForDeed: '',
        performanceIncentiveFees: ''
    },
    insuranceClaimsInformation: {
        MIClaimFiledDate: '',
        MIClaimAmount: '',
        MIClaimPaidDate: '',
        MIClaimPaidAmount: '',
        MIClaimDeniedRescindedDate: '',
        MarketableTitleTransferredDate: ''
    },
    delinquentLoansInformation: {
        nonPayStatus: '',
        reportingActionCode: 'XZ8261'
    }
};


function numberInformation() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.assetNumbers[i] + "</li>"
    }
    document.getElementById("assetNumbers").innerHTML = out;
}
function labelsNumbers() {
    var out = '';
    for (var i in regABform.assetNumbers) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsNumbers").innerHTML = out;
}

function reportingInformation() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.reportingPeriod[i] + "</li>"
    }
    document.getElementById("reportingPeriod").innerHTML = out;
}
function labelsReporting() {
    var out = '';
    for (var i in regABform.reportingPeriod) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsReporting").innerHTML = out;
}
function originationInformation() {
    var out = '';
    for (var i in regABform.generalInformation.origination) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.generalInformation.origination[i].toLowerCase() + "</li>"
    }
    document.getElementById("origination").innerHTML = out;
}
function labelsOrigination() {
    var out = '';
    for (var i in regABform.generalInformation.origination) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsOrigination").innerHTML = out;
}

function juniorLienInformation() {
    var out = '';
    for (var i in regABform.generalInformation.juniorLiens) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.generalInformation.juniorLiens[i].toLowerCase() + "</li>"
    }
    document.getElementById("juniorLiens").innerHTML = out;
}

function labelsJuniorLien() {
    var out = '';
    for (var i in regABform.generalInformation.juniorLiens) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsJuniorLien").innerHTML = out;
}
function mortgageInformation() {
    var out = '';
    for (var i in regABform.generalInformation.firstMortgages) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.generalInformation.firstMortgages[i].toLowerCase() + "</li>"
    }
    document.getElementById("mortgageInformation").innerHTML = out;
}

function labelsMortgage() {
    var out = '';
    for (var i in regABform.generalInformation.firstMortgages) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsMortgage").innerHTML = out;
}

function amortizationInformation() {
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.negativeAmortization[i].toLowerCase() + "</li>"
    }
    document.getElementById("amortizationInformation").innerHTML = out;
}

function labelsAmortization() {
    var out = '';
    for (var i in regABform.negativeAmortization) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsAmortization").innerHTML = out;
}
function propertyInformation() {
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.propertyInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("propertyInformation").innerHTML = out;

}
function labelsProperty() {
    var out = '';
    for (var i in regABform.propertyInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsProperty").innerHTML = out;

}
function obligorInformation() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.obligorInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("obligorInformation").innerHTML = out;

}
function labelsObligor() {
    var out = '';
    for (var i in regABform.obligorInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsObligor").innerHTML = out;
}
function mortgageInsurance() {
    var out = '';
    for (var i in regABform.mortgageInsurance) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.mortgageInsurance[i].toLowerCase() + "</li>"
    }
    document.getElementById("mortgageInsurance").innerHTML = out;
}
function labelsMortgageInsurance() {
    var out = '';
    for (var i in regABform.mortgageInsurance) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsMortgageInsurance").innerHTML = out;
}
function loanActivity() {
    var out = '';
    for (var i in regABform.loanActivity) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.loanActivity[i].toLowerCase() + "</li>"
    }
    document.getElementById("loanActivity").innerHTML = out;
}
function labalsLoanActivity() {
    var out = '';
    for (var i in regABform.loanActivity) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLoanActivity").innerHTML = out;
}
function servicerInformation() {
    var out = '';
    for (var i in regABform.servicerInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.servicerInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("servicerInformation").innerHTML = out;
}
function labelsServicer() {
    var out = '';
    for (var i in regABform.servicerInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsServicer").innerHTML = out;
}
function assetSubjectToDemand() {
    var out = '';
    for (var i in regABform.assetSubjectToDemand) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.assetSubjectToDemand[i].toLowerCase() + "</li>"
    }
    document.getElementById("assetDemand").innerHTML = out;
}
function labelsAsset() {
    var out = '';
    for (var i in regABform.assetSubjectToDemand) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsAsset").innerHTML = out;
}


function chargedOffInformation() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.chargedOffInformaiton[i].toLowerCase() + "</li>"
    }
    document.getElementById("chargedOff").innerHTML = out;
}
function labelsCharged() {
    var out = '';
    for (var i in regABform.chargedOffInformaiton) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsCharged").innerHTML = out;
}
function lostIndicator() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.lostIndicator[i].toLowerCase() + "</li>"
    }
    document.getElementById("lostIndicator").innerHTML = out;


}
function labelsLost() {
    var out = '';
    for (var i in regABform.lostIndicator) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLost").innerHTML = out;
}
function loanModificationsInformation() {
    var out = '';
    for (var i in regABform.loanModificationsInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.loanModificationsInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("loanModificationsInformation").innerHTML = out;
}
function labelsLoanModifications() {
    var out = '';
    for (var i in regABform.loanModificationsInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLoanModifications").innerHTML = out;

}
function periodInformation() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.periodInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("periodInformation").innerHTML = out;
}
function labelsPeriod() {
    var out = '';
    for (var i in regABform.periodInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsPeriod").innerHTML = out;
}
function stepLoansInformation() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.stepLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("stepLoans").innerHTML = out;
}
function labelsStepLoans() {
    var out = '';
    for (var i in regABform.stepLoansInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsStepLoans").innerHTML = out;
}
function trialModificationInformation() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li> <span>" + i + "</span>" + regABform.modificationInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("trialModificationInformation").innerHTML = out;
}
function labelsTrial() {
    var out = '';
    for (var i in regABform.modificationInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsTrial").innerHTML = out;
}
function repaymentPlanInformation() {
    var out = '';
    for (var i in regABform.repaymentPlanInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.repaymentPlanInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("repaymentPlanInformation").innerHTML = out;
}
function labelsRepayment() {
    var out = '';
    for (var i in regABform.repaymentPlanInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsRepayment").innerHTML = out;
}
function shortSalesInformation() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.shortSalesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("shortSalesInformation").innerHTML = out;
}
function labelsShort() {
    var out = '';
    for (var i in regABform.shortSalesInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsShort").innerHTML = out;
}
function mitigationExitInformation() {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.mitigationExitInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("mitigationExitInformation").innerHTML = out;
}
function labelsMitigation() {
    var out = '';
    for (var i in regABform.mitigationExitInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsMitigation").innerHTML = out;
}
function foreclosureInformation() {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.foreclosureInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("foreclosureInformation").innerHTML = out;


}

function labelsForeclosure() {
    var out = '';
    for (var i in regABform.foreclosureInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsForeclosure").innerHTML = out;
}

function relatedToREOInformation() {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.relatedToREOInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("relatedREOInformation").innerHTML = out;


}
function labelsRelated() {
    var out = '';
    for (var i in regABform.relatedToREOInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsRelated").innerHTML = out;
}


function lossesInformation() {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.lossesInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("lossesInformation").innerHTML = out;


}
function labelsLosses() {
    var out = '';
    for (var i in regABform.lossesInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsLosses").innerHTML = out;
}


function insuranceClaimsInformation() {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.insuranceClaimsInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("insuranceClaimsInformation").innerHTML = out;
}
function labelInsuranceClaims() {
    var out = '';
    for (var i in regABform.insuranceClaimsInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsInsuranceClaims").innerHTML = out;
}
function delinquentLoansInformation() {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li> <span>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</span>" + regABform.delinquentLoansInformation[i].toLowerCase() + "</li>"
    }
    document.getElementById("delinquentLoansInformation").innerHTML = out;
}
function labelsDelinquent() {
    var out = '';
    for (var i in regABform.delinquentLoansInformation) {
        out += "<li>" + i.replace(/([a-z])([A-Z])/g, "$1 $2") + "</li>"
    }
    document.getElementById("labelsDelinquent").innerHTML = out;
}

