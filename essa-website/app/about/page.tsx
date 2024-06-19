import React from "react";
import OurStory from "../about/components/our-story";
import OurObjectives from "../about/components/our-objectives";
import OurCommittee from "../about/components/our-committee";

export default function About() {
    return (
        <div>
            <OurStory/>
            <OurObjectives/>
            <OurCommittee/>
        </div>
    )
}