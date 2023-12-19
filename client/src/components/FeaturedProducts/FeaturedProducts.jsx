import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ut velit quis risus ultricies rutrum. Curabitur non
                    mollis metus. Cras id ipsum at ex eleifend ultricies. Proin
                    suscipit convallis sodales.
                </p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                    ? "loading"
                    : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    );
};

export default FeaturedProducts;
