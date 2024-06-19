import React from "react";
import OurStory from "../about/components/our-story";
import OurObjectives from "./components/our-objectives";
import OurCommittee from "../about/components/our-committee-using-filterbuttons";

export default function About() {
    return (
        <div>
            <OurStory/>
            <OurObjectives/>
            <OurCommittee/>
        </div>
    )
}