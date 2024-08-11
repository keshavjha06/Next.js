"use client";

import Slider from "react-slick";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
// import "./ImageSlider.css";

export default function ClientRoutePage() {
    const theme = useTheme()
    const result = clientSideFunction()
    return (
        <>
            <h1
                style={{
                    color: theme.colors.secondary,
                }}
            >
                Client Route {result}
            </h1>
            <div className="image-slider-container">
                <Slider>
                    <div>
                        <img src="https://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/300" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/250" />
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/350" />
                    </div>
                </Slider>
            </div>
        </>
    );
};