import React from "react"

export function CreateUser() {

return(
    <>
    <form method="post" action="/users/create">
            <input type="text" name="name" required>Name</input>
            <input type="text" name="username" required>Username</input>
            <input type="email" name="email" required>Email</input>
            <input type="url" name="profile-image" required>Profile Image</input>
            <input type="url" name="cover-image" required>Cover Image</input>
            <button type="submit">Create User</button>
    </form>
    </>
)
}