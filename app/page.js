import StudentInfo from "./StudentInfo";
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <StudentInfo />
            <br/>
            <Link href="week2">Week 2</Link><br/>
            <Link href="week3">Week 3</Link><br/>
            <Link href="week4">Week 4</Link><br/>
            <Link href="week5">Week 5</Link><br/>
            <Link href="week6">Week 6</Link><br/>
        </>
    );
}