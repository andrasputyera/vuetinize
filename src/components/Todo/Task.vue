<template>
    <div>
        <v-list-item
          @click="$store.commit('doneTask', task.id)" 
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

            <!-- Displaying due date next to each task -->
            <v-list-item-action v-if="task.dueDate">
                <v-list-item-action-text>
                  <v-icon small>mdi-calendar-alert</v-icon>
                  {{ task.dueDate | properDate }}
                </v-list-item-action-text>
            </v-list-item-action>

            <v-list-item-action>
              <!-- The stop method is used to prevent triggering parent element -->
              <!-- <v-btn 
              @click.stop="dialogs.delete = true"
              icon
              >
                <v-icon color="teal lighten-3">mdi-delete-empty-outline</v-icon>
              </v-btn> -->
              <task-menu :task="task" />
            </v-list-item-action> 
          </template>
        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
import { format } from 'date-fns'

export default {
    props: ['task'],
    filters: {
      properDate(value) {
        return format(new Date(value), 'MMM d')
      }
    },
    components: {
      'task-menu' : require('@/components/Todo/TaskMenu.vue').default
    }
}
</script>