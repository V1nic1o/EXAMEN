<template>
  <div>
    <ProjectDetail :projectId="projectId" />
  </div>
</template>

<script>
import ProjectDetail from '../components/ProjectDetail.vue';

export default {
  components: {
    ProjectDetail,
  },
  props: {
    projectId: {
      type: String,
      required: true,
    },
  },
};
</script>
