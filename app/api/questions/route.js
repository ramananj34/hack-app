import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export async function GET() {
    
    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}
export async function POST() {
    
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