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


