import Link from 'next/link';
function Home(){
    return (<div>
        <h1>RPG</h1>
        <Link href="/racas">
        <a>Raças</a>
        </Link>
    </div>)
}
export default Home