import React from 'react'
import dayjs from 'dayjs'
import { getRandomInterviewCover } from '@/src/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({interviewId, techstack, userId, role, type , createdAt} : InterviewCardProps) => {
  
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY"); 


    return (
    <div className="card-border w-[400px] max-sm:w-full min-h-96">
        
    <div className="card-interview">
        <div>
            <div className="badge-text absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
                {normalizedType}
            </div>
            <Image src={getRandomInterviewCover()} alt="cover imgage" width={90} height={90} 
                className="rounded-full object-fit size-[90px]"
                />
            <h3 className="mt-5 capitalize">
                {role} interview
            </h3>
            <div className="flex flex-row gap-5 mt-3"> 
                <div className="flex flex-row gap-2">
                    <Image src="/calendar.svg" alt="calendar" width={20} height={20} />
                    <p>{formattedDate}</p>
                </div>
                <div className="flex flex-row gap-2 item-center">
                    <Image src="/star.svg" alt="star" width={20} height={20} />
                    <p>{feedback?.totalScore || '---'} / 100</p>
                </div>
            </div>
                <p className="line-clamp-2 mt-5">
                    {feedback?.finalAssessment || "You haven't taken the interview yet"}
                </p>
            <div className="flex flex-row justify-between">
                    <DisplayTechIcons techStack={techstack} />
                    <Button className="btn-primary" >
                        <Link href={
                        feedback ? 
                        `/interview/${interviewId}/feedback`
                        : `/interview/${interviewId}` } >
                        {feedback ? 'Check Feedback' : 'Start Interview'}
                        </Link>
                    </Button>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default InterviewCard
