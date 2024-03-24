// JavaScript for generating certifications and internship dynamically
document.addEventListener("DOMContentLoaded", function() {
    var certificates = [
        "AWS_Academy_Graduate___AWS_Academy_Cloud_Architecting_Badge20240211-29-97cp2e",
        "AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240212-29-eg66ic",
        "Infosys_Computer_Vision_101",
        "Introduction_to_Artificial_Intelligence",
        "Introduction_to_Data_Science",
        "Introduction_to_Deep_Learning",
        "Introduction_to_Natural_Language_Processing",
        "Wordpress_Beyond_Basics",
        "Udemy_Linux_Using_Ubuntu20x",
        "Udemy_SQL_by_PostgreSQL",
        "Solo_Learn_Web_Development"
        // Add other certificate names here
    ];

    var internships = [
        "cloud_virtual_intern"
    ];

    var ulCertifications = document.querySelector('.certifications ul');
    certificates.forEach(function(certName) {
        createCertificationItem(certName, ulCertifications);
    });

    var ulInternships = document.querySelector('.Internship');
    internships.forEach(function(internshipName) {
        createCertificationItem(internshipName, ulInternships);
    });
});

function createCertificationItem(name, parentElement) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.textContent = 'View Certificate';
    button.className = 'green-btn';
    button.onclick = function() {
        viewCertificate(name);
    };
    li.textContent = name;
    li.appendChild(button);
    parentElement.appendChild(li);
}

function viewCertificate(certName) {
    window.open(`${certName}.pdf`, '_blank');
}
