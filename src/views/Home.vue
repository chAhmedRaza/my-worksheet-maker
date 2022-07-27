<template>
  <div class="home py-5">
      <div class="container my-5 text-start mb-5">
        <div class="row">
          <div class="col-5">
            <div class="widget">
              <h2>Add Question</h2>
              <QuestionTextarea />
              <Options />
            </div>
          </div>

          <div class="col-7 text-center">

            <div class="preview">
              <h2 class="mb-5">Preview</h2>

              <h5 class="my-5">{{ question.title }}</h5>
              <div v-for="option in question.options" :key="option.title">
                <div v-if="option.title" class="option text-start" :class="correctOption == option.title ? 'correct' : ''">
                  {{ option.title }}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import QuestionTextarea from '../components/QuestionTextarea.vue'
import Options from '../components/Options.vue';
export default {
  name: 'Home',
  components: {
    QuestionTextarea,
    Options, 
  },
  computed: {
    question() {
      return {
        title: this.$store.getters['questions/question'], 
        options:  this.$store.getters['questions/options'],
      }
    }, 
    correctOption(){
      return this.$store.getters['questions/correctOption']
    }
  },
  methods: {
    updateQuestion(question){
      this.question.title = question;
    },

    updateOptions(options){
      this.question.options = options;
    },

    setCorrectOption(option) {
      this.correctOption = option;
    }
  }
}
</script>


<style>
.home{
  min-height: 100vh;
   background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(152,148,233,1) 57%); 
}

.widget{
  background: white;
  width: 85%;
  margin: 0 auto;
  border-radius: 15px;
  padding: 25px;
}

.preview{
  width: 75%;
  margin: 0 auto;
  
  color: white;
}

.option {
  border: 1px solid white;
  border-radius: 15px;
  margin-top: 10px;
  padding: 10px 20px 10px 20px;
}

.option.correct {
  background: white;
  color: black;
}
</style>