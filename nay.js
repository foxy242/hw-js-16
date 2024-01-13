// task 1

// const users = [
//     { id: 1, name: "Georgiy" },
//     { id: 2, name: "Bogdun" },
//     { id: 3, name: "Tatiana" }
//   ];
  
//   const userNames = users.map(user => user.name);
  
//   console.log(userNames);

// Отримати масив імен всіх користувачів (поле name).

// task 2

// const users = [
//     { id: 1, name: "Georgiy", eyeColor: "blue" },
//     { id: 2, name: "Ivan", eyeColor: "blue" },
//     { id: 3, name: "Tatiana", eyeColor: "brown" },
//     { id: 4, name: "Olga", eyeColor: "brown" }
//   ];
  
//   const usersWithBlueEyes = users.filter(user => user.eyeColor === 'blue');
  
//   console.log(usersWithBlueEyes);

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// task 3

// const users = [
//     { id: 1, name: "Georgiy", gender: "male" },
//     { id: 2, name: "Ivan", gender: "male" },
//     { id: 3, name: "Tatiana", gender: "female" },
//     { id: 4, name: "Olga", gender: "female" }
//   ];
  
//   const getUsersByGender = (users, targetGender) => {
//     return users
//       .filter(user => user.gender === targetGender)
//       .map(user => user.name);
//   };
  
//   const maleUsers = getUsersByGender(users, "male");
//   const femaleUsers = getUsersByGender(users, "female");
  
//   console.log("Male Users:", maleUsers);
//   console.log("Female Users:", femaleUsers);

// Отримати масив імен користувачів за статтю (поле gender).

// task 4

// const users = [
//     { id: 1, name: "Georgiy", isActive: true },
//     { id: 2, name: "Ivan", isActive: false },
//     { id: 3, name: "Tatiana", isActive: true },
//     { id: 4, name: "Olga", isActive: false }
//   ];
  
//   const inactiveUsers = users.filter(user => !user.isActive);
  
//   console.log(inactiveUsers);

// Отримати масив тільки неактивних користувачів (поле isActive).

// task 5

// const users = [
//     { id: 1, name: "Georgiy", email: 'john@example.com' },
//     { id: 2, name: "Ivan", email: 'alice@example.com' },
//     { id: 3, name: "Tatiana", email: 'bob@example.com' },
//     { id: 4, name: "Olga", email: 'eve@example.com' }
//   ];
  
//   const getUserByEmail = (users, userEmail) => {
//     return users.find(user => user.email === userEmail);
//   };
  
//   const user = getUserByEmail(users, 'alice@example.com');
  
//   console.log(user);

// Отримати користувача (не масив) по email (поле email, він унікальний).

// task 6

// const users = [
//     { id: 1, name: "Georgiy", age: 13 },
//     { id: 2, name: "Ivan", age: 44 },
//     { id: 3, name: "Tatiana", age: 1,4 },
//     { id: 4, name: "Olga", age: 37 }
//   ];
  
//   const getUsersInAgeRange = (users, min, max) => {
//     return users.filter(user => user.age >= min && user.age <= max);
//   };
  
//   const ageRangeUsers = getUsersInAgeRange(users, 13, 44);
  
//   console.log(ageRangeUsers);

// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).