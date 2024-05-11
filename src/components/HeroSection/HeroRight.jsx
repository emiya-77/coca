import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Number({n}) {
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 0,
        config: {mass: 1, tension: 20, friction: 10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const HeroRight = () => {
    const [counterOn, setCounterOn] = useState(true);

    return (
        
            <div className="flex flex-col justify-start relative order-3 md:order-3">
                    <div>
                        <img src="Content.png" alt="" />
                    </div>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="absolute bottom-0 left-6 md:-bottom-10 xl:-bottom-10 xl:left-8 2xl:bottom-0 flex justify-center items-center gap-2 xl:gap-4 divide-x-2 text-white">
                            <div>
                                <img className="w-20 md:w-32" src="Group 1171274759.png" alt="" />
                            </div>
                            <div className="pl-2 md:pl-4">
                                <h1 className="text-2xl xl:text-4xl font-medium flex">
                                    {counterOn && <Number n={84}></Number>}
                                    {/* {
                                        counterOn &&
                                        <CountUp start={0} end={84} duration={4} delay={0}/>
                                    } */}
                                    k</h1>
                                <p className="text-xs xl:text-base">Customers worldwide</p>
                            </div>
                        </div>
                    </ScrollTrigger>
            </div>
    )
}

export default HeroRight