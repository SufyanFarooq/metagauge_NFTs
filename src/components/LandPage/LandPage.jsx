import React from 'react'
import './LandPage.css'
import HoverVideoPlayer from 'react-hover-video-player';
import ParticlesBg from 'particles-bg'
import AppNavbar from '../navbar/Navbar';
import Particles from "react-tsparticles";
import video from '../../assests/metaguage.mp4'
import ReactPlayer from 'react-player'
export default function LandPage({ setModalShow }) {

  let Navprop = setModalShow
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container1) => {
    console.log(container1);
  };
  return (
    <div className=" bg">
      <div className="container ">
        <br />
        <AppNavbar Navprop={Navprop} />


        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "none",
              },
              height: '100vh'
            },
            height: '100px',
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: false,
              },
              modes: {
                bubble: {
                  distance: 1000,
                  duration: 0,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 1000,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 500,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />

        {/* <ParticlesBg color="#FFD700" num={10} type="cobweb" className="Tatora " /> */}


        <div className="container-fluid   " id='homepage'>

          <div className=" ">
            <div className="row landingpagerow">
              <div className="col-lg-5 col-md-12 ">
                <div className="landFirstText">
                  <p className='landfirdstppp'>Meta gauge was made with the goal of creating a digital
                    twin-type metaverse based   on actual data movement of users.</p>

                  
                  
                  <div className="belowPLine">

                   
                    <p className='homepageppp' >
                      User’s movement data will be rewarded with more valuable data through
                      blockchain technology. While in the process of creation and distribution,
                      a network of participants in the ecosystem will provide fair compensation by
                      verifying the reliability of the movement data. In addition, Metagage’s
                      virtual world will be able to innovatively change the user’s lifestyle by
                      organically and immediately linking the movement data moved from the user’s
                      reality.
                    </p>
                  </div>
                </div>


              </div>
              <div className="col-lg-7 col-md-12  videoplerdiv " >

                <div className="videPlayer" >
                  <ReactPlayer className="reactplaydivlarger"
                    url={video}
                    playing={false}
                    controls={true}
                    light="Home.png"
                    // light="Home.png"   

                    // volume={1}
                    width="100%"
                  // height="100%"
                  />
                  {/* <video src={video} controls="controls" autoPlay="true" loop muted alt="" width="90%" /> */}
                </div>
              </div>

            </div>




          </div>
        </div>


      </div>
    </div>
  )
}
