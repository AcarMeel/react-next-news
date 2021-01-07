

const Feed = ({pageNumber, articles}) => {
    return (
        <div>
            Feed
            {pageNumber}

            {articles.map(article => (
                <p>{article.title}</p>
            ))}
        </div>
    )
}

export async function getServerSideProps(context) {
    const pageNumber = context.query.slug;
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

    const apiResponse = await fetch(`http://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
        }
    });
    const apiJson = await apiResponse.json();
    const {articles} = apiJson;
    console.log(apiJson)
    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    };
  }

export default Feed
