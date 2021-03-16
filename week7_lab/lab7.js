function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “An image of a panda”;
  this.image = “panda.png”;
}

function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “An image of a lion”;
  this.image = “lion.png”;
}

function Zebra(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “An image of a zebra”;
  this.image = “zebra.png”;
}

let animals = [new Panda(), new Lion(), new Zebra()];
let names = ["Bamboo", "Leo", "Zee"];

function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	let randomIndex = generateRandomIndex(names.length);
  	return names[randomIndex];
}

function generateRandomAge() {
	return generateRandomIndex(10);
}

function generateRandomAnimal() {
	let randomIndex = generateRandomIndex(animals.length); 
	let randomAnimal = animals[randomIndex];

	if (randomAnimal instanceof Panda)
	{
		return new Panda(generateRandomName(), generateRandomAge());
	}
	else if (randomAnimal instanceof Lion)
	{
		return new Lion(generateRandomName(), generateRandomAge());
	}
	else if (randomAnimal instanceof Zebra)
	{
		return new Zebra(generateRandomName(), generateRandomAge());
	}
}

function onLoad() {
  let animal = generateRandomAnimal();
  console.log(animal)
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}