const User = require("../models/User");

const list_users = async (req, res) => {

    const users = await User.find({});

    //console.log(users);

    return res.render('users/index', { users: users });
}

const add_user = (req, res) => {
    return res.render('users/add');
}

const insert_user = async (req, res) => {
    const { name, email, phone } = req.body;
    
    const user = new User({ name: name, email: email, phone: phone });

    await user.save();

    return res.redirect('/users');
}

const edit_user = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.render('users/edit', { user: user });
}

const update_user = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const user = await User.findById(id); 
    await user.updateOne({ name: name, email: email, phone: phone });

    return res.redirect('/users');
}

const delete_user = (req, res) => {

}

module.exports = {
    list_users,
    add_user,
    insert_user,
    edit_user,
    update_user,
    delete_user
}