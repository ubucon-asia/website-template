import UCALogo from './assets/logo.svg'
import PashupatinathTempleImage from '@assets/pashupatinath_temple.jpg'

export const WebsiteConfig = {
    siteTitle: "UbuCon Asia 2025",
    siteDescription: "Kathmandu, Nepal | Mid of September",
    navigation: [
        {
            label: "About",
            link:"#",
            childs: [
                {
                    label: "About",
                    link:"#",
                }
            ]
        },
        {
            label: "About 2",
            link:"#",
            childs: [
                {
                    label: "About",
                    link:"#",
                }
            ]
        }
    ],
    mainBanner: {
        dates: "Mid of September*",
        venue: "St. Xavier’s College, Kathmandu, Nepal*",
        description: "UbuCon Asia is a community-organized conference connecting Ubuntu community in Asia. \
            Join us in Kathmandu for two days memorable of conference that connects \
            enthusiast, engineers, creators, researchers, entrepreneurs and contributors across Asia.",
        footnote: "*To be confirmed",
        buttons: [
            {
                label: "Become a sponsor!",
                link: "mailto:sponsorship@ubucon.asia",
                class: "p-button--positive"
            }
        ],
        logo: UCALogo
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/47.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [20, 46, 43, 34, 19],
        speakerIds: [{ db_id: 522, user: 107 }, { db_id: 517, user: 166 }, { db_id: 494, user: 615 }, { db_id: 515, user: 628 }, { db_id: 516, user: 271 }, { db_id: 487, user: 3}],
        fullSchedulesUrl: "https://events.canonical.com/event/47/contributions/"
    },
    cityBanner: {
        cityImage: PashupatinathTempleImage.src
    },
    blog: {
        rssFeedUrl: "https://blog.ubucon.asia/tags/uca24/index.xml",
        viewMoreUrl: "https://blog.ubucon.asia/tags/uca24"
    },
}
