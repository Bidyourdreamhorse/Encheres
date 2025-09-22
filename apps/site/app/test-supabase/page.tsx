'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function TestSupabase() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => { (async () => {
    try {
      // Remplace 'listings' par une table existante si besoin
      const { data, error } = await supabase.from('listings').select('*').limit(1);
      if (error) throw error;
      setStatus('Connection OK - ' + String((data && data.length) || 0) + ' row(s)');
    } catch (e: any) {
      setStatus('Error: ' + (e && e.message ? e.message : String(e)));
    }
  })(); }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Test Supabase</h1>
      <p>{status}</p>
    </main>
  );
}
