const SUPABASE_URL = 'https://ksuhimmdesmupvnwrdcv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdWhpbW1kZXNtdXB2bndyZGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4MjIyMTcsImV4cCI6MTk4MDM5ODIxN30.l9evwmyffM7wrkVbPoKBFccE80hWGVPY6ndNgetLNws';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createEntry(entry) {
    return await client.from('entries').insert(entry);
}
