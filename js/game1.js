// var audio = new Audio();

// audio.src='media/gun.mp3';

// function play() {
// 	audio.play();
// }

// function pause() {
// 	audio.pause();
// }




//for Back To top 

const toTop = document.querySelector('.to-top');
window.addEventListener('scroll',function(){
	if(window.pageYOffset > 100){
		toTop.classList.add('active');
	}else{
		toTop.classList.remove('active');
	}
});




//For Navlink Active Status
let list = document.querySelectorAll('.nav-link');
list.forEach(a=>{
	a.addEventListener('click',function(){
		list.forEach(a=>a.classList.remove('active'));
		this.classList.add('active');
	});
});

//For Secondary Navlink Status

let secNavList = document.querySelectorAll('.sec-nav-link');
secNavList.forEach(a=>{
	a.addEventListener('click',function(){
		secNavList.forEach(a=>a.classList.remove('secondaryactive'));
		this.classList.add('secondaryactive');
	});
});



//Form Validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const message = document.getElementById('message');



form.addEventListener('submit',function(e){
	 e.preventDefault();
	 checkInputs();
	successMsg();
	
	
});




function sendData(sRate,count) {
	if(sRate === count){
		alert('Message sent Successfully');
		swal("Thank you!", "messege sent Successfully!", "success");
	}
}


function successMsg() {
	let fomcon = document.getElementsByClassName('form-group');
	var count = fomcon.length -1 ;
	for(var i=0;i<fomcon.length;i++){
		if(fomcon[i].className === 'form-group success'){
			var sRate = 0+i;
			console.log(sRate);
			sendData(sRate,count);
		}  
		else{
			return false;
		}
	}
}



function checkInputs(){
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const messageValue = message.value.trim();
	// console.log(usernameValue);


if(usernameValue === "" || usernameValue === null ) {
setErrorFor(username,'**Name cannot be blanked**');

	
}else if(usernameValue.length<=2){
setErrorFor(username,'**length of your name should be minimum 3 character**');

}else if(usernameValue.length>=20){
 setErrorFor(username,'**length of your name should be maximum 20 character**');

	
}else{
	setSuccessFor(username);
}

if(emailValue === "" || emailValue === null){
	setErrorFor(email,'**Email cannot be blanked**');

}else if(!isEmail()){
	setErrorFor(email,'**Please Enter valid Email**');
}else{
	setSuccessFor(email);
}

if(passwordValue === ""|| passwordValue === null ){
	setErrorFor(password,'**Please enter your password**');

}else if(passwordValue.length<=5){
	setErrorFor(password,'**length of your password should be minimum of 6 char**');
}else{
	setSuccessFor(password);
}

if(password2Value === ""|| password2Value === null ){
	setErrorFor(password2,'**please enter your confirm password**');
}else if(passwordValue !== password2Value){
	setErrorFor(password2,'**password does not match**');
}else{
	setSuccessFor(password2);
}

if(messageValue === ""){
	setErrorFor(message,'Please enter your message');
}else if(messageValue.length<=30){
	setErrorFor(message,'Message should be at least 30 character');
}else{
	setSuccessFor(message);
}


function setErrorFor(input,message){
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	small.innerText = message;
	formGroup.className = 'form-group error'; 
}
	function setSuccessFor(input){
		const formGroup = input.parentElement;
		// const Icon  = formGroup.querySelector('.fa-check-circle');
		formGroup.className = 'form-group success';
	}

	function isEmail(){
		var at = emailValue.indexOf('@');
		var dot = emailValue.lastIndexOf('.');

		if(at<1 || dot<at+2 || dot+2>emailValue.length){
			return false;
		}
		return true;
	}


}


// For main page game1
function playVideo(videoId,videoSrc){
	console.log(videoId);
	let video1 = document.getElementById(videoId);
	let times = document.getElementById('fa-times');
	if(video1.style.display = 'none'){
		video1.style.display = 'block';
		
	}else{
		video1.style.display = 'none';
	}
	if(times.style.display = 'none'){  
		
		times.style.display = 'flex';
		times.style.marginBottom = '450px';
	}else{
		times.style.display = 'none';
	}

	let video = document.getElementsByTagName('video')[0];
	video.setAttribute('src',videoSrc);
	video.setAttribute("controls","controls");
	video.load();
	 video.play();
	}


	
	
	
	// for Video closing
	function closeVideo(){
		let times = document.getElementById('fa-times');
		let video1 = document.getElementById('video1');
		let video = document.getElementsByTagName('video')[0];
		
		
		if(times.style.display = 'flex'){
			times.style.display = 'none';
			video1.style.display ='none';
			video.pause();
		}
	}



	//for trailer page 
			function videoCollection(videoId,videoSrc){
				console.log(videoId);
				let video2 = document.getElementById(videoId);
				let times = document.getElementById('fa-times');

				if(video2.style.display = 'none'){
					video2.style.display = 'block';
					
				}else{
					video2.style.display = 'none';
				}
				if(times.style.display = 'none'){  
					
					times.style.display = 'flex';
					times.style.marginBottom = '450px';
				}else{
					times.style.display = 'none';
				}
			
				let video = document.getElementsByTagName('video')[0];
				video.setAttribute('src',videoSrc);
				video.setAttribute("controls","controls");
				video.load();
				 video.play();
				}

				function closeVideoColl(){
					let times = document.getElementById('fa-times');
					let video2 = document.getElementById('video2');
					let video = document.getElementsByTagName('video')[0];
					
					
					if(times.style.display = 'flex'){
						times.style.display = 'none';
						video2.style.display ='none';
						video.pause();
					}
				}

			






	

				



	





	



























