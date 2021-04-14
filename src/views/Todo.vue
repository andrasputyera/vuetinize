<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-pencil-plus-outline"
      hide-details
      clearable
    ></v-text-field>
    
    <v-list
      class="pt-0"
      flat
    >
      <div
        v-for="task in tasks" 
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Todo',
  data() {
    return {
      newTaskTitle: '',
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          done: false
        },
        {
          id: 2,
          title: 'Task 2',
          done: false
        },
        {
          id: 3,
          title: 'Task 3',
          done: false
        }
      ]
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
