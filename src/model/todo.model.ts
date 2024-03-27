import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const todomodel = {
    create: async (data:any) => {
        try {

            let newtodo = await prisma.todoList.create({
                data
            })
            return newtodo;
        } catch (error) {
            console.log(error);
        }
    },
    getall: async () => {
        try {
            let todos = await prisma.todoList.findMany();
            return todos;
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (id: number) => {
        try {
            let todos = await prisma.todoList.delete({
                where: {
                    id: id
                }
            });
            return todos;
        } catch (error) {
            console.log(error);
        }
    },
    update: async (id:number, data:string) => {
        try {
            let todo = await prisma.todoList.update({
                where: {
                    id: id
                },
                data
            })
            return todo;
        } catch (error) {
            console.log(error);
        }
    }
}