const linksSection = links.map(link => {
  return `
    <a href="${link.link}" target="_blank">
        <img class="about-links-img" src="${link.img}" alt="${link.name}">
    </a>`;
}).concat();

const introSection = `
<section class="section-intro">
  <div class="container">
      <div class="content">                 
          <div class="about-photo">
              <img src="img/profile.jpg"/>
          </div>
          <div class="about-text text-no-focus">
              <h1 class="text-title text-title-h1">I'm Willian,</h1>
              An Experienced <strong>Staff Software Engineer</strong> specialized in <strong>Software Architecture</strong>, <strong>Cloud</strong>, <strong>Security</strong> and <strong>DevOps</strong>.
              <p>I'm <strong>experienced</strong> in <strong>all phases</strong> of software development - from <strong>design</strong> to <strong>monitoring</strong> - having built scalable services for
              companies all over <strong>America</strong>, the <strong>UK</strong> and <strong>Brazil</strong>.</p>
              <p>Skills: <strong>APIs</strong>, Kong and Apigee, <strong>Java</strong>, <strong>TypeScript</strong> and <strong>Go</strong>, Redis, MongoDB, <strong>Linux & Kubernetes</strong>, GitOps & CI/CD (Jenkins, ArgoCD)</p>
          </div>                
      </div>
      <div>
          ${linksSection}
      </div>
  </div> 
</section>
 `