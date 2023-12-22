<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<style scoped>
button.custom-button {
  font-size: 1rem;
  font-weight: 700;
  background-color: #FF5722;
  padding: 14px 32px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

button.custom-button:hover {
  color: #fff;
  background-color: #4CAF50;
}
</style>