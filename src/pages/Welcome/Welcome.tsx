import "./Welcome.css";
import WelcomeCard from "../../components/WelcomeCards/WelcomeCard";
import { useParams } from 'react-router-dom';

function Welcome() {
  const {  email } = useParams<{ accessToken: string|undefined, email: string|undefined, userId: string|undefined }>();

  return (
    <>
      <div className="">
        <div className="welcome-text font-light lg:text-[18px] text-[15px] text-left  mt-[30px] lg:ml-[10%] ml-[5%]   ">
          <span className="font-semibold">Welcome back usename! {email}</span>
          <br />
          We're thrilled to have you here again. Let's make today another step
          towards your goals.
        </div>
        <div className=" lg:mr-[15%] lg:ml-[15%] mr-[10%] ml-[10%] mt-[20px] flex flex-wrap justify-center cards-container">
          <WelcomeCard />
        </div>
      </div>
    </>
  );
}
export default Welcome;
