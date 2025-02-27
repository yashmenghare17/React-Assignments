import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'));
root.render(
    <div className="w-full h-[100vh]">
       <header className="w-full bg-[#F1F0E9] md:flex">
            <div className="md:w-1/3 sm:w-full">
                <img src="https://www.penchnationalparkonline.in/uploads/ramtek-temple.jpg" className="object-contain"/>
            </div>
            <div className="md:w-1/2 sm:full flex ml-2 mt-10 justify-center">
                <h1 className="md:text-5xl max-sm:text-4xl max-sm:mb-2">Ramtek ... <span className="md:text-[15px] min-[320px]:text-[10px]">(The city of god ram)</span></h1>
            </div>
       </header>
       <div className="w-full bg-[#41644A] text-white">
            <div><h2 className="text-center text-[30px]"><u>Gallery</u></h2></div>
            <div className="w-full flex flex-wrap justify-center">
                <div className="w-[200px] border-[#41644A]-600 m-5 bg-white rounded-xl">
                    <div><img src="https://www.penchnationalparkonline.in/uploads/ramtek-temple.jpg" className="w-full h-50 object-cover" /></div>
                    <div className="text-center m-2 text-black"><b>Gad Mandir</b></div>
                </div>
                <div className="w-[200px] border-[#41644A]-600 m-5 bg-white rounded-xl">
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Summit_of_Shantinath_Jain_Mandir%2C_Ramtek._-_panoramio.jpg/1024px-Summit_of_Shantinath_Jain_Mandir%2C_Ramtek._-_panoramio.jpg" className="w-full h-50 object-cover" /></div>
                    <div className="text-center m-2 text-black"><b>Jain Mandir</b></div>
                </div>
                <div className="w-[200px] border-[#41644A]-600 m-5 bg-white rounded-xl">
                    <div><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpLAyYj2_SU5qqqMm-Tiava33kpj3qkD2ExSGA20qvDiBii1u4osmgTjZvPkX692bBVGskLWW-L2imXqWVVSIfKjPCYv4f0WEjDMemKjiX8-ilLCIvVikqNNORqdOlPSbFfWDER3qa7qU/s320/Ramtek-AM.jpg" className="w-full h-50 object-cover" /></div>
                    <div className="text-center m-2 text-black"><b>Ambala Mandir</b></div>
                </div>
                <div className="w-[200px] border-[#41644A]-600 m-5 bg-white rounded-xl">
                    <div><img src="https://static.wixstatic.com/media/d8e7f4_4a6a5c651a0d4f87b91a0c1a305d4523~mv2.jpeg/v1/fill/w_1225,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20201202_075914-01.jpeg" className="w-full h-50 object-cover" /></div>
                    <div className="text-center m-2 text-black"><b>Kapoor Bauli</b></div>
                </div>
            </div>
       </div>
       <div className="w-full bg-[#0D4715] text-white">
            <div><h2 className="text-center text-[30px]"><u>About Us</u></h2></div>
            <div className="p-4"><p>Ramtek hosts a historic temple of Rama. It is believed that Ramtek was the place where Rama, the Hindu god, rested while he was in exile, Hence it is named Ramtek.According to Hindu mythology, the ashram of the Hindu sage Agastya was situated close to Ramtek. The present temple was built by Raghuji Bhonsale, the Maratha ruler of Nagpur in 18th century after his victory over fort of Deogarh in Chhindwara.This place is also related to the Sanskrit poet Kalidasa. It is believed that Kalidasa wrote Meghadūta in the hills of Ramtek.</p></div>
       </div>
       <footer className="w-full bg-[#E9762B] text-white">
            <p className="text-center">Dummy copyright 2024@</p>
       </footer>
    </div>
);