<template>
  <ol>
    <li v-for="book in books">{{ book.title }}</li>
  </ol>
  <BookListPagination
    :pageCount="pageCount"
    :activePage="activePage"
  ></BookListPagination>
  <!-- <p>Total count: {count}</p> -->
</template>

<script setup>
import BookListPagination from "./BookListPagination.vue";
import { getBooks } from "../../data/books";

const props = defineProps({ activePage: Number });

const booksData = await getBooks(props.activePage);
const books = booksData.data || [];
const pageCount = booksData.pageCount || 0;
</script>
