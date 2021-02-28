<template>
  <div>
    <v-container>
      <v-card>
        <v-subheader> 회원가입 </v-subheader>
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-text-field
            v-model="email"
            label="이메일"
            type="email"
            :rules="emailRules"
            required
          />

          <v-text-field
            v-model="password"
            label="비밀번호"
            :type="show1 ? 'text' : 'password'"
            :rules="passwordRules"
            required
            :append-icon="show1 ? `mdi-eye` : `mdi-eye-off`"
            @click:append="show1 = !show1"
          />
          <v-text-field
            v-model="passwordCheck"
            label="비밀번호 확인"
            :type="show2 ? 'text' : 'password'"
            :rules="passwordCheckRules"
            :append-icon="show2 ? `mdi-eye` : `mdi-eye-off`"
            required
            @click:append="show2 = !show2"
          />
          <v-text-field
            v-model="nickname"
            label="닉네임"
            type="nickname"
            :rules="nicknameRules"
            required
          />
          <v-checkbox
            v-model="terms"
            required
            :rules="[(v) => !!v || '약관에 동의해야 합니다']"
            label="하하하"
          />
          <v-btn color="green" type="submit">가입하기</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      valid: false,
      email: "",
      password: "",
      passwordCheck: "",
      nickname: "",
      terms: false,
      emailRules: [
        (v) => !!v || "이메일은 필수입니다",
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다",
      ],
      nicknameRules: [(v) => !!v || "닉네임은 필수입니다"],
      passwordRules: [(v) => !!v || "비밀번호는 필수입니다"],
      passwordCheckRules: [
        (v) => !!v || "비밀번호 확인은 필수입니다",
        (v) => v === this.password || "비밀번호가 일치하지 않습니다",
      ],
    };
  },
  head() {
    return {
      title: "회원가입",
    };
  },
  methods: {
    async onSubmitForm() {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch("users/signUp", {
          nickname: this.nickname,
          email: this.email,
        })
        .then(() => {
          this.$router.push({
            path: '/',
          });
        })
        .chatch(() => {
          alert('회원가입 실패');
        });
      }
    }
  }
}

</script>

<style></style>