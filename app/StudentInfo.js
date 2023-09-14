import Link from 'next/link';

export default function StudentInfo() {
    return (
        <>
            <p>Name: Gabriel Leclerc</p>
            <p>Course Section: CPRG 306 B</p>
            <Link href="https://github.com/GabrielPJL12/cprg306-assignments">My Github Repository</Link>
        </>
    );
}