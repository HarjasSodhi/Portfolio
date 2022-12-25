import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

function Blog() {
    const [md, setMd] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const name = useParams().name?.split('_').join(" ");
    useEffect(() => {
        fetch('/blog/' + name + '.md')
            .then((data => {
                if (!data.ok) {
                    throw new Error("Not 2xx response", { cause: data });
                } else {
                    return data.text();
                }
            }))
            .then((res) => {
                setLoading(false);
                setMd(res);
            }).catch(err => {
                navigate('/404');
            })
    }, []);

    return (
        loading ? <Loader /> : <MarkdownPreview source={md} warpperElement={{ "data-color-mode": "dark" }} />
    )
}

export default Blog