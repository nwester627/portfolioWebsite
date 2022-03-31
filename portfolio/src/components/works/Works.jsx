import { useState } from "react";
import "./works.scss"


export default function Works(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/DiscordLogo.png",
            title: "Discord Bot",
            desc:
                `This bot was built using Python. 
                 The bot allows for moderation of users, media playback, 
                 making server announcements, and fun easter eggs for my friends!`,
            img: "./assets/discordCode.png",
            link: "https://github.com/nwester627/discordBot/blob/master/Marroh_Bot.py",
        },
        {
            id: "2",
            icon: "./assets/inventoryManagementIcon.jpg",
            title: "Inventory Management",
            desc: 
                `This was the final project of my Software I class. 
                 It was written mainly in Java, but I used JavaFX to
                 design and implement the GUI. The user is able to 
                 add parts, create products, search, delete, save and
                 edit various items.`,
            img: "./assets/projectCode.png",
            link: "https://github.com/nwester627/schoolProject",
        },
        {
            id: "3",
            icon: "./assets/portfolioIcon.png",
            title: "Portfolio Website",
            desc:
                `This website was built with JavaScript, React JS, CSS, 
                 and HTML5. The website allows for the user to see past projects I 
                 have completed, contact me via email, view my 
                 github/linkedin, and see the source code for all projects
                 listed.`,
            img: "./assets/portfolioCode.png",
            link: "https://github.com/nwester627/portfolioWebsite",
        },
    ];

    const handleClick = (way) => {
        way ==="left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return(
        <div className = "works" id="works">
            <div className="slider"
            style= {{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt=""/>
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src={d.img} alt=""/>
                        <a href={d.link}>Source Code</a>
                    </div>
                </div>
            </div>
                ))}
            </div>
            <img src="assets/arrow.png" 
            className = "arrow left" alt=""
            onClick= {() => handleClick("left")}
            />
            <img src="assets/arrow.png" 
            className = "arrow right" alt=""
            onClick= {() => handleClick()}
            />
        </div>
    );
}