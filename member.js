function skillsMember() {
    let member = {
        name: 'John Doe',
        age: 30,
        address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
        },
        skills: ['js', 'html', 'css']
    }

    let memberJSON = JSON.stringify(member);
    console.log(memberJSON);
    console.log(typeof memberJSON);

    let memberObject = JSON.parse(memberJSON);
    console.log(memberObject);
    console.log(typeof memberObject);
}