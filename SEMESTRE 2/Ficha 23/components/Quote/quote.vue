<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div{
    background-color: white;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
    padding: 3rem;
    width: 420px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.25rem;
}
</style>