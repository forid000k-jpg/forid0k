const currencySelector = document.getElementById("currencySelector");
const marketToggle = document.getElementById("marketToggle");
const horaEl = document.getElementById("hora");
const tfBadge = document.getElementById("tfBadge");

const realPairs = [
  { val:"eurusd", text:"EUR / USD" },
  { val:"eurjpy", text:"EUR / JPY" }
];

let currentMarket = "real";
let currentTF = "M1";

/* Clock */
setInterval(()=>{
  const d = new Date();
  horaEl.textContent =
    d.toLocaleTimeString("en-GB");
},1000);

/* Populate pairs */
function populatePairs(){
  currencySelector.innerHTML="";
  realPairs.forEach(p=>{
    const o=document.createElement("option");
    o.value=p.val;
    o.textContent=p.text;
    currencySelector.appendChild(o);
  });
}

/* Market toggle */
marketToggle.onclick = ()=>{
  currentMarket = currentMarket==="real"?"otc":"real";
  marketToggle.textContent = currentMarket==="real"?"R":"O";
};

/* Timeframe */
document.querySelectorAll(".tf-btn").forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll(".tf-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentTF = btn.dataset.tf;
    tfBadge.textContent = currentTF;
  };
});

/* Init */
populatePairs();
