import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from "@/components/InterviewCard"

const HomePage = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get AI Interview Ready with AI powered practice and Feed Back</h2>
          <p className='text-lg'> Practice in real interview questions and get instant feed back </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start and Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
            <h2>Your interviews</h2>
            <div className="interviews-section">
               {dummyInterviews.map((interview) => (
                <InterviewCard key={interview.id} {...interview} />
               ))}
            </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
            <p>There aer no interviews available</p>
        </div>
      </section>
    </>
  )
}

export default HomePage