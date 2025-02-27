const ProfilePic = ({ userId }) => {
    const userImages = {
      1: 'https://images.pexels.com/photos/2877066/pexels-photo-2877066.jpeg?auto=compress&cs=tinysrgb&w=600',
      2: 'https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=600',
      3: 'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=600',
    };
  
    const profilePic = userImages[userId] || 'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=600';
  
    return <img src={profilePic} alt="Profile Pic" style={{ width: '1000px'}} />;
  };
  
  export default ProfilePic;
  
  
  