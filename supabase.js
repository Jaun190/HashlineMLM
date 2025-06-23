// Supabase Setup
const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
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
