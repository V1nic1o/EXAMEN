<template>
  <div>
    <h2>Detalles del Proyecto</h2>
    <p><strong>Título:</strong> {{ project.titulo }}</p>
    <p><strong>Descripción:</strong> {{ project.descripcion }}</p>
    <p><strong>Prioridad:</strong> {{ project.prioridad }}</p>
    <p><strong>Completada:</strong> {{ project.completada ? "Sí" : "No" }}</p>
    <p><strong>Costo:</strong> ${{ project.costo_proyecto }}</p>

    <button v-if="!project.pagado" @click="realizarPago">Pagar con Stripe/PayPal</button>
  </div>
</template>

<script>
export default {
  props: ['projectId'],
  data() {
    return {
      project: {},
    };
  },
  async created() {
    try {
      const response = await fetch(`http://localhost:3000/projects/${this.projectId}`);
      this.project = await response.json();
    } catch (error) {
      console.error("Error al cargar el proyecto:", error);
    }
  },
  methods: {
    realizarPago() {
      // Lógica para integrar Stripe o PayPal y actualizar el estado de pago
    },
  },
};
</script>
