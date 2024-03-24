import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export async function GET() {

    // getting
    const result = await prisma.Authentication.findMany();
    return Response.json(result);

}

function transform(ogArray) {
    return ogArray.map(element => [element,[]]);
}

export async function POST(req) {
    const reqparameters = await req.json();
    const reqJSON = JSON.stringify(reqparameters);
    const reqobject = JSON.parse(reqJSON);
    console.log("jdsoajdiosa");
    let createdQuestion = await prisma.Questions.create({
        data: {
            QuestionName: reqobject.question,
            AnswerChoices: transform(reqobject.options)
        }
    });
    return Response.json(createdQuestion);
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