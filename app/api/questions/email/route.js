import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { randomInt } from 'crypto';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export async function POST(req) {
    console.log("aaaaa");
    const reqparameters = await req.json();
    console.log(reqparameters);
    let questionQueried = await prisma.Questions.findFirst({
        where:{
            id:reqparameters
        }
    });
    console.log(questionQueried);
    let emailPool = new Array();
    questionQueried.AnswerChoices.forEach(element => {
        element[1].forEach(email => {
            if(email !=""){emailPool.push(email)}
        })
    });
    let numberEmails = emailPool.length;
    let randomInt = getRandomInt(numberEmails);
    let selectedEmail = emailPool[randomInt];
    
    return Response.json(selectedEmail);
}
