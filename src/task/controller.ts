import {
  CollectionReference,
  QuerySnapshot,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "..";

export async function getTaskAll(): Promise<Array<any>> {
  const taskCollection: CollectionReference = collection(db, "tasklists");
  const taskSnapShots: QuerySnapshot = await getDocs(taskCollection);
  const taskList: Array<any> = taskSnapShots.docs.map((doc) => doc.data());
  return taskList;
}

export async function getTaskById(id: number): Promise<any> {
  const taskCollection: CollectionReference = collection(db, "tasklists");
  const taskSnapShots: QuerySnapshot = await getDocs(taskCollection);
  const taskList: Array<any> = taskSnapShots.docs.map((doc) => doc.data());
  return taskList.find((task) => task.id === id);
}

export async function createTask(task: object): Promise<string> {
  const taskCollection: CollectionReference = collection(db, "tasklists");
  await addDoc(taskCollection, task);
  return "Task created";
}
