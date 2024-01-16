document.addEventListener('DOMContentLoaded', function () {
    var toggleDetailsButton = document.getElementById('toggleDetails');
    var detailsParagraph = document.getElementById('detailsParagraph');
    var backToMainButton = document.getElementById('backToMain');

    toggleDetailsButton.addEventListener('click', function () {
        detailsParagraph.classList.toggle('hidden');
        toggleDetailsButton.classList.add('hidden'); 
    });

    backToMainButton.addEventListener('click', function () {
        detailsParagraph.classList.add('hidden');
        toggleDetailsButton.classList.remove('hidden'); 
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var skillsDetailsButton = document.getElementById('skillsDetails');
    var detailskillsParagraph = document.getElementById('detailskills');
    var back = document.getElementById('back');

    skillsDetailsButton.addEventListener('click', function () {
        detailskillsParagraph.classList.toggle('hidden');
        skillsDetailsButton.classList.add('hidden'); 
    });

    back.addEventListener('click', function () {
        detailskillsParagraph.classList.add('hidden');
        skillsDetailsButton.classList.remove('hidden'); 
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var projectDetailsButton = document.getElementById('projectDetails');
    var projectParagraph = document.getElementById('project');
    var backButton = document.getElementById('back');

    projectDetailsButton.addEventListener('click', function () {
        projectParagraph.classList.toggle('hidden');
        ProjectDetailsButton.classList.add('hidden'); 
    });

    backButton.addEventListener('click', function () {
        projectParagraph.classList.add('hidden');
        projectDetailsButton.classList.remove('hidden'); 
    });
    // Show.addEventListener('click',function(){
       
    // });
});
document.addEventListener('DOMContentLoaded', function () {
    var contactDetailsButton = document.getElementById('contactDetails');
    var contactParagraph = document.getElementById('contact');
    var backButton = document.getElementById('back');

    contactDetailsButton.addEventListener('click', function () {
        contactParagraph.classList.toggle('hidden');
        contactDetailsButton.classList.add('hidden'); 
    });

    backButton.addEventListener('click', function () {
        contactParagraph.classList.add('hidden');
        contactDetailsButton.classList.remove('hidden'); 
    });
});

