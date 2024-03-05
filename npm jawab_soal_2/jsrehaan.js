function getCallback(input) {
    const numbers = [
      { name: "ayam", value: 49000 },
      { name: "sapi", value: 130000 },
      { name: "minyak", value: 20000 },
      { name: "beras", value: 18000 },
      { name: "telur", value: 26000 },
      { name: "nugget", value: 70000 },
      { name: "sosis", value: 85000 },
      { name: "gula", value: 17000 },
      { name: "garam", value: 16000 },
      { name: "ikan", value: 50000 },
    ];
  
    const result = numbers.find((number) => number.name === input.toLowerCase());
  
    if (result) {
      return setTimeout(() => {
        document.getElementById("result").innerHTML = `Callback: ${result.value}`;
      }, 0);
    } else {
      document.getElementById("result").innerHTML = "Invalid input";
    }
  }