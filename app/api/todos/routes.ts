import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()


// A function to parse the request body
async function parseRequestBody(request: NextRequest) {
    const body = await request.json()
    return body;
}


// Get all Todo from sql database

export async function GET() {
    const todos = await prisma.todo.findMany()
    return NextResponse.json(todos)    
}


// Add Todo to database
export async function POST(request: NextRequest) {
    const { title } = await parseRequestBody(request);
    
    const newTodo = prisma.todo.create({
        data:{
         title: title,   
        }
    })
    return NextResponse.json(newTodo)
}