<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <div class="search-box">
      <input type="text" v-model="search" placeholder="Search video"><i class="fa fa-search"></i>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

  const search=ref("");

</script>

<style scoped>
nav {
  background-color: rgba(197, 194, 194, 0.384);
  padding: 10px;
}

nav .search-box i{
  cursor: pointer;
  padding: 10px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px rgb(185, 185, 185) solid;
}

nav input{
  width: 50%;
  border-radius: 50px;
}

nav input:focus {
  border-color: rgb(114, 114, 114);
}

</style>
