import quote_data from "./quote_data.json" assert { type: "json" };

const qouteEl = document.getElementById("quotation");
const sourceEl = document.getElementById("source");

const renderQuotes = () => {
  let ramdomQoute = Math.floor(Math.random() * quote_data.length);
  qouteEl.innerHTML = quote_data[ramdomQoute].quote;
  sourceEl.innerHTML = quote_data[ramdomQoute].source;
  console.log(ramdomQoute);
};

setInterval(renderQuotes, 3000);
