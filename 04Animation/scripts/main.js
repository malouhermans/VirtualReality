// changing individual properties with code and using setInterval


var rotationSpeed = 0.05;
// 4.6 De balk sneller laten draaien, dit draaide echter te snel, dus ik heb besloten weer met de oude 
// waarde door te gaan:
// var rotationSpeed = 0.50;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	// 4.4 Clockwise:
	// myOtherBox.object3D.rotation.x -= rotationSpeed;
	// console.log(myOtherBox.object3D.rotation.x);
	// myOtherBox.object3D.rotation.y -= rotationSpeed;
	// console.log(myOtherBox.object3D.rotation.y);
	// myOtherBox.object3D.rotation.z -= rotationSpeed;
	// console.log(myOtherBox.object3D.rotation.z);

	// 4.4 Counter clockwise:
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.y += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y);
	myOtherBox.object3D.rotation.z += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.z);

	// 4.5 Er zijn drie regels code geschreven, dit is om de verschillende assen te laten draaien
}

setInterval(spin, 16); //equivalent to 60 fps

// 

