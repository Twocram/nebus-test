<template>
  <div class="layout">
    <header class="header">
      <nav class="navbar">
        <h1 class="title"><NuxtLink to="/">Nuxt Notes App</NuxtLink></h1>
      </nav>
    </header>

    <main class="main">
      <NuxtPage />
    </main>

    <footer class="footer">
      <p>© 2024 Nuxt Notes App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.title {
  font-size: 1.5rem;
}

.title a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.main {
  flex: 1;
  padding: 1rem;
  background-color: #f9f9f9;
}

.footer {
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1rem;
  }

  .footer {
    font-size: 0.8rem;
  }
}
</style>
