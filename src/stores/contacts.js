import { defineStore } from "pinia";
import { useProfileStore } from "@/stores/profile.js";

export const useContactsStore = defineStore("contactsStore", {
  state: () => ({
    contacts: [
      { id: 2, name: "Jason", avatar: "/avatars/avatar-02.jpg" },
      { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
    ],
  }),
  getters: {
    getContactById: (state) => (contactId) => {
      const profileStore = useProfileStore();
      if (contactId === profileStore.id) {
        return {
          id: profileStore.id,
          name: profileStore.username,
          avatar: profileStore.avatar,
        };
      }
      return state.contacts.find((contact) => contact.id === contactId);
    },
  },
});
