import Link from "next/link";

//static metadata configuration
export const metadata = {
  title: "About My Application"
};

export default function About() {
  return (
    <>
      <h1>Welcome to About Us Page</h1>
      <Link href="/">Go Back To Home</Link>
    </>
  );
}
