import { GoArrowUpRight } from "react-icons/go";
function InfoBox({imageSrc , header , Info , githubLink , liveLink, techStack}){
    return (
        <div className=" flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 dark:text-white shadow-md dark:bg-zinc-700 p-[3px] border-2 border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br before:from-blue-500 before:to-pink-500 before:bg-[length:200%_200%] before:animate-glow-gradient">
          <div className=" w-full h-full rounded-xl bg-white dark:bg-zinc-700 p-2 shadow-[0_-4px_15px_rgba(0,123,255,0.7),_0_4px_15px_rgba(255,0,150,0.7)]">
            <div className=" h-full rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              {imageSrc ? <img className="w-full h-full rounded-xl" src={imageSrc} alt="" />:<></>}
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white antialiased">
                {header}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {Info}
              </p>
              <div className="flex flex-row flex-wrap mt-2">
                {
                  techStack.map((tech)=>(
                    <span className="text-black dark:bg-white m-1 px-1 font-semibold border rounded text-sm">{tech}</span>
                  ))
                }
              </div>
            </div>
            <div className="p-6 pt-0 flex flex-row gap-2">
              <a
                  className=" group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 bg-neutral-900 px-10 py-1 border text-left p-1 text-gray-50 text-base font-bold rounded-xl overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                  href={githubLink}
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-neutral-50"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-fill-primary"
                      d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                    ></path>
                  </svg>
                  Github
              </a>
              <button
                class=" py-2 px-8 text-black text-base font-bold overflow-hidden bg-blue-100 rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
              <a href={liveLink} target="_blank"><span className="text-black dark:text-black">
              🚀 </span> LIVE</a>
              </button>

            </div>
          </div>
        </div>


    )
}

export default InfoBox



