<template>
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Edit task
        </v-card-title>
        <v-card-text>
          Update the title of this task below:
          <v-text-field 
            v-model="taskTitle" 
            @keyup.enter="saveTask"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="$emit('close')"
            color="grey"
            text
          >
            Cancel
          </v-btn>
          <v-btn
            @click="saveTask"
            color="teal darken-1"
            text
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['task'],
    data() {
      return {
        taskTitle: null
      }
    },
    methods: {
      saveTask() {
        let payload = {
          id: this.task.id,
          title: this.taskTitle
        }
        this.$store.commit('updateTaskTitle', payload)
        this.$emit('close')
      }
    },   
    mounted() {
      this.taskTitle = this.task.title
    }
}
</script>