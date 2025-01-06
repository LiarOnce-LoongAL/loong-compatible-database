const navbar = [
    { text: "Home", link: "/" },
    {
        text: "Compatibility Lists",
        items: [
            { text: "Hardwares Compatibility", link: "/en/list-hardwares" },
            { text: "LAT Compatibility", link: "/en/list-lat" },
            { text: "LibLoL Compatibility", link: "/en/list-liblol" },
        ],
    },
    {
        text: "More Info",
        items: [
            { text: "Hardwares Info", link: "/en/hardwares/" },
            { text: "LAT Info", link: "/en/lat/" },
            { text: "LibLoL Info", link: "/en/liblol" }
        ],
    },
    {
        text: "Contribution",
        items: [
            { text: "Contribution", link: "/en/contribution/" },
            { text: "Known Issues", link: "/en/contribution/knownissues" }
        ],
    },
]

export { navbar }