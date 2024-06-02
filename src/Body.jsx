import React,{useState} from "react";
import "./Body.css";
function Body(){
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [imageUrl,setImageUrl] = useState("image_four.jpg");
  const [allowed,changeAllowed] = useState(false);
    return (
        <div className="main pt-5 mt-5">
        <div className="section-one">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 d-flex flex-column justify-content-center">
                      <div className="heading">
                      <h3>AWARD WINNING</h3>
                        <h1 className="mt-3">DIGITAL MARKETING AGENCY</h1>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum quidem. Sapiente id sed temporibus a nisi dolore quisquam quasi, mollitia ex velit unde quidem laboriosam dolor doloribus. Dolor, blanditiis.</p>
                        <div className="lower mt-5 mb-5">
                    <button type="button" class="btn btn-danger lowers p-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contact Us</button>
                        </div>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <h2 class="modal-title fs-5 px-4 pt-4" id="exampleModalLabel">Talk To Us</h2>
      <div class="modal-body">
        <form action="https://getform.io/f/pbnvgylb" method="POST">
          <div className="fir p-3">
        <div class="form-floating mb-2">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email"/>
      <label for="floatingInput">Work Email*</label>
       </div>
       </div>
       <div className="row p-3">
        <div className="col-md-6">
        <div class="form-floating mb-2">
      <input type="text" class="form-control" id="floatingInput" placeholder="name" name="firstName"/>
      <label for="floatingInput">First Name*</label>
       </div>
        </div>
        <div className="col-md-6">
        <div class="form-floating mb-2">
      <input type="text" class="form-control" id="floatingInput" placeholder="lastName" name="lastName"/>
      <label for="floatingInput">Last Name*</label>
       </div>
        </div>
       </div>
       <div className="px-3">
       <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" onClick={()=>{changeAllowed(prev=>{if(prev==true){return false;}else{return true}})}}/>
      <label class="form-check-label" for="flexCheckDefault" >
      I agree to Fyle's terms and conditions, and provide consent to send me communication.
      </label>
    </div>
    </div>
    <div class="col-md-12 p-3">
        <button type="submit" class={allowed==true?"btn col-md-12 text-white":"btn col-md-12 text-white disabled"} style={{fontSize:"20px"}}>Contact Us</button>
      </div>
        </form>
    </div>
  </div>
</div>
</div>                     </div>
                    </div>
                    <div className="col-md-5">
                        <img src="hero.png" alt="" width="370"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="section-two bg-body-tertiary mt-5">
                <div className="container pt-5 mt-5">
                    <div className="heading-two">
                        <h4>WHAT WE DO</h4>
                    </div>
                    <div className="row d-flex justify-content-between pe-5">
                        <div className="col-md-4 pt-2">
                            <h1 className="heading-main">SERVICES PROVIDED FOR YOU</h1>
                        </div>
                        <div className="col-md-6 me-5 pe-5">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem illum nam ipsam? Exercitationem reprehenderit delectus enim officiis alias eius consequatur tempore hic similique, itaque atque officia sapiente officia sapiente?</p>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 mb-5">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="row">
                    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                       <img src="hero_one.jpg" alt="" width="320" height="485"className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                       <img src="hero_two.jpg" alt="" width="320" height="485" className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                      <img src="hero_three.jpg" alt="" width="320" height="485"className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3">
                    <img src="hero_four.png" alt="" width="320" height="485"className="rounded-3"/>
                    </div>
                  </div>
    </div>
    <div class="carousel-item">
    <div className="row">
    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                      <img src="hero_five.jpg" alt="" width="320" height="485"className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                      <img src="hero_six.jpg" alt="" width="320" height="485"className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                       <img src="hero.png" alt="" width="320" className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>

                    </div>
                    <div className="col-md-3">
                      <img src="hero.png" alt="" width="320"/>
                    </div>  
                  </div>
    </div>
    <div class="carousel-item">
    <div className="row">
    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                      <img src="hero_four.png" alt="" width="320" height="485"className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                      <img src="hero_three.jpg" alt="" width="320" height="485"className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3 flip-card">
                      <div className="inner-card">
                      <div className="flip-card-front">
                       <img src="hero.png" alt="" width="320" className="rounded-3"/>
                       </div>
                       <div class="flip-card-back card p-4 d-flex flex-column justify-content-center ">
                        <div className="d-grid gap-3 text-white">
                          <div >
                          <img src="icon.svg" alt="" /></div>
      <h1>WEB DEVELOPMENT</h1>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <div>
      <button type="button" class="btn btn-light text-white bg-light w-75 rounded-0">READ MORE<img src="arrow.svg" width=""/></button>
      </div>
      </div>
    </div>
    </div>
                    </div>
                    <div className="col-md-3">
                      <img src="hero.png" alt="" width="320" />
                    </div>
                  </div>
    </div>
  </div>
  <div className="container cs row pb-4 pt-4" >
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</div>
<div className="container mb-3">
<div className="text-center jss pt-5">
<h3>WHY CHOOSE US</h3>
<h1 className="mt-4">WHY WE ARE BEST</h1>
</div>
<div class="container px-4 features" id="featured-3">
    <div class="row g-4 py-5">
      <div class="feature col-md-3">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
          <img src="1.svg" class="bi"/>
        </div>
        <h3 class="fs-2 text-body-emphasis">Clarified Vision & Target</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
      </div>
      <div class="feature col-md-3">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
          <img src="2.svg" class="bi"/>
        </div>
        <h3 class="fs-2 text-body-emphasis">High Performance</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy..</p>

      </div>
      <div class="feature col-md-3">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
          <img src="3.svg" class="bi"/>
        </div>
        <h3 class="fs-2 text-body-emphasis">Maintain Security</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

      </div>
      <div class="feature col-md-3">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
          <img src="4.svg" class="bi"/>
        </div>
        <h3 class="fs-2 text-body-emphasis">Better Strategy & Quality</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
      </div>
    </div>
  </div>
</div>
<div className="container mb-5">
<div className="text-center jss">
<h3>OUR PROJECT</h3>
<h1 className="mt-4">WHY WE ARE BEST</h1>
</div>
<div className="row mt-4 mb-5 d-flex justify-content-between ps-3 pe-3">
  <div className="col-md-8">
     <img className="w-100 rounded-2" src={imageUrl} alt="" height="595"/>
  </div>
  <div className="col-md-4 text-center d-grid gap-1">
    <div className={activeContentIndex === 0 ? "actives rounded-4 p-4 me-5" : "box bg-body-tertiary rounded-4 p-4 me-5"}onClick={()=>{setActiveContentIndex(0);setImageUrl("image_four.jpg")}}>
      <div className="headings ">
        <h5>Genderless Kei – Japan’s Hot</h5>
        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ass</p>
      </div>

    </div>
    <div className={activeContentIndex === 1 ? "actives rounded-4 p-4 me-5" : "box bg-body-tertiary rounded-4 p-4 me-5"} onClick={()=>{setActiveContentIndex(1);setImageUrl("image_two.jpg")}}>
      <div className="headings d-flex flex-column" style={{gap:"5px"}}>
        <h5>Better Strategy & Quality</h5>
        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ass</p>
      </div>

    </div>
    <div className={activeContentIndex === 2 ? "actives box rounded-4 p-4 me-5" : "box bg-body-tertiary rounded-4 p-4 me-5"} onClick={()=>{setActiveContentIndex(2);setImageUrl("image_three.jpg")}}>
      <div className="headings">
        <h5>Genderless Kei – Japan’s Hot</h5>
        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ass</p>
      </div>
    </div>
    
  </div>
</div>
</div>
<div className="section-two bg-body-tertiary pt-5 pb-5">
<div className="container pt-5 pb-5">
<div className="text-center jss mb-5">
<h3>EXPERTS GROWTH</h3>
<h1 className="mt-4">OUR COMPANY GROWTH</h1>
</div>
<div className="row pe-5 me-3 ps-4 d-flex justify-content-between">
  <div className="col-md-3 text-center">
    <div className="col-md-11 bg-white ps-5 pe-5 pt-4 pb-4 cards">
    <div className="logo">
      <img src="heart (2).png" alt="" />
    </div>
    <div className="body">
      <h1>199+</h1>
      <p>satisfied customer</p>
    </div>
  </div>
  </div>
  <div className="col-md-3 text-center">
    <div className="col-md-11 bg-white ps-5 pe-5 pt-4 pb-4 cards">
    <div className="logo">
      <img src="Path 4406.png" alt="" />
    </div>
    <div className="body">
      <h1>75+</h1>
      <p>Win Awards</p>
    </div>
  </div>
  </div>
  <div className="col-md-3 text-center">
    <div className="col-md-11 bg-white ps-5 pe-5 pt-4 pb-4 cards">
    <div className="logo">
      <img src="Path 4402.png" alt="" />
    </div>
    <div className="body">
      <h1>283+</h1>
      <p>Complete Project</p>
    </div>
  </div>
  </div>
  <div className="col-md-3 text-center">
    <div className="col-md-12 bg-white ps-5 pe-5 pt-4 pb-4 cards">
    <div className="logo">
      <img src="clock (3).png" alt="" />
    </div>
    <div className="body">
      <h1>1591+</h1>
      <p>Days of Work</p>
    </div>
  </div>
  </div>
</div>
</div>
</div>
<div className="container pt-5 mt-5">
<div className="text-center jss mb-5">
<h3>CLIENT'S FEEDBACK</h3>
<h1 className="mt-3 bold">PEOPLE SAY'S ABOUT US</h1>
</div>
<div className="text-start jssm pt-2 d-flex flex-column justify-content-center align-items-center">
<p style={{width:"50vw"}}>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
<p className="text-start"><span className="changeColor">JANNAT TUMPA</span>- COO, AMERIMAR ENTERPRISES, INC.</p>
</div>
</div>
</div>
    )
}
export default Body;