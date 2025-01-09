import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hkoqablxnyxnmzdglqli.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhrb3FhYmx4bnl4bm16ZGdscWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMjA1NDYsImV4cCI6MjA1MTc5NjU0Nn0.bALpnPrqGB_sg_ujlxLJ4TWUV4K-4-qfyeTPuzYFnjM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
