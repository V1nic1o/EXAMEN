<template>
  <div>
    <h2>Proyectos</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.titulo }} - {{ project.prioridad }}
        <router-link :to="`/project/${project.id}`">Ver Detalles</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/projects');
      this.projects = await response.json();
    } catch (error) {
      console.error("Error al cargar proyectos:", error);
    }
  },
};
</script>
