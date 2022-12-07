import PropTypes from "prop-types";
function Users ({ name, surname, age, isLoggedIn, friends}) {
    return (
        <h1>
            {isLoggedIn ? `${name} ${surname} (${age}` : "Giriş Yapınız"}
            {
                friends && friends.map((friend) => (
                    <div key={friend.id}>{friend.name}</div>
                ))
            }
        </h1>
    )
}

Users.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
    friends: PropTypes.array
}

export default Users;