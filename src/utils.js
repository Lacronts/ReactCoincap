export function formatCurrency(number) {
  number = number || 0;
    const standardFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });

    const expandedFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 4,
    });

    if (number < 1) {
      return expandedFormat.format(number);
    }
    return standardFormat.format(number);
  };

  export function formatNumber(number) {
    number = number || 0;
    const standardFormat = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    const expandedFormat = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 4
    });

    const deepFormat = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 6
    });

    if (number < 0.01) return deepFormat.format(number);
    if (number < 0.1) return expandedFormat.format(number);
    return standardFormat.format(number);
  };

  export function formatPercent(number) {
    number = number/100 || 0;
    const percentFormat = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 2,
    });

    return percentFormat.format(number);
  };

  export function isValuePositive(number) {
    number = number || 0;
    return number > 0;
  };
