import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form'  
import "./PostEdit.css";


function PostEdit(props) {
  
  const [formData, setFormData] = useState({
    image_url: "",
    caption: ""
  }); 
  const { image_url, caption } = formData;
  const { posts, handleUpdate } = props; 
  const { id } = useParams(); 
  const history = useHistory(); 

  useEffect(() => {
    const prefillFormData = () => {  
      const postItem = posts.find((post) => post.id === Number(id));  
      console.log(postItem)
      setFormData({
        image_url: postItem.image_url,
        caption: postItem.caption
      });
    } 
      if (posts.length) {
    prefillFormData();
     }
  },[posts, id])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  
  
  
  return ( 
    < div  >
    <div className = "editpost-form" >
      <Form className="form-"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id,formData);
          history.push('/main');
        }}>
        <Form.Group>
          <Form.Control
            
            type='text'
            name='image_url'
            placeholder="image_url"
            value={image_url}
            onChange={handleChange}
            required 
            cols={35}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control
           
            type='text'
            name='caption'
            placeholder="caption"
            value={caption}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <button className="editpost-button">Post</button>
      </Form>
    </div>
    </div >
    
  )
} 

export default PostEdit;