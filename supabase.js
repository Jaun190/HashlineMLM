// Supabase Setup
const SUPABASE_URL = https://lywfrkohpskmmwcufcft.supabase.co;
const SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5d2Zya29ocHNrbW13Y3VmY2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODc5NTIsImV4cCI6MjA2NjI2Mzk1Mn0.5ZThSLzM5KUVyBcKr1WFW_VO3I5Kvit_ntqPor8z0PI;
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Login
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Login fehlgeschlagen: " + error.message);
  } else {
    window.location.href = "dashboard.html";
  }
}

// Registrierung
async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("Registrierung fehlgeschlagen: " + error.message);
  } else {
    alert("Registrierung erfolgreich. Du kannst dich nun einloggen.");
  }
}

// Logout
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}

// Nutzer-Info abrufen
async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
