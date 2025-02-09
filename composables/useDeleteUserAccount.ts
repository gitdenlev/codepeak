export const useDeleteUserAccount = async (username: string, email: string) => {
  try {
    const deleteUser = await $fetch("/api/deleteUser", {
      method: "DELETE",
      body: { username, email },
    });
    return deleteUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
