'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function TestSupabase() {
  const [status, setStatus] = useState('Connexion en cours…');

  useEffect(() => {
    (async () => {
      try {
        // Requête ultra simple : récupérer la liste des tables publiques
        const { data, error } = await supabase
          .from('listings')    // <-- mets ici une table qui existe déjà (ex: listings)
          .select('*')
          .limit(1);
        if (error) throw error;
        setStatus(`Connexion OK ✅ – ${data?.length ?? 0} ligne(s) trouvée(s)`);
      } catch (err:any) {
        setStatus(`Erreur ❌ : ${err.message}`);
      }
    })();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Test Supabase</h1>
      <p>{status}</p>
    </main>
  );
}
