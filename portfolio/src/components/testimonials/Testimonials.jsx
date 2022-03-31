import "./testimonials.scss"

export default function Testimonials(){
    const data = [
        {
            id: 1,
            name: "Taylor Jacks",
            title: "Senior Developer",
            img: "assets/Taylor.png",
            icon: "assets/twitter.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            name: "Daniel Double",
            title: "CEO, Programming America",
            img: "assets/Daniel.jpg",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            featured: true,
        },
        {
            id: 3,
            name: "Andrew Roo",
            title: "Lead Developer",
            img: "assets/Andrew.jpg",
            icon: "assets/github.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ];
    return(
        <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d) => (
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img
                  className="user"
                  src={d.img}
                  alt=""
                />
                <img className="right" src={d.icon} alt="" />
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }