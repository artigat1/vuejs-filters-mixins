<template>
    <div>
        <input v-model="filterText"/>
        <ul>
            <li :key="fruit" v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';
    
    export default {
        name: 'List',

        mixins: [fruitMixin]
    }
</script>

<style>

</style>
