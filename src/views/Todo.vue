<template>
  <div class="home">
    
    <field-add-task />
    
    <list-tasks v-if="$store.state.tasks.length" />

    <div 
      v-else
      class="no-tasks"
    >
      <v-icon
        size="100"
        color="teal"
      >
        mdi-sticker-check-outline
      </v-icon>
      <div class="text-h5 teal--text">No tasks...</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  components: { 
    'field-add-task' : require('@/components/Todo/FieldAddTask.vue').default,
    'list-tasks' : require('@/components/Todo/ListTasks.vue').default
  }
}
</script>

<style lang="sass">
  .no-tasks 
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5



</style> 