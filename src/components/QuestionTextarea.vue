<template>
    <div class="py-3">
        <label for="question" class="font-weight-bold">Question</label>
        <textarea v-model="title" @keyup="questionUpdated" id="question" class="form-control" placeholder="Enter question here." rows="5"></textarea>
    </div>
</template>

<script>
export default {
    name: "QuestionTextarea",
    data(){
        return {
            title: this.$store.getters['questions/question'],
        }
    }, 
    methods: {
        questionUpdated() {
            this.$store.commit('questions/setQuestion', this.title);
        }
    },
}
</script>