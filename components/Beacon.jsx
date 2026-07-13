"use client";

// components/Beacon.jsx
//
// Lichtgewicht, privacyvriendelijke bezoeker-ping naar de Stek-Plus-teller.
// Registreert alleen sitenaam + pad + tijdstip; geen cookies, geen IP, geen
// persoonsgegevens. RLS bij Supabase staat uitsluitend inschrijven toe.

import { useEffect } from "react";

const TELLER_URL = "https://sjzznqnvlememucdmhxx.supabase.co/rest/v1/site_bezoeken";
const TELLER_KEY = "sb_publishable_PPl4KbkJzrlNkg8TqVOVuQ_Iwy2ZXd9";
let gestuurd = false;

export function Beacon() {
  useEffect(() => {
    if (gestuurd) return;
    gestuurd = true;
    try {
      fetch(TELLER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: TELLER_KEY,
          Authorization: "Bearer " + TELLER_KEY,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ site: "tekenbureau", pad: location.pathname }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* stil negeren */
    }
  }, []);
  return null;
}
