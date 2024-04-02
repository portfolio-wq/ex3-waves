import React from "react";

function Experience() {
  return (
    <div id="experience">
      <section className="bubble">
        <div className="center mt-[50px] lg:w-[80%] md:mx-auto  flex justify-around gap-3 flex-col ">
          <div className="w-fit  ">
            <div className="w-fit mb-5 flex flex-col gap-2 ">
              <h1 className="text-xl font-medium ">Experince and Education</h1>
              <div className="w-full h-[3px] bg-gradient-to-r from-rose-400 to-red-500 rounded-md"></div>
              <div className="w-[70%] h-[3px] bg-gradient-to-r from-rose-400 to-red-500 rounded-md"></div>
            </div>

            {/* <h2 className="text-lg w-fit">I&apos;m a Software Engineer</h2> */}
            <p className="md:w-[80%] mb-5  ">
              Tech-savvy problem solver with a knack for crafting cutting-edge
              software solutions. Proficient in frontend and backend
              development, committed to innovation and collaboration.
            </p>
          </div>

          {/* main */}
          <div className="edu-exp padd-15 flex gap-4 flex-wrap md:flex-nowrap">
            {/*  */}
            <div className="experience w-fit bg-gray-700 p-7 rounded-md">
              <h2 className="mb-6 lg:text-xl">Experience</h2>
              <div className="box relative  rounded-7 ">
                <div className="boxs flex items-start mb-6">
                  <div className="icon relative">
                    <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2"></div>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm">Oct - Dec 2023</span>
                    <h3 className="text-sm lg:text-lg">
                      Web development and AWS program.(Remote internship)
                    </h3>
                    <p className="text-xs md:text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quia consequatur reiciendis eum laborum asperiores rerum
                      quae ad rem exercitationem, eveniet tenetur enim quam
                      mollitia officiis inventore quis? Iusto, accusamus quos?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dignissimos delectus nam consequuntur. Fugit temporibus
                      dolor cupiditate assumenda corrupti, tenetur molestiae,
                      nostrum necessitatibus beatae delectus hic? Ipsa,
                      consectetur? Provident, delectus itaque!
                    </p>
                  </div>
                </div>
                <div className="boxs flex items-start mb-6">
                  <div className="icon relative">
                    <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2"></div>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm">
                      Nov 2022 - Feb 2023
                    </span>
                    <h3 className="text-sm lg:text-lg">
                      Web Development Intern at RadicalX
                    </h3>
                    <p className="text-xs md:text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quia consequatur reiciendis eum laborum asperiores rerum
                      quae ad rem exercitationem, eveniet tenetur enim quam
                      mollitia officiis inventore quis? Iusto, accusamus quos?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dignissimos delectus nam consequuntur.
                    </p>
                  </div>
                </div>
                <div className="boxs flex items-start mb-6">
                  <div className="icon relative">
                    <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2"></div>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm">
                      Mar 2021 - Aug 2021
                    </span>
                    <h3 className="text-sm lg:text-lg">IOTECH · Internship</h3>
                    <p className="text-xs md:text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta quia nihil reprehenderit exercitationem sint.
                      Dolores suscipit quia ullam, quod dicta velit consequuntur
                      recusandae, ipsum saepe optio, assumenda quam id vero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education w-fit bg-gray-700 p-7 rounded-md ">
              <h2 className="mb-6 lg:text-xl">Education</h2>
              <div className="box relative  rounded-7">
                <div className="boxs flex items-start mb-6">
                  <div className="icon relative">
                    <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2"></div>
                  </div>
                  <div>
                    <span className="text-xs">2021 - 2022</span>
                    <h3 className="text-sm lg:text-lg ">
                      Application Design And Development Engineering
                    </h3>
                    <p className="text-xs md:text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quia consequatur reiciendis eum laborum asperiores rerum
                      quae ad rem exercitationem, eveniet tenetur enim quam
                      mollitia officiis inventore quis? Iusto, accusamus quos?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dignissimos delectus nam consequuntur.
                    </p>
                  </div>
                </div>
                <div className="boxs flex items-start mb-6">
                  <div className="icon relative">
                    <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2"></div>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm">2017 - 2020</span>
                    <h3 className="text-sm lg:text-lg">
                      Diplome In Networking
                    </h3>
                    <p className="text-xs md:text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quia consequatur reiciendis eum laborum asperiores rerum
                      quae ad rem exercitationem, eveniet tenetur enim quam
                      mollitia officiis inventore quis? Iusto, accusamus quos?
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dignissimos delectus nam consequuntur.
                    </p>
                  </div>
                </div>
                <div className="boxs flex items-start mb-6">
                  <div className="icon relative">
                    <div className="circle absolute w-3 h-3 bg-gradient-to-r from-rose-400 to-red-500 rounded-md  left-[-20px] top-[50%] transform translate-y-2"></div>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm">2016 - 2017</span>
                    <h3 className="text-sm lg:text-lg">
                      Baccalaureat in experimental science
                    </h3>
                    <p className="text-xs md:text-sm">
                      I have a Baccalaureat in Experimental Science and I
                      learned a lot about math, physics, chemistry, and biology
                      during my studies. I also gained valuable hands-on
                      experience through lab work and other practical
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
