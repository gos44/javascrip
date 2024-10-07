function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const rate = 1.1; // Simula el tipo de cambio
  const result = amount * rate;
  document.getElementById('conversionResult').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
