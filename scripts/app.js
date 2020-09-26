//Ivan Valverde🐦
//Angel Ureña💢
let options = {
  accordion: null,
};
function ret() {   
  var elems = document.querySelectorAll(".dropdown-trigger");   
  var instances = M.Dropdown.init(elems);   
  var elems1 = document.querySelectorAll(".collapsible");   
  var instances1 = M.Collapsible.init(elems1, options);   
  var elems2 = document.querySelectorAll('.select-in');   
  var instances2 = M.FormSelect.init(elems2, options); 
  var elems3 = document.querySelectorAll(".sidenav");
  var instances3 = M.Sidenav.init(elems3, options);
}

//Change the backgound color by interval💢🐦
function changeColor() {
  let y = 0;
  setInterval(function () {
    y += 1;
    if (y === colors.length) {
      y = 0;
    }
    //Code to be executed after 10 second💢🐦
    document.getElementById("bgc").style.background = colors[y];
    document.getElementById("text").innerHTML = text[y];
    document.getElementById("img").innerHTML = img[y];
    document.getElementById("bs").style.boxShadow = shadow[y];
  }, 10000);
  let colors = [
   "linear-gradient(75.51deg, rgba(232, 94, 60, 0.81) 1.71%, rgba(232, 60, 163, 0) 50.49%), linear-gradient(247.47deg, #E83C4C -3.23%, #E83C4C -3.23%)",
    "linear-gradient(76.43deg, #8052C0 -0.49%, rgba(13, 27, 146, 0) 51.03%), linear-gradient(0deg, #386FCB, #386FCB)",
    "linear-gradient(73.69deg, #02A3A3 8.96%, rgba(126, 179, 183, 0) 48.74%), linear-gradient(247.47deg, #65C8D0 -3.23%, #65C8D0 -3.22%)",
   "linear-gradient(79.16deg, #FFB972 9.61%, rgba(255, 185, 114, 0) 50.05%), linear-gradient(247.47deg, #FFDC72 -3.23%, #FFDC72 43.98%)",
    "linear-gradient(75.51deg, #E83CA3 1.71%, rgba(232, 94, 60, 0) 50.49%), linear-gradient(247.47deg, #E83C4C -3.23%, #E83C4C -3.23%)",
  ];
  let text = [
    "Ejectuamos ideas geniales.",
    "Ejectuamos ideas reales.",
    "Ejectuamos ideas con impacto.",
    "Ejectuamos ideas para el mundo.",
    "Ejectuamos ideas con impulso.",
  ];
  let img = [
    "<img class='img' src='/IMG/Direccion de Arte.png' > </img>",
    "<img   class='img' src='/IMG/Direccion de Ciencia.png' ></img>",
    "<img class='img' src='/IMG/Direccion de Ingenieria.png'></img>",
    "<img class='img' src='/IMG/Direccion de Desarrollo Sostenible.png'></img>",
    "<img class='img' src='/IMG/Direccion de Liderazgo.png'></img>",
  ];
  let shadow = [
    "-5px 10px  rgb(249, 101, 3)",
    "-5px 10px rgb(128, 82, 192)",
    " -5px 10px rgb(2, 163, 163)",
    " -5px 10px  rgb(238, 191, 74)",
    " -5px 10px rgb(232, 60, 163)",
  ];
  return;
}
//Change the backgound color by interval💢🐦
class SkemCW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      text: '',
      select: '',
      colors: ["black", "white", "green", "yellow", "red"],
      systemColors: [
        "linear-gradient(75.51deg, rgba(232, 94, 60, 0.81) 1.71%, rgba(232, 60, 163, 0) 50.49%), linear-gradient(247.47deg, #E83C4C -3.23%, #E83C4C -3.23%)",
        "linear-gradient(79.16deg, #FFB972 9.61%, rgba(255, 185, 114, 0) 50.05%), linear-gradient(247.47deg, #FFDC72 -3.23%, #FFDC72 43.98%)",
        "linear-gradient(73.69deg, #02A3A3 8.96%, rgba(126, 179, 183, 0) 48.74%), linear-gradient(247.47deg, #65C8D0 -3.23%, #65C8D0 -3.22%)",
        "linear-gradient(75.51deg, #E83CA3 1.71%, rgba(232, 94, 60, 0) 50.49%), linear-gradient(247.47deg, #E83C4C -3.23%, #E83C4C -3.23%)",
        "linear-gradient(76.43deg, #8052C0 -0.49%, rgba(13, 27, 146, 0) 51.03%), linear-gradient(0deg, #386FCB, #386FCB)",
        "white"
      ],
      systemMatrix: [
        ["E.D.A", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["Agente de Producción", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["KARMA PAPERS", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["Marco de Producción", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["KARMA PAPERS", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["Ciencia", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["Ingenieria", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["Desarrollo Sostenible", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["Arte", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"],
        ["Liderazgo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat unde, reiciendis sit labore molestiae corrupti nemo, odit pariatur dignissimos natus laudantium ut fuga eum esse repudiandae asperiores expedita culpa?"]
        
      ],
      systemImages: [
        "/IMG/Direccion de Liderazgo.png",
        "/IMG/Direccion de Desarrollo Sostenible.png",
        "/IMG/Direccion de Ingenieria.png",
        "/IMG/Direccion de Arte.png",
        "/IMG/Direccion de Ciencia.png",
        "/IMG/Direccion de Ciencia.png",
        "/IMG/Direccion de Ingenieria.png",
        "/IMG/Direccion de Desarrollo Sostenible.png",
        "/IMG/Direccion de Arte.png",
        "/IMG/Direccion de Liderazgo.png"
      ],
      hcarrousel: 1,
      isUserUsingSystems: false,
      systemPosition: 0,
      SystemName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    let indexOfColor = 0;
    let initialNum = 1;
    changeColor(indexOfColor);
    ret();
    this.aback();
    this.hback(0);
  }

  //Change the color of the background by clicking the button 💢🐦
  OS(x) {
    this.setState({
      systemPosition: x,
      isUserUsingSystems: true
    })
  }
  goBackSystem(){
    this.setState({
      isUserUsingSystems: false
    })
  }
  back() {
    var width = document.documentElement.clientWidth;
    console.log(width);
    if  (width>1000){
    document.getElementById("bgo").style.background = "#f6f6f6";
    document.getElementById("EDA").style.display = "block";
    document.getElementById("AP").style.display = "none";
    document.getElementById("MP").style.display = "none";
    document.getElementById("KP").style.display = "none";
    document.getElementById("T").style.display = "none";
    document.getElementById("t").style.display = "none";
    document.getElementById("atra").style.display = "none";
  }
  else{
    document.getElementById("bgo").style.background = "#f6f6f6";
    document.getElementById("EDA").style.display = "block";
    document.getElementById("AP").style.display = "block";
    document.getElementById("MP").style.display = "block";
    document.getElementById("KP").style.display = "block";
    document.getElementById("T").style.display = "block";
    document.getElementById("t").style.display = "block";
    document.getElementById("atra").style.display = "none";
  }
}
  anext(){
    var width = document.documentElement.clientWidth;
    console.log(width);
    if  (width>1000){
    document.getElementById("back").style.display = "block";
    document.getElementById("ar").style.display = "block";
    document.getElementById("li").style.display = "block";
    document.getElementById("ci").style.display = "none";
    document.getElementById("ig").style.display = "none";
    document.getElementById("ds").style.display = "none";
    document.getElementById("next").style.display = "none";
  } else{
        document.getElementById("back").style.display = "none";
    document.getElementById("ar").style.display = "block";
    document.getElementById("li").style.display = "block";
    document.getElementById("ci").style.display = "block";
    document.getElementById("ig").style.display = "block";
    document.getElementById("ds").style.display = "block";
    document.getElementById("next").style.display = "none";
  }
}
  aback(){
    var width = document.documentElement.clientWidth;
    console.log(width);
    if  (width>1000){
    document.getElementById("next").style.display = "block";
    document.getElementById("ci").style.display = "block";
    document.getElementById("ig").style.display = "block";
    document.getElementById("ds").style.display = "block";
    document.getElementById("ar").style.display = "none";
    document.getElementById("li").style.display = "none";
    document.getElementById("back").style.display = "none";
  }
  else{
    document.getElementById("next").style.display = "none";
    document.getElementById("ci").style.display = "block";
    document.getElementById("ig").style.display = "block";
    document.getElementById("ds").style.display = "block";
    document.getElementById("ar").style.display = "block";
    document.getElementById("li").style.display = "block";
    document.getElementById("back").style.display = "none"; 
  }
}




  hback(res){
    let stateNum = this.state.hcarrousel;
  let Num = stateNum+res;
  if (Num==1){
    document.getElementById("himg1").style.display = "block";
    document.getElementById("himg2").style.display = "block";
    document.getElementById("himg3").style.display = "block";
    document.getElementById("ht1").style.display = "block";
    document.getElementById("ht2").style.display = "block";
    document.getElementById("ht3").style.display = "block";
    document.getElementById("hn1").style.display = "block";
    document.getElementById("hn2").style.display = "block";
    document.getElementById("hn3").style.display = "block";
    document.getElementById("h1").style.display = "block";
    document.getElementById("h2").style.display = "block";
    document.getElementById("h3").style.display = "block";
    document.getElementById("himg4").style.display = "none";
    document.getElementById("himg5").style.display = "none";
    document.getElementById("himg6").style.display = "none";
    document.getElementById("ht4").style.display = "none";
    document.getElementById("ht5").style.display = "none";
    document.getElementById("ht6").style.display = "none";
    document.getElementById("hn4").style.display = "none";
    document.getElementById("hn5").style.display = "none";
    document.getElementById("hn6").style.display = "none";
    document.getElementById("h4").style.display = "none";
    document.getElementById("h5").style.display = "none";
    document.getElementById("h6").style.display = "none";
    document.getElementById("himg7").style.display = "none";
    document.getElementById("himg8").style.display = "none";
    document.getElementById("himg9").style.display = "none";
    document.getElementById("ht7").style.display = "none";
    document.getElementById("ht8").style.display = "none";
    document.getElementById("ht9").style.display = "none";
    document.getElementById("hn7").style.display = "none";
    document.getElementById("hn8").style.display = "none";
    document.getElementById("hn9").style.display = "none";
    document.getElementById("h7").style.display = "none";
    document.getElementById("h8").style.display = "none";
    document.getElementById("h9").style.display = "none";
    document.getElementById("hnext").style.display = "block";
    document.getElementById("hback").style.display = "none";
  }
  else if (Num==4){
    document.getElementById("himg1").style.display = "none";
    document.getElementById("himg2").style.display = "none";
    document.getElementById("himg3").style.display = "none";
    document.getElementById("ht1").style.display = "none";
    document.getElementById("ht2").style.display = "none";
    document.getElementById("ht3").style.display = "none";
    document.getElementById("hn1").style.display = "none";
    document.getElementById("hn2").style.display = "none";
    document.getElementById("hn3").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("h3").style.display = "none";
    document.getElementById("himg4").style.display = "block";
    document.getElementById("himg5").style.display = "block";
    document.getElementById("himg6").style.display = "block";
    document.getElementById("ht4").style.display = "block";
    document.getElementById("ht5").style.display = "block";
    document.getElementById("ht6").style.display = "block";
    document.getElementById("hn4").style.display = "block";
    document.getElementById("hn5").style.display = "block";
    document.getElementById("hn6").style.display = "block";
    document.getElementById("h4").style.display = "block";
    document.getElementById("h5").style.display = "block";
    document.getElementById("h6").style.display = "block";
    document.getElementById("himg7").style.display = "none";
    document.getElementById("himg8").style.display = "none";
    document.getElementById("himg9").style.display = "none";
    document.getElementById("ht7").style.display = "none";
    document.getElementById("ht8").style.display = "none";
    document.getElementById("ht9").style.display = "none";
    document.getElementById("hn7").style.display = "none";
    document.getElementById("hn8").style.display = "none";
    document.getElementById("hn9").style.display = "none";
    document.getElementById("h7").style.display = "none";
    document.getElementById("h8").style.display = "none";
    document.getElementById("h9").style.display = "none";
    document.getElementById("hnext").style.display = "block";
    document.getElementById("hback").style.display = "block";
}
else if(Num==7){
  document.getElementById("himg1").style.display = "none";
  document.getElementById("himg2").style.display = "none";
  document.getElementById("himg3").style.display = "none";
  document.getElementById("ht1").style.display = "none";
  document.getElementById("ht2").style.display = "none";
  document.getElementById("ht3").style.display = "none";
  document.getElementById("hn1").style.display = "none";
  document.getElementById("hn2").style.display = "none";
  document.getElementById("hn3").style.display = "none";
  document.getElementById("h1").style.display = "none";
  document.getElementById("h2").style.display = "none";
  document.getElementById("h3").style.display = "none";
  document.getElementById("himg4").style.display = "none";
  document.getElementById("himg5").style.display = "none";
  document.getElementById("himg6").style.display = "none";
  document.getElementById("ht4").style.display = "none";
  document.getElementById("ht5").style.display = "none";
  document.getElementById("ht6").style.display = "none";
  document.getElementById("hn4").style.display = "none";
  document.getElementById("hn5").style.display = "none";
  document.getElementById("hn6").style.display = "none";
  document.getElementById("h4").style.display = "none";
  document.getElementById("h5").style.display = "none";
  document.getElementById("h6").style.display = "none";
  document.getElementById("himg7").style.display = "block";
  document.getElementById("himg8").style.display = "block";
  document.getElementById("himg9").style.display = "block";
  document.getElementById("ht7").style.display = "block";
  document.getElementById("ht8").style.display = "block";
  document.getElementById("ht9").style.display = "block";
  document.getElementById("hn7").style.display = "block";
  document.getElementById("hn8").style.display = "block";
  document.getElementById("hn9").style.display = "block";
  document.getElementById("h7").style.display = "block";
  document.getElementById("h8").style.display = "block";
  document.getElementById("h9").style.display = "block";
  document.getElementById("hnext").style.display = "none";
  document.getElementById("hback").style.display = "block";
}
  console.log(Num);
  this.setState({
    hcarrousel: Num
  })
}


handleChange(event) {
  this.setState({name: event.target.value});
}
handleChange1(x) {
  this.setState({email: x.target.value});
}
handleChange2(x) {
  this.setState({select: x.target.value});
}
handleChange3(x) {
  this.setState({text: x.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.name);
  alert('An Email was submitted: ' + this.state.email);
  alert('A Select was submitted: ' + this.state.select);
  alert('A Text was submitted: ' + this.state.text);
  event.preventDefault();
}
  render() {
    return (
      <div>

        <div id="systems" style={{
            display: this.state.isUserUsingSystems ? "" : "none",
            background: this.state.systemColors[this.state.systemPosition],
            color: (this.state.systemPosition===3) ? "white" :  "black"
          }}
          >
          <button class="center-align white-text"
                className="ab" onClick={()=> {this.goBackSystem()}}
                style={{color: (this.state.systemPosition<5) ? "white" :  "black"}}
                ><i class="material-icons medium  left" style={{color: (this.state.systemPosition<5) ? "white" :  "black"}}>
                  chevron_left
                </i></button>
                <button class="center-align white-text"
                className="kpbtn" onClick={()=> {this.OS(4)}}
                style={{color: "white"}}
                ><i class="material-icons medium  left" style={{display: (this.state.systemPosition==2) ? "block" :  "none"}}>
                  chevron_right
                </i></button>
                <button class="center-align white-text"
                className="kpbtnb" onClick={()=> {this.OS(2)}}
                style={{color: "white"}}
                ><i class="material-icons medium  left" style={{display: (this.state.systemPosition==4) ? "block" :  "none"}}>
                  chevron_left
                </i></button>
          <div id='image'>
          <img class="Simg" src={this.state.systemImages[this.state.systemPosition]}></img>
          </div>
          <div id='content'>
            <h1><b>{this.state.systemMatrix[this.state.systemPosition][0]}</b></h1>
            <h2>{this.state.systemMatrix[this.state.systemPosition][1]}</h2>
          </div>
        </div>
        
        <div className="contenedor" id="bgc">
          <nav class="transparent ">
            <div class="nav-wrapper">

            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              
              <a href="#" class="brand-logo">
                SKEMClub
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down black-text">
                <li>
                  <a href="#bgc">Inicio</a>
                </li>
                <li>
                  <a class="dropdown-trigger " data-target="dropdown1">
                    <i class="material-icons white-text right">keyboard_arrow_down</i>
                    Areas
                  </a>
                  <ul id="dropdown1" class="dropdown-content transparent">
                    <li class="transparent xd">
                      <a class="white-text" href="#portafolio">
                        <i class="material-icons white-text">folder</i>
                        Portafolio
                      </a>
                    </li>
                    <li class="transparent">
                      <a class="white-text" href="#Historias">
                        <i class="material-icons white-text">import_contacts</i>
                        Historias
                      </a>
                    </li>
                    <li class="transparent">
                      <a class="white-text" href="#bgo">
                        <i class="material-icons white-text">cloud</i>Sistemas
                      </a>
                    </li>
                    <li class="transparent">
                      <a class="white-text" href="#areas">
                        <i class="material-icons white-text">view_module</i>Áreas
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#galeria">Galeria</a>
                </li>
                <li>
                  <a href="#cnt">Contacto</a>
                </li>
              </ul>
            </div>
          </nav>

          <ul id="slide-out" class="sidenav">
            <li>
              <div class="user-view">
                <div class="background blue lighten-1">
                </div>
                <a href="#"><img class="circle" src="/IMG/WHITE.png"></img></a>
                
              </div>
            </li>
            <li><a href="#bgc">Inicio</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#Historias">Historias</a></li>
            <li><a href="#bgo">Sistemas</a></li>
            <li><a href="#areas">Áreas</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#cnt">Contacto</a></li>
            <li><div class="divider"></div></li>
            <li><a class="subheader">Subheader</a></li>
          </ul>
  
          <div class="container">
            <p className="Slogan" id="text">
              Ejectuamos ideas geniales.
            </p>
            <div class="left">
              <button  className="ibutton" id="bs" >
                <a href="#WR">¡Descubre más!</a>
              </button>
            </div>
            <div class="right">
              <div id="img" className="img">
                <img class="img" src="/IMG/Direccion de Arte.png"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="WR" id='WR'>
          <div className="ball a"></div>
          <div className="ball b"></div>
          <div className="ball c"></div>
          <div className="ball d"></div>
          <div className="ball e"></div>
          <div className="ball f"></div>
          <div className="ball g"></div>
          <div className="grid_who">
            <div class="center-align">
              <h1 className="WRT">¿Quiénes somos?</h1>
            </div>
            <div class="center-align">
              <p className="WRp">Se pone infromación recumida del club</p>
            </div>
            <div class="row">
              <div>
                <video
                  class="responsive-video"
                  autoplay
                  className="WRi"
                  src="/IMG/WidePutin.mp4"
                  controls
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>

        <div className="WD" id="portafolio">
          <div className="grid_who">
            <div class="center-align">
              <h1 className="WRT">¿Quieres saber qué hacemos?</h1>
            </div>
            <div class="center-align">
              <p className="WDp">¡Échale un vistazo a nuestro trabajo!</p>
            </div>
            <div class="row" id='first'>
              <div class="center-align" className="center">
                <ul class="collapsible">
                  <li>
                    <div class="collapsible-header #dd2c00 deep-orange accent-4 white-text">
                      <i class="material-icons">slideshow</i>YouTube
                    </div>
                    <div class="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header  #01579b light-blue darken-4 white-text">
                      <i class="material-icons">thumb_up</i>Facebook
                    </div>
                    <div class="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header #aa00ff purple accent-4 white-text">
                      <i class="material-icons">photo_camera</i>Instagram
                    </div>
                    <div class="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header #212121 grey darken-4 white-text">
                      <i class="material-icons">code</i>GitHub
                    </div>
                    <div class="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header #80d8ff light-blue accent-1 white-text">
                      <i class="material-icons">view_carousel</i>Behance
                    </div>
                    <div class="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         </div>

          <div className="STo" id="Historias">
            <div className="grid_who">
              <div class="center-align">
                <h1 className="StoT">Historias de personas</h1>
              </div>
              <div class="row">
              <div class="col s12 l4" id='h1'>
                  <div className="Hbox" > 
                    <div class="center-align">
                    <div id="himg1">
                    <img  className="Himg"  src="/IMG/emerson.png"></img>
                    </div>
                      <div className="hTitleBox" >
                        <h3 id="hn1">Emerson</h3>
                      </div>
                      <div id="ht1">
                      <h3 className="hTextBox"  >
                      Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                      herramientas y soluciones reales en tiempos record.</h3>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col s12 l4" id='h2'>
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align" >
                  <div id="himg2">
                    <img className="Himg " src="/IMG/advisicon.png"></img>
                    </div>
                    <div className="hTitleBox" >
                        <h3 id="hn2">Advisicon</h3>
                    </div>
                    <div id="ht2">
                    <h3 className="hTextBox" >
                    Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                    herramientas y soluciones reales en tiempos record.</h3>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4" id='h3'>
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align"  >
                 <div id="himg3">
                    <img className="Himg" src="/IMG/Microsoft.png"></img>
                    </div>
                      <div className="hTitleBox">
                        <h3 id="hn3" >Microsoft</h3>
                      </div>
                      <div id="ht3">
                        <h3 className="hTextBox"  >
                        Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                        herramientas y soluciones reales en tiempos record.</h3>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4"  id='h4'>
                  <div className="Hbox"> 
                    <div class="center-align">
                    <div id="himg4">
                    <img  className="Himg"  src="/IMG/emerson.png"></img>
                    </div>
                      <div className="hTitleBox" >
                        <h3 id="hn4">Amazon</h3>
                      </div>
                      <div id="ht4">
                      <h3 className="hTextBox"  >
                      Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                      herramientas y soluciones reales en tiempos record.</h3>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col s12 l4" id='h5'>
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align" >
                  <div id="himg5">
                    <img className="Himg " src="/IMG/advisicon.png"></img>
                    </div>
                    <div className="hTitleBox" >
                        <h3 id="hn5">Blizzard</h3>
                    </div>
                    <div id="ht5">
                    <h3 className="hTextBox" >
                    Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                    herramientas y soluciones reales en tiempos record.</h3>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4" id='h6'>
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align"  >
                 <div id="himg6">
                    <img className="Himg" src="/IMG/Microsoft.png"></img>
                    </div>
                      <div className="hTitleBox">
                        <h3 id="hn6" >MINAE</h3>
                      </div>
                      <div id="ht6">
                        <h3 className="hTextBox"  >
                        Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                        herramientas y soluciones reales en tiempos record.</h3>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4" id='h7'>
                  <div className="Hbox" > 
                    <div class="center-align">
                    <div id="himg7">
                    <img  className="Himg"  src="/IMG/emerson.png"></img>
                    </div>
                      <div className="hTitleBox" >
                        <h3 id="hn7">CDB</h3>
                      </div>
                      <div id="ht7">
                      <h3 className="hTextBox"  >
                      Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                      herramientas y soluciones reales en tiempos record.</h3>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col s12 l4" id='h8'>
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align" >
                  <div id="himg8">
                    <img className="Himg " src="/IMG/advisicon.png"></img>
                    </div>
                    <div className="hTitleBox" >
                        <h3 id="hn8">EY</h3>
                    </div>
                    <div id="ht8">
                    <h3 className="hTextBox" >
                    Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                    herramientas y soluciones reales en tiempos record.</h3>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4" id='h9'>
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align"  >
                 <div id="himg9">
                    <img className="Himg" src="/IMG/Microsoft.png"></img>
                    </div>
                      <div className="hTitleBox">
                        <h3 id="hn9" >Caprhizza</h3>
                      </div>
                      <div id="ht9">
                        <h3 className="hTextBox"  >
                        Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                        herramientas y soluciones reales en tiempos record.</h3>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div>
              <div class="left-lign">
                <button className="back" id="hback" onClick={() => this.hback(-3)}>
                <i class="medium material-icons">keyboard_arrow_left</i></button>
              </div>
              </div>
              <div>
              <div class="right-align">
              <button className="next" id="hnext" onClick={() => this.hback(3)}>
              <i class="medium  material-icons">keyboard_arrow_right</i>
                    
                  </button>
                
              </div>
              </div>
          </div>
          
          <div className="OS" id="bgo">
          <div className="grid_who">
            <div id="atra" className="atras">
              <button
                class="center-align white-text"
                className="ab"
                onClick={() => this.back()}
              >
                <i class="material-icons medium white-text left">
                  chevron_left
                </i>
                {this.state.SystemName}
              </button>
            </div>
            <div class="center-align" id="T">
              <h1 className="OST">Nuestros Sistemas</h1>
            </div>
            <div class="center-align" id="t">
              <h1 className="OSP">
                ¡Dale click a algunos de nuestros sistemas para descubrir más!
              </h1>
            </div>

            <button className="EDA" id="EDA" onClick={() => this.OS(0)}>
              <div class="center-align">
                <p className="OSe">E.D.A</p>
              </div>
            </button>
            <button className="AP" id="AP" onClick={() => this.OS(1)}>
              <div class="center-align">
                <p className="OSp">Agentes de Producción</p>
              </div>
            </button>
            <button className="KP" id="KP" onClick={() => this.OS(2)}>
              <div class="center-align">
                <p className="OSp">KARMA PAPERS</p>
              </div>
            </button>
            <button className="MP" id="MP" onClick={() => this.OS(3)}>
              <div class="center-align">
                <p className="OSp">Marco de Producción</p>
              </div>
            </button>
           </div>
          </div> 

          <div className="Areas" id="areas">
            <div class="center-align">
              <p id="AreasT" >Áreas</p>
            </div>
            <div class="row" >
              <div class="col s12 l4">
                <div class="center-align"> 
                  <buttom className="Abox" id="ci" onClick={() => this.OS(5)}> 
                    <div class="center-align">
                    <img className="Aimg" src="/IMG/Direccion de Ciencia.png"></img>
                      <div className="aTitleBox">
                        <h3>Ciencia</h3>
                      </div>
                      <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                      <button className="Abutton" onClick={() => this.OS(5)} >¡Descubre más!</button>
                    </div>
                  </buttom>
                </div>
              </div>
              <div class="col s12 l4">
                <div class="center-align">
                  <buttom className="Abox"  id="ig" onClick={() => this.OS(6)}>
                  <div class="center-align">
                    <img className="Aimg" src="/IMG/Direccion de Ingenieria.png"></img>
                    <div className="aTitleBox">
                        <h3>Ingenieria</h3>
                    </div>
                    <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                    <button className="Abutton" onClick={() => this.OS(6)} >¡Descubre más!</button>
                  </div>
                  </buttom>
                </div>
              </div>
              <div class="col s12 l4">
                <div class="center-align">
                <buttom className="Abox" id="ds" onClick={() => this.OS(7)} >
                  <div class="center-align" >
                    <img className="Aimg" src="/IMG/Direccion de Desarrollo Sostenible.png"></img>
                      <div className="aTitleBox" >
                        <h3 id="DS">Desarrollo Sostenible</h3>
                      </div>
                        <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                        <button className="Abutton" onClick={() => this.OS(7)} >¡Descubre más!</button>
                    </div>
                  </buttom>
                </div>
              </div>
              <div class="col s12  l2">

              </div>
              <div class="col s12  l4">
                <div class="center-align">
                  <buttom className="Abox" id="ar" onClick={() => this.OS(8)}>
                  <div class="center-align" >
                    <img className="Aimg" src="/IMG/Direccion de Arte.png"></img>
                    <div className="aTitleBox">
                        <h3>Arte</h3>
                    </div>
                    <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                    <button className="Abutton" onClick={() => this.OS(8)}>¡Descubre más!</button>
                  </div>
                  </buttom>
                </div>
              </div>
              <div class="col s12  l4 ">
                <div class="center-align">
                  <buttom className="Abox" id="li" onClick={() => this.OS(9)}>
                  <div class="center-align" >
                    <img className="Aimg" src="/IMG/Direccion de Liderazgo.png"></img>
                    <div className="aTitleBox" >
                      <h3>Liderazgo</h3>
                    </div>
                      <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                      <button className="Abutton" onClick={() => this.OS(9)}>¡Descubre más!</button>
                  </div>
                  </buttom>
                </div>
              </div>
            </div>
            <div>
              <div class="left-lign">
                <button className="back" id="back" onClick={() => this.aback()}>
                <i class="medium material-icons">keyboard_arrow_left</i></button>
              </div>
              </div>
              <div>
              <div class="right-align">
                <button className="next" id="next" onClick={() => this.anext()}>
                  <div class="hide-on-med-and-down">
                    <i class="medium material-icons">keyboard_arrow_right</i>
                  </div>
                </button>
              </div>
              </div>
            </div>

            <div className="Gal" id="galeria">
            <div class="center-align">
              <p id="AreasT">Galeria</p>
            </div>
        <div className="row1">
        <div className="column1">

        <img style={{width:'100%'}} src="/IMG/IMG5.jpg"></img>
        <img style={{width:'100%'}} src="/IMG/IMG2.jpg"></img>

        </div>

        <div className="column1">
        <img style={{width:'100%'}} src="/IMG/IMG6.jpg"></img>



         </div>

        <div className="column1">
        <img style={{width:'100%'}} src="/IMG/IMG2.jpg"></img>
        <img style={{width:'100%'}} src="/IMG/IMG1.jpg"></img>


        </div>

        <div className="column1">
        <img style={{width:'100%'}} src="/IMG/IMG4.jpg"></img>
        <img style={{width:'100%'}} src="/IMG/IMG4.jpg"></img>
       
  
</div>

        </div> 



            
            </div>
            
            <div className="CNT" id="cnt">
        <div class="center-align">
              <p class="WRT" >¿Quieres contribuir a cambiar el mundo?</p>
            </div>
          <div className="cnt">
          <div class="center-align">
              <p className="WRT" >¡Contáctenos!</p>
            </div>
  <form class="row" onSubmit={this.handleSubmit}>
    <div class="col s12">
      <div class="row cadr-panel">
        <div class="input-field col s12 l6 ">
          <input id="first_name" placeholder="" type="text"  class="validate" value={this.state.name} onChange={this.handleChange} required></input>
          <label for="first_name" className="cntT">Nombre</label>
        </div>
        <div class="input-field col s12 l6 ">
          <input id="email" placeholder="" type="email"  class="validate" value={this.state.email} onChange={this.handleChange1} required></input>
          <label for="email" className="cntT">Email</label>
        </div>
      </div>
      <div class="row">
      <div  class="input-field col s12 l6  validate">
    <select class="select-in validate" value={this.state.select} onChange={this.handleChange2}>
      <option disabled selected>Choose your category</option>
      <option class="validate" value="Option 1" >Option 1</option>
      <option class="validate" value="Option 2" >Option 2</option>
      <option class="validate" value="Option 3" >Option 3</option>
    </select>
  </div>
  </div>
      <div class="row">
      <div class="input-field col s12 ">
          <input id="textarea1" placeholder="" type="text" class="materialize-textarea validate" value={this.state.text} onChange={this.handleChange3}></input>
          <label for="textarea1" className="cntT">Textarea</label>
        </div>
      </div>
      <div class="row">
      <div class="center-align">
      <button  class="btn waves-effect waves-light  cyan accent-3" id="submit" type="submit" name="action">Enviar
    <i class="material-icons right">send</i>
  </button>
  </div>
      </div>
    </div>
  </form>
  </div>
        </div>

        <div className="footer">

        </div>

    </div>
       
    );
  }
}

ReactDOM.render(<SkemCW />, document.getElementById("app"));