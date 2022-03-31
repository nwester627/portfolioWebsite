import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    featuredPortfolio,
    portfolioWebsite,
    inventoryManagement,
    discordBot,
} from "../../data";

export default function Portfolio(){
    const [selected,setSelected] = useState("featured")
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "portfolio",
            title: "Portfolio Website",
        },
        {
            id: "Inventory Management",
            title: "Inventory Management",
        },
        {
            id: "Discord",
            title: "Discord Bot",
        },
    ];

    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "portfolio":
                setData(portfolioWebsite);
                break;
            case "Inventory Management":
                setData(inventoryManagement);
                break;
            case "Discord":
            setData(discordBot);
            break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio/Skills Used</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title}
                    active = {selected === item.id}
                    setSelected = {setSelected}
                    id = {item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img
                        src={d.img}
                        alt=""
                    />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}