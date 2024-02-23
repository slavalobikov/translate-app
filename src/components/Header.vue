<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "My Website"
    };
  }
};
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 15px;
}

nav a {
  text-decoration: none;
  color: #fff;
}
</style>
