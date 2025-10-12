import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!url) {
  throw new Error('PUBLIC_SUPABASE_URL manquant. Ajoute-le dans ton .env à la racine du projet.');
}
if (!anon) {
  throw new Error('PUBLIC_SUPABASE_ANON_KEY manquant. Ajoute-le dans ton .env à la racine du projet.');
}

export const supabase = createClient(url, anon);
