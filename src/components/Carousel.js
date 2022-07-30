import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.mathworks.com/campaigns/offers/text-analytics-with-matlab-white-paper/_jcr_content/backgroundImage.adapt.full.medium.jpg/1588573896923.jpg" class="d-block w-100" alt="1s"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Learn Coding</h5>
          <p>Confused on which course to take? I have got you covered. <br/>Browse courses and find out the best course
            for
            you. Its free!</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Show your skills</h5>
          <p>Good concentration skills and always prepared.<br/> Anticipate problems and deal quickly with them. </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./components/thinking-out-cloud-1600x400.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Always a Good Learner</h5>
          <p>This is about making the new knowledge fit with what the learner already knows, not making it mean whatever
            the learner wants.<br/> Good learners change their knowledge structures in order to accommodate what they are
            learning</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}
