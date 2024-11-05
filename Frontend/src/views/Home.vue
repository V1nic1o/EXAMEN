<template>
  <div>
    <h1>Lista de Proyectos</h1>
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from '../components/ProjectList.vue';

export default {
  components: {
    ProjectList,
  },
};
</script>
