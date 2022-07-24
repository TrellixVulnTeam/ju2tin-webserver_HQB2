import self from "../img/self.png"
import athenachimera from "../img/athenachimera.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(255, 255, 255)", "rgb(41, 103, 158)"];
/*
using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Justin",
    lastName: "Fernbaugh",
    initials: "jf", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Fullstack Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💡',
            text: 'Love learning'
        },
        {
            emoji: '🌎',
            text: 'Based Portland/Corvallis, Oregon'
        },
        {
            emoji: "🏫",
            text: "Student at Oregon State University"
        },
        {
            emoji: "📧",
            text: "fernbaughj@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram'
        // },
        {
            link: "https://github.com/justin-fernbaugh",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/justin-fernbaugh/",
            icon: "fa fa-linkedin"
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter"
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Justin. I'm currently studying Computer Science at Oregon State University. I enjoy learning about Distributed Systems, Parallel Programming & Backend Architecture.",
    skills:
        {
            proficientWith: ['nodejs', 'c++', 'c', 'git', 'github', 'html5', 'css3', 'agile'],
            exposedTo: ['reactjs', 'rust', 'go', 'java', 'python']
        }
    ,
    hobbies: [
        {
            label: 'computers',
            emoji: '💻'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cars',
            emoji: '🏎️'
        },
        {
            label: 'hot sauce!',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        // {
        //     title: "Project 1",
        //     live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock1
        // },
        {
            title: "CS:GO Exploit",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Justin-Fernbaugh/AthenaChimera",
            image: athenachimera
        }
    ]
}