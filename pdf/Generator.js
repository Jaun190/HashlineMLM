// Erfordert: jsPDF (https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)
// Optional in HTML einbinden, z. B. im Adminpanel

async function generateAllPayoutPDFs() {
  const { jsPDF } = window.jspdf;

  const { data: users, error } = await supabase.from("profiles").select("*");

  if (error) {
    alert("Fehler beim Laden der Nutzer: " + error.message);
    return;
  }

  users.forEach((user) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Hashline – Provisionsabrechnung", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nutzer-ID: ${user.id}`, 20, 40);
    doc.text(`E-Mail: ${user.email}`, 20, 50);
    doc.text(`Level: ${user.level || 1}`, 20, 60);
    doc.text(`Provision: CHF ${user.provision || 0}.–`, 20, 70);

    const filename = `provision_${user.email}.pdf`;
    doc.save(filename);
  });
}
