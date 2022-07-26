import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })



      var achievements = this.props.data.achievements.map(function(achievements){
        var achievementsImage = 'images/portfolio/'+achievements.image;
        return <div key={achievements.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={achievements.url} title={achievements.title}>
               <img alt={achievements.title} src={achievementsImage} width="500" height="600"  />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{achievements.title}</h5>
                     <p>{achievements.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })


      var courses = this.props.data.courses.map(function(courses){
        var coursesImage = 'images/portfolio/'+courses.image;
        return <div key={courses.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={courses.url} title={courses.title}>
               <img alt={courses.title} src={coursesImage} width="500" height="600"  />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{courses.title}</h5>
                     <p>{courses.category}</p>
                  </div>courses
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            {/* Achievements */}
            <h1>Check Out Some of My Achievements.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {achievements}
            </div>

            {/* Projects */}
            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>


            {/* Courses */}
            <h1>Check Out Some of My Courses.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {courses}
            </div>



          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
