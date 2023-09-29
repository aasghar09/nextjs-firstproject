import { httpAxios } from "@/helper/httpHelper";


export async function addTask(task){
    const addedTasks = await httpAxios.post("/api/tasks",task).then((response) => response.data);
    return addTask;
}