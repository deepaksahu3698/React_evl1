import React from "react";

// import id from "uuid"
 export default function Input_form(){

const [Data,setData]=React.useState({
  
    title:"" ,
    gander: "",
    price:"" ,
    category:"",
    image:"https://picsum.photos/200"
})
const handlechange =(e)=>{
    let{name, value, checked, type,options}=e.target
    // value=type="sele"
    setData({...Data,[name]:value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Data);
    // console.log(inputRef.current.files[0]);
    // console.log(inputRef.current.files[0]);
    fetch(`http://localhost:3001/item`,{
        method:"POST",
        body:JSON.stringify(Data),
        headers:{

            "content-type":"application/json"
        }
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch(console.log("error"))
  };
  const { title, gander, price, category,image } = Data;
return (
    <form onSubmit={handleSubmit} >
        <div>
        {/* title gender price category and image. gender */}
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Enter the Title" name="title"
          onChange={handlechange} value={title} />
        </div>
        <div>
        {/* title gender price category and image. gender */}
            <label htmlFor="">Select Gender</label>
        
            <select name="" id="" onChange={handlechange}  value={gander} >
                <option value="Male" >Male</option>
                <option value="FeMale">FeMale</option>
            </select>
        </div>
        <div>
        {/* title gender price category and image. gender */}
            <label htmlFor="">Enter the priice</label>
            <input type="text" placeholder="Enter the Price" name="price"
            onChange={handlechange} value={price} />
           
        </div>
        <div>
        {/* title gender price category and image. gender */}
            <label htmlFor="">Enter the Category </label>
            <input type="text" placeholder="Enter the Category" name="category"
           onChange={handlechange} value={category} />
           
        </div>
       
        <div>
            <input type="submit" value="SUBMIT FORM" />
        </div>
    </form>

    
)

 }








// import React from "react";

// export default function App() {
//   const [data, setFormData] = React.useState({
//     username: "",
//     password: "",
//     age: "",
//     isMarried: false
//   });
//   const inputRef = React.useRef(null);

//   const handleChange = (e) => {
//     let { name, value, checked, type } = e.target;

//     value = type === "checkbox" ? checked : value;

//     // username, password, age
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
   
//   };

//   const { username, password, age, isMarried } = formData;
//   return (
//     <div className="App">
//       <h3>SIGN UP FORM</h3>
//       <br />
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Age"
//           name="age"
//           onChange={handleChange}
//           value={age}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Username"
//           name="username"
//           onChange={handleChange}
//           value={username}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//         <br />
//         <label>
//           MARRIED :{" "}
//           <input
//             type="checkbox"
//             checked={isMarried}
//             onChange={handleChange}
//             name="isMarried"
//           />
//         </label>
//         <br />
//         <input type="file" ref={inputRef} />
//         <br />
//         <input type="submit" value="SUBMIT FORM" />
//       </form>
//     </div>
//   );
// }
