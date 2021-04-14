<template>
  <div class="home">
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
                :class="{ 'text-decoration-line-through' : task.done }""
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
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
    doneTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    }
  }
}
</script>
