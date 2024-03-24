import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export async function GET() {

    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}

function transform(ogArray, emailtoadd) {
    
    return ogArray.map(element => [element,[]]);
}

export async function POST() {



    // let createdQuestion = await prisma.Questions.findAll({
    //     where: {
    //     id: req.query
    //     },
    //     data: {
    //         QuestionName: reqobject.question,
    //         AnswerChoices: transform(reqobject.options)
    //     }
    // });
    return Response.json(createdQuestion);
}
export async function PUT(req) {
    const reqparameters = await req.json();
    const reqJSON = JSON.stringify(reqparameters);
    const reqobject = JSON.parse(reqJSON);
    console.log(reqobject);

    // let queryQuestion = await prisma.findMany({
    //     where:{
    //         id: id,
    //     }
    // });
    // console.log(queryQuestion);

    console.log("jdsoajdiosa");


    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}
export async function DELETE() {
    
    // getting
    const result = await prisma.Questions.findMany();
    return Response.json(result);

}