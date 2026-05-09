import { supabase } from "../../db/supabase";

const PAGE_LIMIT = 20;

async function getTotalCounts() {
  const { count, error } = await supabase
    .from("books")
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.error(error.message);
  }

  const pageCount = Math.ceil(count / PAGE_LIMIT);
  return {count, pageCount};
}

async function get(page = 1) {
  const from = (page - 1) * PAGE_LIMIT;
  const to = from + PAGE_LIMIT - 1;
  const { data, error } = await supabase
    .from("books")
    .select("title")
    .range(from, to);

  if (error) {
    console.error(error.message);
  }

  const {count, pageCount} = await getTotalCounts();
  return {data, count, pageCount};
}

export { get as getBooks, getTotalCounts as getBooksCount };
