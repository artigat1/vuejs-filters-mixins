export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: '',
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(el => el.toLowerCase().match(this.filterText));
        }
    },
    created() {
        console.log('created fruit mixin');
    }
};
