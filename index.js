// Import stylesheets
import './style.css';

// Write Javascript code!
document.getElementById('app1').addEventListener('wheel', (e) => {
  e.preventDefault();
  document.getElementById('valueX').innerHTML = `Delta X: ${e.deltaX}`;
  document.getElementById('valueY').innerHTML = `Delta Y: ${e.deltaY}`;
});
