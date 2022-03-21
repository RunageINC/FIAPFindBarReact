import Badge from 'react-bootstrap/Badge';

const SmallTextDecoration = ({ text, type }) => {
    if (type === "tag") {
        return (
            <>
            <span>
                <Badge pill bg="dark" text="white">
                    {text}
                </Badge>
            </span>&nbsp;&nbsp;
            </>
        );
    } else {
        return (
            <h3>
                <Badge pill bg="success">
                    {text}
                </Badge>
            </h3>
        );
    }
}

export default SmallTextDecoration;