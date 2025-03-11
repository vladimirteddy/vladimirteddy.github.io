<template>
  <div v-if="activity" class="activity-detail-page">
    <h1>{{ activity.title }}</h1>
    <p>{{ activity.fullContent }}</p>
    <div class="image-gallery">
      <img
        v-for="(image, index) in activity.images"
        :key="index"
        :src="image"
        alt="Activity Image"
        class="detail-image"
      />
    </div>
    <button @click="$router.back()" class="back-button">Quay lại</button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "ActivityDetail",
  data() {
    return {
      activity: null,
    };
  },
  created() {
    const activityId = this.$route.params.id;
    fetch("/activities.json")
      .then((response) => response.json())
      .then((data) => {
        this.activity = data.find(
          (activity) => activity.id === parseInt(activityId)
        );
      })
      .catch((error) => {
        console.error("Error fetching activity data:", error);
      });
  },
};
</script>

<style scoped>
.activity-detail-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.detail-image {
  width: 600px;
  height: auto;
  border-radius: 5px;
}

.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
