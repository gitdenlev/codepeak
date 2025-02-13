// import jwt from "jsonwebtoken";
// import User from "../server/models/User.model";

// export default defineNuxtRouteMiddleware((to) => {
//   const token = useCookie("token");
//   const { path } = to;

//   // Публічні роути, які не потребують авторизації
//   const publicRoutes = ["/login", "/register"];

//   // Якщо користувач намагається зайти на публічний роут і не має токена
//   if (publicRoutes.includes(path) && !token.value) {
//     return; // Дозволяємо доступ
//   }

//   // Якщо користувач авторизований і намагається зайти на публічний роут
//   if (token.value && publicRoutes.includes(path)) {
//     return navigateTo("/");
//   }

//   // Якщо користувач не авторизований і намагається зайти на захищений роут
//   if (!token.value && !publicRoutes.includes(path)) {
//     return navigateTo("/login");
//   }
// });
