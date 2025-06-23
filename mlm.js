document.addEventListener("DOMContentLoaded", async () => {
  const user = await getUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Fehler beim Laden des Profils:", error.message);
    return;
  }

  // Update Status-Anzeige im Dashboard
  if (document.getElementById("box-status"))
    document.getElementById("box-status").innerText = data.box ? "✅ gekauft" : "❌ nicht gekauft";

  if (document.getElementById("pro-status"))
    document.getElementById("pro-status").innerText = data.pro ? "✅ aktiv" : "❌ nicht aktiv";

  if (document.getElementById("level"))
    document.getElementById("level").innerText = data.level || 1;

  if (document.getElementById("provision"))
    document.getElementById("provision").innerText = `CHF ${data.provision || 0}.–`;

  if (document.getElementById("ref-link"))
    document.getElementById("ref-link").value =
      `${window.location.origin}/login.html?ref=${user.id}`;

  if (document.getElementById("downline")) {
    const downline = await supabase
      .from("profiles")
      .select("email")
      .eq("ref", user.id);

    const list = downline.data.map((u) => `<li>${u.email}</li>`).join("");
    document.getElementById("downline").innerHTML = `<ul>${list}</ul>`;
  }
});
