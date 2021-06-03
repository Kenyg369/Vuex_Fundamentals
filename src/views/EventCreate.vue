<template>
<h1>Create an event</h1>

<div class="form-container">
  <from @submit.prevent="OnSubmit">
    <label>Select a category: </label>
    <select v-model="event.category">
      <option
        v-for ="option in categories"
        :value="option"
        :key="option"
        :selected="option" === event.category
      >{{ option }}</option>
    </select>
          
</template>