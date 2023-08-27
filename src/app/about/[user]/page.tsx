export default function Page({ params }: { params: { user: string } }) {

    return (
        <h1>Page About of { params.user }</h1>
    )
}