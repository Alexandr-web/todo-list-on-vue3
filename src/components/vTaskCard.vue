<template>
  <li class="row valign-wrapper card-panel red lighten-5">
    <div class="col valign-wrapper s8">
      <div v-bind:class="`truncate ${task.status ? 'done-task' : ''}`">{{ task.title }}</div>
    </div>
    <div class="col valign-wrapper s2">
      <label class="valign-wrapper">
        <input type="checkbox" v-on:click="doneTask" />
        <span></span>
      </label>
      <button class="btn waves-effect waves-light pink accent-3" v-on:click="removeTask" v-if="task.status">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  emits: ['onRemove', 'onDone'],
  props: {
    task: {
      type: Object
    }
  },
  setup(props, context) {
    const removeTask = () => {
      context.emit('onRemove', props.task.id);
    }

    const doneTask = () => {
      context.emit('onDone', props.task.id);
    }

    return {
      doneTask,
      removeTask
    }
  }
}
</script>