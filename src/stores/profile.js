import { defineStore } from "pinia";

export const useProfileStore = defineStore("profileStore", {
  state: () => ({
    id: 1,
    username: "",
    avatar: "/avatars/avatar.jpg",
    status: null,
  }),
});
