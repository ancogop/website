// Function to load representative information from a csv
async function loadRepsFromCSV() {
  const response = await fetch('assets/reps.csv');
  const data = await response.text();
  const rows = data.trim().split('\n').slice(1); // Skip header row
  const reps = rows.map(row => {
    const [name, title, party, img, email, phone] = row.split(',');
    return { name, title, party, img, email, phone };
  });
  const container = document.getElementById('rep-list');
  container.innerHTML = reps.map(rep => `
    <!-- ${rep.name} -->
    <div class="rep-card">
      <img src="${rep.img}" alt="${rep.name}" />
      <div class="rep-info">
        <p class="rep-title">${rep.title}</p>
        <p><strong>${rep.name}</strong></p>
        <p class="rep-party">${rep.party}</p>
        <p>
          <a href="${rep.email}">
            <i class="fas fa-envelope"></i> Email
          </a>
        </p>
        <p>
          <a href="tel:${rep.phone}">
            <i class="fas fa-phone"></i> (${rep.phone.slice(0,3)}) ${rep.phone.slice(3,6)}-${rep.phone.slice(6)}
          </a>
        </p>
      </div>
    </div>
  `).join('');
}
// Load list of representatives
loadRepsFromCSV();