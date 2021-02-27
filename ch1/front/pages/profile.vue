<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader> 내 프로필 </v-subheader>
        </v-container>
        <v-form>
          <v-text-field label="닉네임" required="required" />
          <v-btn color="bule" type="submit" />
        </v-form>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <follow-list />
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import FollowList from "~/components/FollowList";
export default {
  components: {
    FollowList,
  },
  layout: "admin",
  data() {
    return { name: "Nuxt.js" };
  },
  head() {
    return { title: "프로필" };
  },
};
</script>
<style></style>
