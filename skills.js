function calculateNumbers(var1, var2) {
    return var1 + var2;
}

function calculateProfit(numberOfYears, rateIncreasePercentagePerYear, initialSumPutIntoAccount) {
    var profit = initialSumPutIntoAccount;
    for (var i = 0; i < numberOfYears; i++) {
        profit = profit * (1 + rateIncreasePercentagePerYear);
    }
    return profit;
}