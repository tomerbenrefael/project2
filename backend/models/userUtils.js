// get user schema



const User = require('../models/userModel');



// Get All users
exports.getAllUsers = function()
{
    return new Promise((resolve,reject) =>
    {
        User.find({}, function(err,usersData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(usersData);
            }
        })
    })
}



// Get single user

exports.getUser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        User.findById(id, function(err,userData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(userData);
            }
        })
    })
}





// Create user


exports.addUser = function(userData)
{
    return new Promise((resolve,reject) =>
    {
        let newUser = new User({
            name: userData.name,
            email: userData.email,
            street: userData.street,
            city: userData.city,
            zipcode: userData.zipcode,
            tasks: userData.tasks,
            posts: userData.posts
        });

        newUser.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created !');
            }
        })
    })
}


// Update user

exports.updateUser = function(id,userData)
{
    return new Promise((resolve,reject) =>
    {
        User.findByIdAndUpdate(id,
            {
                name: userData.name,
                email: userData.email,
                street: userData.street,
                city: userData.city,
                zipcode: userData.zipcode,
                tasks: userData.tasks,
                posts: userData.posts
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated !')
                }
            })
           
    })
    
}



// Delete user

exports.deleteUser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        User.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Deleted !')
                }
            })
    })
}

