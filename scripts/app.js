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
class SkemCW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      isUserUsingSystems: false,
      systemPosition: 0,
      SystemName: "",
    };
  }
  componentDidMount() {
    let indexOfColor = 0;
    changeColor(indexOfColor);
    ret();
    this.aback();
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
              <a href="#" class="brand-logo">
                SKEMClub
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down black-text">
                <li>
                  <a href="index.html">Inicio</a>
                </li>
                <li>
                  <a class="dropdown-trigger " href="#" data-target="dropdown1">
                    <i class="material-icons white-text right">keyboard_arrow_down</i>
                    Areas
                  </a>

                  <ul id="dropdown1" class="dropdown-content transparent">
                    <li class="transparent xd">
                      <a class="white-text" href="#!">
                        <i class="material-icons white-text">folder</i>
                        Portafolio
                      </a>
                    </li>
                    <li class="transparent">
                      <a class="white-text" href="#">
                        <i class="material-icons white-text">view_module</i>Área
                      </a>
                    </li>
                    <li class="transparent">
                      <a class="white-text" href="#">
                        <i class="material-icons white-text">import_contacts</i>
                        Historias
                      </a>
                    </li>
                    <li class="transparent">
                      <a class="white-text" href="#Sistemas">
                        <i class="material-icons white-text">cloud</i>Sistemas
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=".html">Galeria</a>
                </li>
                <li>
                  <a href="sass.html">Contacto</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="container">
            <p className="Slogan" id="text">
              Ejectuamos ideas geniales.
            </p>
            <div class="left">
              <button  className="ibutton" id="bs">
                ¡Descubre más!
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
          <div id="grid_who">
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

        <div className="WD">
          <div id="grid_who">
            <div class="center-align">
              <h1 className="WRT">¿Quieres saber qué hacemos?</h1>
            </div>
            <div class="center-align">
              <p className="WDp">¡Échale un vistazo a nuestro trabajo!</p>
            </div>
            <div class="row">
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
            <div id="grid_who">
              <div class="center-align">
                <h1 className="StoT">Historias de personas</h1>
              </div>
              <div class="row">
              <div class="col s12 l4">
                  <div className="Hbox"> 
                    <div class="center-align">
                    <img  className="Himg" src="/IMG/emerson.png"></img>
                      <div className="hTitleBox">
                        <h3>Emerson</h3>
                      </div>
                      <h3 className="hTextBox" >
                      Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                      herramientas y soluciones reales en tiempos record.</h3>
                    </div>
                  </div>
              </div>
              <div class="col s12 l4">
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align">
                    <img className="Himg " src="/IMG/advisicon.png"></img>
                    <div className="hTitleBox">
                        <h3>Advisicon</h3>
                    </div>
                    <h3 className="hTextBox" >
                    Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                    herramientas y soluciones reales en tiempos record.</h3>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4">
                <div class="center-align">
                  <div className="Hbox" >
                  <div class="center-align" >
                  <div >
                    <img className="Himg" src="/IMG/Microsoft.png"></img>
                    </div>
                      <div className="hTitleBox" >
                        <h3 >Microsoft</h3>
                      </div>
                        <h3 className="hTextBox" >
                        Trabajar con el club ha sido una experiencia agradable, los/las chicos(as) trabajan con mucha dedicación por crear 
                        herramientas y soluciones reales en tiempos record.</h3>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
          </div>
          
          <div className="OS" id="bgo">
          <div id="grid_who">
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

          <div className="Areas">
            <div class="center-align">
              <p id="AreasT" >Áreas</p>
            </div>
            <div class="row" >
              <div class="col s12 l4">
                <div class="center-align"> 
                  <div className="Abox" id="ci"> 
                    <div class="center-align">
                    <img className="Aimg" src="/IMG/Direccion de Ciencia.png"></img>
                      <div className="aTitleBox">
                        <h3>Ciencia</h3>
                      </div>
                      <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                      <button className="Abutton" onClick={() => this.OS(5)} >¡Descubre más!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4">
                <div class="center-align">
                  <div className="Abox"  id="ig">
                  <div class="center-align">
                    <img className="Aimg" src="/IMG/Direccion de Ingenieria.png"></img>
                    <div className="aTitleBox">
                        <h3>Ingenieria</h3>
                    </div>
                    <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                    <button className="Abutton" onClick={() => this.OS(6)} >¡Descubre más!</button>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col s12 l4">
                <div class="center-align">
                  <div className="Abox" id="ds">
                  <div class="center-align" >
                    <img className="Aimg" src="/IMG/Direccion de Desarrollo Sostenible.png"></img>
                      <div className="aTitleBox" >
                        <h3 id="DS">Desarrollo Sostenible</h3>
                      </div>
                        <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                        <button className="Abutton" onClick={() => this.OS(7)} >¡Descubre más!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s12  l2">

              </div>
              <div class="col s12  l4">
                <div class="center-align">
                  <div className="Abox" id="ar">
                  <div class="center-align" >
                    <img className="Aimg" src="/IMG/Direccion de Arte.png"></img>
                    <div className="aTitleBox">
                        <h3>Arte</h3>
                    </div>
                    <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                    <button className="Abutton" onClick={() => this.OS(8)}>¡Descubre más!</button>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col s12  l4 ">
                <div class="center-align">
                  <div className="Abox" id="li">
                  <div class="center-align" >
                    <img className="Aimg" src="/IMG/Direccion de Liderazgo.png"></img>
                    <div className="aTitleBox" >
                      <h3>Liderazgo</h3>
                    </div>
                      <h3 className="aTextBox" >Andre perdon por ser tan rico :3</h3>
                      <button className="Abutton" onClick={() => this.OS(9)}>¡Descubre más!</button>
                  </div>
                  </div>
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

            <div className="">
            <div class="center-align">
              <p className="AreasT">Galeria</p>
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
            
            <div className="CNT">
        <div class="center-align">
              <p className="WRT" >¿Quieres contribuir a cambiar el mundo?</p>
            </div>
          <div className="cnt">
          <div class="center-align">
              <p className="WRT" >¡Contáctenos!</p>
            </div>
  <div class="row">
    <div class="col s12">
      <div class="row cadr-panel">
        <div class="input-field col s12 l6">
          <input id="first_name" type="text"  class="validate" required></input>
          <label for="first_name">Nombre</label>
        </div>
        <div class="input-field col s12 l6">
          <input id="email" type="email"  class="validate" required></input>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
      <div  class="input-field col s12 l6">
    <select class="select-in" >
      <option   disabled selected>Choose your category</option>
      <option id="t" >Option 1</option>
      <option id="t" value="2">Option 2</option>
      <option  id="t" value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>
  </div>
      <div class="row">
      <div class="input-field col s12 ">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
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
  </div>
  </div>
        </div>

        <div className="footer">

        </div>

    </div>
       
    );
  }
}

ReactDOM.render(<SkemCW />, document.getElementById("app"));