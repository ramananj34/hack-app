import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export async function GET() {

    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}
export async function POST(req) {

    console.log(await req.json());
    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}
export async function PUT() {
    
    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}
export async function DELETE() {
    
    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}