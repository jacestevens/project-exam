// import { navigate } from '@reach/router'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { Button, Paper } from '@mui/material';

// const LikeButton = ({likedId}) => {

//     const [LikePet, setLikePet] = useState({
//         like: ""
//     })

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/Pet/${likedId}`)
//             .then((res)=> {
//                 console.log("Hello",res.data);
//                 setLikePet(res.data)
//             })
//             .catch((err) => console.log(err))
//     }, [])

//     const likeHandler = (e) => {

//         e.preventDefault()

//         axios.put(`http://localhost:8000/api/Pet/${likedId}`, LikePet)
//             .then((res) => {
//                 console.log(res.data);
//                 setLikePet(
//                     LikePet.like +!
//                 )  
//             })
//             .catch((err) => {
//                 console.log(err)
//             })



//     }

//     return (
//         <div>
//             <Button startIcon={<FavoriteIcon/>} variant="contained" size="large" sx={{
//                     paddingX: 10,
//                     paddingY: 2,
//                     marginY: 2,
//                     marginX: "auto",
//                     background: "Red"}} onClick={likeHandler}>I Love {LikePet.name}</Button>
//         </div>
        
//     )
// }

// export default LikeButton
