<template>
    <div>
        <h4>Options</h4>
        <div v-for="(option, index) in options" :key="`${index}`">
            <div class="mt-4">
                <input type="text" placeholder="Option title" class="form-control" v-model="option.title" />
            </div>

            <div class="mt-2">
                <input  type="radio" name="correctOption" :value="option.title" :id="`option${index}`" @change="markCorrect(option.title)" /> <label :for="`option${index}`">Mark as correct</label>
            </div>
        </div>

        <div class="text-end mt-4">
            <button class="btn btn-primary" @click="addOption">Add Option</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Options",

    data(){
        return {
            options: this.$store.getters['questions/options']
        }
    },
    methods: {
        markCorrect(option){
            this.$store.commit('questions/setCorrectOption', option);
        }, 

        addOption(){
            this.options.push({title: ''});
        }
    },
    watch: {
        options: {
            handler(newValue, oldValue) {
                this.$store.commit('questions/setOptions', this.options);
            },
            deep: true
        }
    }, 
}
</script>