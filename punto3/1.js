function calculateTip() {
    const total = parseFloat(document.getElementById('totalAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercentage').value);
    const people = parseInt(document.getElementById('peopleCount').value);
    const tipPerPerson = (total * (tipPercent / 100)) / people;
    document.getElementById('result').innerText = 'Propina por persona: $' + tipPerPerson.toFixed(2);
  }
  