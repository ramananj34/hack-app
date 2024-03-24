import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { randomInt } from 'crypto';

export async function GET() {
    const reqparameters = await req.json();
    const reqJSON = JSON.stringify(reqparameters);
    const reqobject = JSON.parse(reqJSON);
    console.log("jdsoajdiosa");
    let questionQueried = await prisma.Questions.findFirst({
        where:{
            id:reqobject.id
        }
    });
    let emailPool = [];
    queryQuestion.AnswerChoices.forEach(element => {
        element[1].forEach(email => {
            emailPool.push(email);
        })
        if(element[0] == reqobject.selectedOption){

            const selectedEmail = element[1].array[randomInt]
            console.log(selectedEmail);
            
        }
    });
    let numberEmails = emailPool.lenght();
    let randomInt = getRandomInt(numberEmails);
    let selectedEmail = emailPool[randomInt];
    console.log(selectedEmail);
    
    return Response.json(selectedEmail);

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export async function POST(req) {
}
export async function PUT(req) {


}
export async function DELETE(req) {
    

}