function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image = "panda.png";
  this.image_alt = "An image of a panda";
}

function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a lion";
  this.image = "lion.png";
}

function Zebra(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "An image of a zebra";
  this.image = "zebra.png";
}

let animals = [new Panda(), new Lion(), new Zebra()];
let names = ["Bamboo", "Leo", "Zee", "Bea", "Alex"];

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
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  var hasSavedAnimal = false;
  if (animal === null)
  {
    document.getElementById("button-storage").textContent = "Save Animal";
    animal = generateRandomAnimal();
  }
  else
  {
    document.getElementById("button-storage").textContent = "Clear Animal";
    hasSavedAnimal = true;
  }
  console.log(animal)
  document.getElementById("animal-properties").textContent = animal.name + " is " + animal.age + " " + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);
  document.getElementById("button-storage").addEventListener("click", function(){
    if (hasSavedAnimal)
    {
      localStorage.removeItem("savedAnimal");
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-text").textContent = "Cleared!";
      document.getElementById("button-text").style.display = "block";
    }
    else {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-text").textContent = "Saved!";
      document.getElementById("button-text").style.display = "block";
    }
  });


};