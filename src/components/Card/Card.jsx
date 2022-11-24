import React from "react"
import { Link } from "react-router-dom"
import products from "../../data/logements.json"

export default function Card() {
    return (
        <section className="cards-container">
            {products.map((product) => {
                return (
                    <article className="card" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img
                                src={product.cover}
                                alt="Logement"
                                className="card__img"
                            />
                            <p className="card__title">{product.title}</p>
                        </Link>
                    </article>
                )
            })}
        </section>
    )
}
