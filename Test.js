$(document).ready(function() {
	$('.show_popup').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        },
        removalDelay : 300,
        mainClass : 'mfp-fade',
        
	});
});


let teemArray = [
    {
        photo:"img/team_1.jpg",
        name: 'Irina Miller',
        profession: 'Frontend',
        about:'Loren ipsum is not simply is an action designer random text it has roots in a piece.',
        facebook:'#',
        twitter:'#',
        dribble:'#',
        gmail:'#'
        
    },
    {
        photo:"img/team_2.jpg",
        name: 'Sasha Kalinin',
        profession: 'UI Desiner',
        about:'Loren ipsum is not simply is an action designer random text it has roots in a piece.',
        facebook:'#',
        twitter:'#',
        dribble:'#',
        gmail:'#'
        
    },
    {
        photo:"img/team_3.jpg",
        name: 'Serg Gorely',
        profession: 'Backend',
        about:'Loren ipsum is not simply is an action designer random text it has roots in a piece.',
        facebook:'#',
        twitter:'#',
        dribble:'#',
        gmail:'#'
        
    },
    {
        photo:"img/team_4.jpg",
        name: 'Floves Victory',
        profession: 'Frontend',
        about:'Loren ipsum is not simply is an action designer random text it has roots in a piece.',
        facebook:'#',
        twitter:'#',
        dribble:'#',
        gmail:'#'
        
    },
    {
        photo:"img/team_5.jpg",
        name: 'Fabios Tadeush',
        profession: 'QA',
        about:'Loren ipsum is not simply is an action designer random text it has roots in a piece.',
        facebook:'#',
        twitter:'#',
        dribble:'#',
        gmail:'#'
        
    },
    {
        photo:"img/team_1.jpg",
        name: 'Irina Miller',
        profession: 'Frontend',
        about:'Loren ipsum is not simply is an action designer random text it has roots in a piece.',
        facebook:'#',
        twitter:'#',
        dribble:'#',
        gmail:'#'
        
    },
];


let ourTeem = document.querySelector('.our__teem');



for (let item of teemArray) {
    ourTeem.innerHTML += `  
    <div class="model__frame_frame">
        <div class="model__frame">
            <div class="model__frame_inner">
                <p class="model__frame_name">${item.name}
                    <span class="model__frame_prof">/ <span class="model__fram_up">${item.profession}</p>
                <p class="model__frame_about">${item.about}
                </p>
                <a href="${item.facebook}"><i class="fa fa-facebook fac " aria-hidden="true"></i></a>
                <a href="${item.twitter}"><i class="fa fa-twitter twit " aria-hidden="true"></i></a>
                <a href="${item.dribble}"><i class="fa fa-dribbble bribb " aria-hidden="true"></i></a>
                <a href="${item.gmail}"><i class="fa fa-envelope-o post " aria-hidden="true"></i></a>
            </div>    
        </div>
        <img class="teem__img " src="${item.photo}" alt="">    
    </div>`
}




