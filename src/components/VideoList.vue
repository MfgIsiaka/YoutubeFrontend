<template>
  <AppbarComponent/> 
  <div v-if="videos.length>0" class="videos-wraper">
    <div class="video-item" v-for="video in videos" :key="video.id">
      <div class="thumbnail-wrapper">
        <img src="https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <div class="video-info">
        <p class="video-title">Exclusive interview with president Samia</p>
        <div class="channel-info">
          <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&w=600" alt="Channel Profile" class="channel-profile" />
          <span class="channel-name">
            <p>Kurz gasegt</p>
            <p>20 minutex ago</p>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loader"></div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import AppbarComponent from "./AppbarComponent.vue";

const videos = ref([]);
const getVideos = () => {
  setTimeout(() => {
    for (let i = 0; i < 50; i++) {
      videos.value.push({ id: i });
    }
  }, 3000);
};

onMounted(() => {
  getVideos();
});
</script>

<style>
.videos-wraper {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 0 auto;
}
.video-item {
  margin: 10px;
  width: 300px;
  border: 1px solid #ccc;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
}

.video-item .thumbnail-wrapper{
  width: 300px;
  background-color: grey;
  height: 200px;
}

.video-item .thumbnail-wrapper img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-info{
  padding: 2px;
}

.video-info *{
  padding: 0px;
  margin: 0px;
}

.video-title {
  display: -webkit-box;         /* Use flexbox model */
    -webkit-box-orient: vertical; /* Orient the box vertically */
    -webkit-line-clamp: 1;        /* Limit to 3 lines */
    overflow: hidden;             /* Hide overflow */
    text-overflow: ellipsis;      /* Show ellipsis */
    line-height: 1.5;             /* Adjust line height as needed */
    max-height: 4.5em;  
  font-weight: bold;
}

.channel-info {
  display: flex;
  align-items: center;
}

.channel-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.channel-name {
  font-size: 14px;
  color: #555;
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff; /* Change to desired color */
  border-radius: 50%;
  width: 30px; /* Size of the loader */
  height: 30px; /* Size of the loader */
  animation: spin 1s linear infinite;
  margin: auto; /* Center the loader */
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
