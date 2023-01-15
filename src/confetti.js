import './commons.css';
import JSConfetti from 'js-confetti';

const btn = document.getElementById('throw-confetti');

const canvas = document.querySelector('canvas');

const jsConfetti = new JSConfetti({ canvas });

btn.addEventListener('click', async() => {
  btn.disabled = true;
  await jsConfetti.addConfetti();
  btn.disabled = false;
});