const spells = {
  "Lumos": "✨ A beam of light shines from your wand!",
  "Expelliarmus": "🪄 Your opponent's wand flies away!",
  "Wingardium Leviosa": "🕊️ Something starts to levitate!",
  "Expecto Patronum": "🦄 A Patronus illuminates the darkness!"
};
function castSpell() {
  const input = document.getElementById('spell-input').value.trim();
  document.getElementById('spell-response').innerText = 
    spells[input] || "Nothing happens. Try another spell!";
}
