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
            <div className="p-6 pt-0 flex flex-row justify-between gap-2">
              <section class=" flex justify-center items-center">
                <a
                  class=" group flex justify-center p-2 rounded-xl drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  href={githubLink}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 15 15"
                    class="w-5"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      fill="currentColor"
                      d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    ></path>
                  </svg>
                  
                  <span
                    class=" absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    GitHub
                  </span>
                </a>
              </section>

              <button
                class=" py-2 px-8 p- text-black text-base font-bold overflow-hidden bg-blue-100 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
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



