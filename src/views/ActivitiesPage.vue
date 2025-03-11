<template>
  <div class="activities-page">
    <h1>Các Hoạt Động</h1>
    <ul class="activities-list">
      <li v-for="post in posts" :key="post.id" class="activity-item">
        <img :src="post.thumbnail" alt="Thumbnail" class="thumbnail" />
        <div class="activity-content">
          <h3 @click="goToDetail(post.id)" class="activity-title">
            {{ post.title }}
          </h3>
          <p class="activity-short-content">{{ post.shortContent }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActivitiesPage",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      fetch("/activities.json")
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
        });
    },
    goToDetail(id) {
      this.$router.push({ name: "ActivityDetail", params: { id } });
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.activities-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.activities-list {
  list-style: none;
  padding: 0;
}

.activity-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.thumbnail {
  width: 300px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
}

.activity-content {
  flex: 1;
}

.activity-title {
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
  margin: 0;
}

.activity-title:hover {
  color: #0056b3;
}

.activity-short-content {
  margin: 5px 0;
  color: #555;
}
</style>
