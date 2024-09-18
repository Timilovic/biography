// let button = document.querySelector("button");

// button.addEventListener("click", function () {alert(new Date());

// });

document.getElementById('button').addEventListener('click', function() {
    // Change content in the <h4> tag
    document.querySelector('#dev h4').textContent = 'Front-End Web Developer | Freelancer';
    
    // Change content in the <p> tag (location)
    document.getElementById('ab').textContent = 'Abeokuta, Ogun State, Nigeria';

    // Change the content in the <p> tag under the main section
    document.getElementById('ch').textContent = 
        'is a skilled front-end web developer, specializing in creating responsive and user-friendly websites and web applications. Based in Abeokuta, Ogun State, Nigeria, Timilehin has honed his expertise in HTML, CSS (including Grid and Flexbox layouts), and JavaScript, frequently using frameworks like Bootstrap to bring visually appealing designs to life.';
    
    document.querySelector('.bio').textContent = 'Biography' ;
    document.querySelector('Skills')
});
 