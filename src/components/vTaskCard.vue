<template>
  <li class="row valign-wrapper card-panel">
    <div class="col valign-wrapper s8">
      <div v-bind:class="`truncate ${task.status ? 'done-task' : ''}`">{{ task.title }}</div>
    </div>
    <div class="col valign-wrapper s2">
      <label class="valign-wrapper" v-bind:for="`task-${task.id}`">
        <input type="checkbox" v-bind:id="`task-${task.id}`" v-on:click="doneTask" v-bind:checked="task.status" />
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
    const removeTask = () => context.emit('onRemove', props.task.id);
    const doneTask = () => context.emit('onDone', props.task.id);

    return {
      doneTask,
      removeTask
    }
  }
}
</script>