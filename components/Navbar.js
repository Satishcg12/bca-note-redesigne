import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <Image src='/logo.svg' alt='BCA note logo' width={150} height={60} />
      <ul>
        <Link href="/home"><a><li>Home</li></a></Link>
        <li>Notes
          <ul>
            <Link href="/note"><a><li>Notes</li></a></Link>
            <Link href="/note/firstSemester"><a><li>First Semester</li></a></Link>
            <Link href="/note/secondSemester"><a><li>Second Semester</li></a></Link>
            <Link href="/note/thirdSemester"><a><li>Third Semester</li></a></Link>
            <Link href="/note/forthSemester"><a><li>Forth Semester</li></a></Link>
            <Link href="/note/fifthSemester"><a><li>Fifth Semester</li></a></Link>
            <Link href="/note/sixthSemester"><a><li>Sixth Semester</li></a></Link>
            <Link href="/note/seventhSemester"><a><li>Seventh Semester</li></a></Link>
            <Link href="/note/eightSemester"><a><li>Eight Semester</li></a></Link>
          </ul>
        </li>
        <li>Question Paper
          <ul>
            <Link href="/questions"><a><li>Question Papers</li></a></Link>
            <Link href="/questions/firstSemester"><a><li>First Semester</li></a></Link>
            <Link href="/questions/secondSemester"><a><li>Second Semester</li></a></Link>
            <Link href="/questions/thirdSemester"><a><li>Third Semester</li></a></Link>
            <Link href="/questions/forthSemester"><a><li>Forth Semester</li></a></Link>
            <Link href="/questions/fifthSemester"><a><li>Fifth Semester</li></a></Link>
            <Link href="/questions/sixthSemester"><a><li>Sixth Semester</li></a></Link>
            <Link href="/questions/seventhSemester"><a><li>Seventh Semester</li></a></Link>
            <Link href="/questions/eightSemester"><a><li>Eight Semester</li></a></Link>
          </ul>
        </li>
        <Link href="/events"><a><li>events</li></a></Link>
        <Link href="/syllabus"><a><li>Syllabus</li></a></Link>

      </ul>
      <div className="search">
        search
      </div>
      
    </nav>
  )
}

export default Navbar