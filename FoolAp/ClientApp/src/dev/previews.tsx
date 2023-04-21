import React from "react";
import {Previews} from "@react-buddy/ide-toolbox";
// @ts-ignore
import {PaletteTree} from "./palette.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
        </Previews>
    );
};

export default ComponentPreviews;