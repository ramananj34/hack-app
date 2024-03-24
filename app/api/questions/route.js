import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export async function GET() {

    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}

function transform(ogArray) {
    return ogArray.map(element => [element,[]]);
}

export async function POST(req) {
    const reqparameters = await req.json();
    const reqJSON = JSON.stringify(reqparameters);
    const reqobject = JSON.parse(reqJSON);
    let createdQuestion = await prisma.Questions.create({
        data: {
            QuestionName: reqobject.question,
            AnswerChoices: transform(reqobject.options)
        }
    });
    return Response.json(createdQuestion);
}
export async function PUT(req) {
    const reqparameters = await req.json();
    const reqJSON = JSON.stringify(reqparameters);
    const reqobject = JSON.parse(reqJSON);
    console.log(reqobject);

    // let queryQuestion = await prisma.findMany({
    //     where:{
    //         id: reqobject,
    //     }
    // });
    // console.log(queryQuestion);

    // console.log("jdsoajdiosa");


    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}
export async function DELETE(req) {
    const reqparameters = await req.json();
    const reqJSON = JSON.stringify(reqparameters);
    const reqobject = JSON.parse(reqJSON);
    let deleted = await prisma.Questions.delete({
        where: {
            id: reqobject
        }
    });
    return new Response('',{
        status:200
    });

}