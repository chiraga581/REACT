import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, PostForm } from "../components"
import appwriteService from "../appwrite/config"
const EditPost = () => {
    const [post, setPosts] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    setPosts(post)
                })
        } else {
            navigate("/")
        }
    } ,[slug , navigate])
    return post ? (
        <div>
            <div className="py-8">
                <Container>
                    <PostForm post={post} />
                </Container>
            </div>
        </div>
    ) : null
}

export default EditPost