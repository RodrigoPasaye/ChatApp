import { useProfileStore } from "@/stores/profile";

const login = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "Diana",
      });
    }, 2500);
  });
};

export const main = async () => {
  const profileStore = useProfileStore();
  const user = await login();
  profileStore.username = user.username;
  profileStore.status = "active";
};
