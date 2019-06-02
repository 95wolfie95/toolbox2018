<template>
    
    <div>
        <slot></slot>
    </div>

</template>

<style scoped>

div {
    background-color: rgb(238, 255, 251);
    box-shadow: 0 0 15px black;
    padding: 2rem;
    width: 400px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>