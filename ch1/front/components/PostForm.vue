<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          outlned
          auto-grow
          clearable
          label="뭐임마"
          :hide-details="hideDetails"
          :success-messages="successMessages"
          :success="success"
          :rules="(v) => !!v.trim() || '내용을 입력하세요.'"
          @input="onChangeTextarea"
        />
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      hideDetails: false,
      successMessages: "",
      success: false,
    };
  },
  methods: {
    onChangeTextarea() {},
    onSubmitForm() {
      if (this.$refs.form.validate()) {
      }
    },
  },
};
</script>

<style></style>
