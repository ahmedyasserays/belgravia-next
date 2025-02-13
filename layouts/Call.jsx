import Link from "next/link"

const Call = () => {
  return (
    <Link href="tel:+201020384108">
      <a className="call-icon shadow rounded-pill d-flex">
        <i className="fas fa-phone-alt"></i>
      </a>
    </Link>
  )
}

export default Call