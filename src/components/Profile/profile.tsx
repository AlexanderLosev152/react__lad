import classes from './Profile.module.scss'

const Profile = () => {
  const user = {
    firstName: "Alex",
    lastName: "Losev",
    imageUrl: "./vite.svg",
  };
  return (
    <div className={classes.profile}>
      <img className={classes.profile__img} src={user.imageUrl} alt="" />
      <span>name user : {user.firstName}</span>
      <span> {user.lastName.slice(0,1)}</span>
    </div>
  );
};

export default Profile;
