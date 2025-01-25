import HeaderTierheim from "@/components/header_tierheim";
import Aktuellles from "@/components/aktuelles";
import Tiervermittlung from "@/components/tiervermittlung";
import TierheimStandard from "@/components/tier_standard_section";
import Terminvergabe from "@/components/terminvergabe";
import Information from "@/components/information";
import SimpleAccordion from "@/components/simple_accordion";

const headline = "Aktuelles";
const content = <Aktuellles />;

const tierervermittlung = "Tiervermittlung";
const tierervermittlungcontent = <Tiervermittlung />;

export default function Home() {
    return (
        <div className="w-full flex flex-col sm:flex-column items-center self-center justify-self-center font-[family-name:var(--font-geist-sans)]">
            <div className="main_content w-5/6 flex lg:w-[960px] flex-col relative">
                <HeaderTierheim />
                <div className="content mt-20">
                    <SimpleAccordion content={content} headline={headline}></SimpleAccordion>
                    <SimpleAccordion content={tierervermittlungcontent} headline={tierervermittlung}/>
                    <TierheimStandard />
                    <Terminvergabe />
                    <Information />
                </div>
            </div>
        </div>
    );
}
  