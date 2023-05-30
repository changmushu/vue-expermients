import { defineStore } from 'pinia'
import { listFoodOne } from "../date/index";

export const useFoodsStore = defineStore('foods', {
    state: () => ({
        count: Array(listFoodOne().length).fill(0),
        foods: listFoodOne(),
        selected: [],
    }),
    getters: {
        totalPrice(state) {
            let total = 0;
            for (let i = 0; i < state.foods.length; i++) {
                total += state.count[i] * state.foods[i].price;
            }
            return total.toFixed(1);
        },
    },
    actions: {
        increment(index: number) {
            this.count[index]++;
        },
        decrement(index: number) {
            if (this.count[index] > 0) {
                this.count[index]--;
            }
        },
    }
})
