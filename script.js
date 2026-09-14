// Data pengguna
const NAMA = "Bagas Arya Pratama";
const NIM = "825250138";

const cardZone = document.getElementById('cardZone');
const btnBuat = document.getElementById('btnBuat');
const btnHapus = document.getElementById('btnHapus');

// Tombol 1: membuat 1 persegi panjang (ID) yang menampilkan Nama dan NIM
btnBuat.addEventListener('click', () => {
  if (document.getElementById('idCard')) return; // sudah ada, jangan duplikat

  const card = document.createElement('div');
  card.className = 'id-card';
  card.id = 'idCard';
  card.innerHTML = `
    <div class="id-card__strip"></div>
    <div class="id-card__body">
      <div class="id-card__row">
        <div class="id-card__label">Nama</div>
        <div class="id-card__value">${NAMA}</div>
      </div>
      <div class="id-card__row">
        <div class="id-card__label">NIM</div>
        <div class="id-card__value">${NIM}</div>
      </div>
    </div>
  `;
  cardZone.appendChild(card);
});

// Tombol 2: menghapus ID yang dimunculkan oleh tombol 1
btnHapus.addEventListener('click', () => {
  const card = document.getElementById('idCard');
  if (card) card.remove();
});
