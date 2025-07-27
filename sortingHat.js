document.getElementById('quiz-form').onsubmit = function(e) {
  e.preventDefault();
  let houses = { Gryffindor:0, Slytherin:0, Ravenclaw:0, Hufflepuff:0 };
  [...new FormData(e.target).values()].forEach(v => { if(houses[v] !== undefined) houses[v]++; });
  let sorted = Object.entries(houses).sort((a,b) => b[1] - a[1]);
  document.getElementById("house-result").innerText = "You belong to: " + sorted[0][0] + "!";
};
