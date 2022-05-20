export default function SinglePost(){
    return (
        <h2>Single Post</h2>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    console.log(context.params)
    // Pass data to the page via props
    return { props: {  } }
}
