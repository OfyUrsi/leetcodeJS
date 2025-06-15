function groupObjects(pets) {
  const grPets = new Map();
  pets.forEach((pet) => {
    const group = grPets.get(pet.type) || [];
    group.push(pet.name);
    grPets.set(pet.type, group);
  });
  return grPets;
}

const pets = [
  { name: "Ursi", type: "cat" },
  { name: "Ofy", type: "cat" },
  { name: "Rocco", type: "dog" },
];

console.log(groupObjects(pets));
