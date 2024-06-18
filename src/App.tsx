import "./index.css";
import jessica from "./assets/images/avatar-jessica.jpeg";

function App() {
  const list = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <>
      <div className="bg-Off-Black min-h-[100vh] w-[100vw] font-inter flex flex-col justify-center items-center text-white text-[16px]">
        <div className="bg-Dark-Grey flex flex-col gap-3 p-6 items-center w-[80vw] md:w-[40vw] rounded-md">
          <img
            src={jessica}
            alt="Jessica Randall"
            className="w-[100px] rounded-full"
          />
          <div className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-2xl lg:text-4xl font-bold">Jessica Randall</h1>
            <p className="text-Green">London, United Kingdom</p>
          </div>
          <p className="my-4 font-semibold tracking-wide">
            "Front-end developer and avid reader"
          </p>
          <div className="flex flex-col gap-4 w-[100%] justify-center items-center mb-3">
            {list.map((item) => {
              return (
                <div className="p-4 flex justify-center items-center text-bold bg-Grey rounded-md w-[80%]">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
