import { supabase } from "../../db/supabase";

async function get() {
  const { data, error } = await supabase.from("books").select("title");

  if (error) {
    console.error(error.message);
  }
  return data;
}

export { get as getBooks };
