type ListProps = {
    item: string;
};

const List = ({ item }: ListProps) => {
    return (
        <ul>
            <li>{item}</li>
        </ul>
    )
}

export default List;