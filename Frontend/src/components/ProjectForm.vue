<template>
  <form @submit.prevent="submitForm">
    <label for="titulo">Título</label>
    <input v-model="project.titulo" type="text" required />

    <label for="descripcion">Descripción</label>
    <textarea v-model="project.descripcion"></textarea>

    <label for="completada">Completada</label>
    <input v-model="project.completada" type="checkbox" />

    <label for="fecha_vencimiento">Fecha de Vencimiento</label>
    <input v-model="project.fecha_vencimiento" type="date" />

    <label for="prioridad">Prioridad</label>
    <select v-model="project.prioridad">
      <option value="baja">Baja</option>
      <option value="media" selected>Media</option>
      <option value="alta">Alta</option>
    </select>

    <label for="asignado_a">Asignado a</label>
    <input v-model="project.asignado_a" type="text" />

    <label for="categoria">Categoría</label>
    <input v-model="project.categoria" type="text" />

    <label for="costo_proyecto">Costo del Proyecto</label>
    <input v-model="project.costo_proyecto" type="number" required />

    <button type="submit">Guardar Proyecto</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      project: {
        titulo: "",
        descripcion: "",
        completada: false,
        fecha_vencimiento: "",
        prioridad: "media",
        asignado_a: "",
        categoria: "",
        costo_proyecto: 0,
      },
    };
  },
  methods: {
    async submitForm() {
      // Aquí harías una llamada al backend para guardar el proyecto
      try {
        const response = await fetch('http://localhost:3000/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.project),
        });
        const data = await response.json();
        console.log("Proyecto guardado:", data);
      } catch (error) {
        console.error("Error al guardar el proyecto:", error);
      }
    },
  },
};
</script>
