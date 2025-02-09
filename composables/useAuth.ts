interface Credentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  username: string;
}

export const useAuth = () => {
  const token = useCookie("token");
  const user = useState<User | null>("user", () => {
    // Відновлюємо стан користувача з кукі
    const userCookie = useCookie("user");
    try {
      const parsedUser = userCookie.value ? JSON.parse(userCookie.value) : null;
      console.log("User restored from cookie:", parsedUser); // Логування відновленого користувача
      return parsedUser;
    } catch (error) {
      console.error("Failed to parse user cookie:", error);
      return null;
    }
  });

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await $fetch<{ token: string; user: User }>(
        "/api/login",
        {
          method: "POST",
          body: credentials,
        }
      );

      if (response.token) {
        token.value = response.token;
        user.value = response.user;

        // Зберігаємо дані користувача в кукі
        const userCookie = useCookie("user", {
          maxAge: 60 * 60 * 24 * 7, // 1 тиждень
          path: "/", // Діє для всіх шляхів
          secure: process.env.NODE_ENV === "production", // Використовується HTTPS у продакшені
        });
        userCookie.value = JSON.stringify(response.user); // Перетворюємо об'єкт у рядок

        console.log("User saved to cookie:", userCookie.value); // Логування кукі

        await navigateTo("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    token.value = null;
    user.value = null;

    // Видаляємо кукі користувача
    const userCookie = useCookie("user");
    userCookie.value = null;

    await navigateTo("/login");
  };

  return {
    token,
    user,
    email: computed(() => (user.value ? user.value?.email : null)),
    login,
    logout,
  };
};
