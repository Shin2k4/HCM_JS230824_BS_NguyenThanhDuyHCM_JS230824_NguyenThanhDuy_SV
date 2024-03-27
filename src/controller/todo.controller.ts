import { todomodel } from "../model/todo.model";
import { Request, Response,  } from "express";
export const todocontroller = {
    create: async (request: Request, response: Response) => {
        try {
            let data = request.body;
            let newTodo = await todomodel.create(data);
            response.status(200).json(newTodo)
        } catch (error) {
            error
        }

    },
    getall: async (request: Request, response: Response) => {
        try {
            let todos = await todomodel.getall();
            response.status(200).json(todos)
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (request: Request, response: Response) => {
        try {
            let todos = await todomodel.delete(Number(request.params.id));
            response.status(200).json(todos)
        } catch (error) {
            console.log(error);
        }
    },
    update: async (request: Request, response: Response) => {
        try {
            let todo = await todomodel.update(Number(request.params.id), request.body);
            response.status(200).json(todo)
        } catch (error) {
            console.log(error);
        }
    }

}