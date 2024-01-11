function friend(friends) {
    const notNumber = friends.filter((number) => isNaN(number))
    const myFriend = notNumber.filter((name) => name.length <= 4)
    console.log(myFriend);
}

friend(['Ryan', 'Kieran', 'Mark']);
friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']);
friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']);
friend(['Love', 'Your', 'Face', '1']);
v