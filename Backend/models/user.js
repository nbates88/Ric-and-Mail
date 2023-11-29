import {User} from './../server';


User.create({username: " Test"})
.then((user)=>{
    console.log('User created:', user.toJSON());
})
.catch((err)=> {
    console.error("Error creating user: ", err);
});