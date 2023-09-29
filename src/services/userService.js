import { httpAxios } from "@/helper/httpHelper";


export async function addUser(user) {

   const addedUser = await httpAxios.post("/api/users",user).then((response) => response.data);
   return addedUser;
}

export async function doLogin(loginBean) {

   const loggedInUser = await httpAxios.post("/api/login",loginBean).then((response) => response.data);
   return loggedInUser;
}

export async function currentUser() {

   const loggedInUser = await httpAxios.get("/api/current").then((response) => response.data);
   return loggedInUser;
}

export async function doLogout() {

   const result = await httpAxios.post("/api/logout").then((response) => response.data);
   return result;
}

export async function getUserTasks(userId) {

   console.log("starting getUserTasks in service "+userId);
   const userTasks = await httpAxios.get(`/api/users/${userId}/tasks`).then((response) => response.data);
   console.log("returning userTasks in service "+userTasks);
   return userTasks;
}

export async function deleteTaskService(taskId) {

   console.log("starting deleteTask in service "+taskId);
   const result = await httpAxios.delete(`/api/tasks/${taskId}`).then((response) => response.data);
   console.log("returning userTasks in service "+result);
   return result;
}