interface Props {
    headline: string;
}

export const Title = ({headline}: Props) => {
    return (
        <>
            <h1>{headline}</h1>
        </>
    )
}