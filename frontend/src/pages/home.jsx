import React, { useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRidePanel from '../components/ConfirmRide'
import { use } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const vehiclePanelRef = useRef(null)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(true)

    const submitHandler=(e)=>{
        e.preventDefault();
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%'
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%'
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })

        }
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanel])

    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePanel])


    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])
    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver])


  
    return (
        <>
            <div className='h-screen relative overflow-hidden'>
                <img
                    className='w-16 absolute left-5 top-5'
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber Logo"
                />
                <div className='h-screen w-screen'>
                    <img
                        className='h-full w-full object-cover'
                        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                        alt="Background"
                    />
                </div>
                <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                    <div className=' h-[30%] p-6 bg-white relative'>
                        <h4 className=' text-2xl font-semibold'>Find a trip</h4>
                        <h3 className='absolute right-5 top-8'><i ref={panelCloseRef} onClick={(e)=>{
                                setPanelOpen(false)
                            }} className="opacity-0 ri-arrow-down-wide-line"></i></h3>
                        <form onSubmit={(e)=>
                            {
                                submitHandler(e)
                            }
                        }>
                            <div className="line absolute h-16 w-1 top-[47%] left-10 bg-gray-700 rounded-full"></div>
                            <input
                                onClick={()=>{
                                    setPanelOpen(true)
                                }}
                                value={pickup}
                                onChange={(e)=>{
                                setPickup(e.target.value)
                                }}
                                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
                                type="text"
                                placeholder='Add a pick-up location'
                            />
                            <input
                                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
                                type="text"
                                value={destination}
                                onChange={(e)=>{
                                    setDestination(e.target.value)
                                }}
                                placeholder='Enter your destination'
                            />
                        </form>
                    </div>
                    <div ref={panelRef} className='bg-white h-0'>
                        <LocationSearchPanel setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen} />
                    </div>
                </div>
                
                <div ref={vehiclePanelRef}className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'

                >
                    <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
                </div>
                <div ref={confirmRidePanelRef}className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <ConfirmRidePanel setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>
            <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver  waitingForDriver={waitingForDriver} />
                </div>
                
            </div>
        </>
    );
};

export default Home;
