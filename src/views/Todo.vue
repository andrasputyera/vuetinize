<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      color="teal"
      label="Add Task"
      append-icon="mdi-pencil-plus-outline"
      hide-details
      clearable
    ></v-text-field>
    
    <v-list
      v-if="$store.state.tasks.length"
      class="pt-0"
      flat
    >
      <div
        v-for="task in $store.state.tasks" 
        :key="task.id"
      >
        <v-list-item
          @click="doneTask(task.id)" 
          :class="{ 'teal lighten-5' : task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <!-- Input value determines whether task was done (checks the checkbox)-->
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <!-- The stop method is used to prevent triggering parent element -->
              <v-btn 
              @click.stop="deleteTask(task.id)"
              icon
              >
                <v-icon color="teal lighten-3">mdi-delete-empty-outline</v-icon>
              </v-btn>
            </v-list-item-action> 
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
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
// @ is an alias to /src

export default {
  name: 'Todo',
  data() {
    return {
      newTaskTitle: '',
      
    }
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false
      }
      this.tasks.push(newTask)
      this.newTaskTitle = ''
    },
    doneTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
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